import { Section, ContainerCard, ContainerSearch, Input, Text } from "./styled"
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import { UseFetch } from "../../utils/pokemonContext";
import Card from "./card";
import CardSkeleton from "../../components/skeleton/card";
import ModeOffline from "../../components/offlineMode";

const Home: React.FC = () => {
    const [data, setData] = useState<any>([])

    const [offset, setOffset] = useState(0)
    const [suggest, setSuggest] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await UseFetch(`pokemon?limit=10&offset=0`)
                setData(res.data.results)
            } catch (error) {
                setIsLoading(true)
            }
        }
        fetchData()
    }, [suggest])

    const fetchMoreData = () => {
        UseFetch(`pokemon?limit=10&offset=${offset + 10}`)
            .then((res) => {
                setOffset(offset + 10)
                setData([...data, ...res.data.results])
            })
            .catch((err) => {
                setIsLoading(true)
            })

    }

    const handleSearch = (e: any) => {
        const dataPokemon = [...data]
        let suggestion = []
        if (e.target.value.length > 0) {
            suggestion = dataPokemon.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        }
        setSuggest(suggestion);
    }


    return (
        <Section id="scrollableDiv">
            <ContainerSearch>
                <Input onChange={handleSearch} placeholder="Search pokemon" type="text" />
            </ContainerSearch>
            <Text>Pokédex ({suggest.length ? suggest.length : data.length})</Text>
            <CardSkeleton loading={isLoading} />
            {
                suggest.length ? (
                    <ContainerCard>
                        {
                            suggest.map((e: any, i: number) => {
                                return (
                                    <Card key={i} data={e} />
                                )
                            })
                        }
                    </ContainerCard>
                ) : (
                    <ContainerCard>
                        {
                            data.map((e: any, i: number) => {
                                return (
                                    <Card key={i} data={e} index={i} />
                                )
                            })
                        }
                    </ContainerCard>
                )
            }
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
                hasMore={true}
                loader={data.length === 1126 ? null : <CardSkeleton loading={true} />
                }
                scrollableTarget="scrollableDiv"
            >
            </InfiniteScroll>
            {
                JSON.parse(`${localStorage.getItem('_cap_network')}`) === false && <ModeOffline />
            }
        </Section>
    )
}

export default Home