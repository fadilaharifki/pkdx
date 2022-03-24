import { Section, ContainerCard, ContainerSearch, Input, Text } from "./styled"
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import { UseFetch } from "../../utils/pokemonContext";
import Card from "./card";

const Home: React.FC = () => {
    const [data, setData] = useState<any>([])
    const [offset, setOffset] = useState(0)
    const [suggest, setSuggest] = useState<any>([])

    useEffect(() => {
        UseFetch(`pokemon?limit=10&offset=0`)
            .then((res) => {
                setData(res.data.results)
            }).catch((err) => {

            })
    }, [suggest])

    const fetchMoreData = () => {
        UseFetch(`pokemon?limit=10&offset=${offset + 10}`)
            .then((res) => {
                setOffset(offset + 10)
                setData([...data, ...res.data.results])
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
            <Text>Pokédex ({suggest.length ? suggest.length : data.length - 1})</Text>
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
                loader={null}
                scrollableTarget="scrollableDiv"
            >
            </InfiniteScroll>

        </Section>
    )
}

export default Home