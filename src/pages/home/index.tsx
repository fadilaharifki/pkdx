import { Section, ContainerCard, ContainerSearch, Input, Text } from "./styled"
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import { UseFetch } from "../../utils/pokemonContext";
import Card from "./card";
import CardSkeleton from "../../components/skeleton/card";
import ModeOffline from "../../components/offlineMode";
import { IItem } from "../../utils/interface";

const Home: React.FC = () => {
    const [data, setData] = useState<Array<IItem>>([])
    const [offset, setOffset] = useState<number>(0)
    const [suggest, setSuggest] = useState<Array<IItem>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    let network = JSON.parse(`${localStorage.getItem('_cap_network')}`)

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
            .catch(() => {
                setIsLoading(true)
            })

    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dataPokemon = [...data]
        let suggestion: Array<IItem> = []
        if (e.target.value.length > 0) {
            suggestion = dataPokemon.filter((el: IItem) => el.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
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
                            suggest.map((e: IItem, i: number) => {
                                return (
                                    <Card key={i} data={e} />
                                )
                            })
                        }
                    </ContainerCard>
                ) : (
                    <ContainerCard>
                        {
                            data.map((e: IItem, i: number) => {
                                return (
                                    <Card key={i} data={e} />
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
                network === false && <ModeOffline />
            }
        </Section>
    )
}

export default Home