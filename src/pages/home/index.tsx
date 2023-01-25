import { Section, ContainerCard, ContainerSearch, Input, Text, Loading, NoDataContainer } from "./styled";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import { UseFetch } from "../../utils/pokemonContext";
import Card from "./card";
import CardSkeleton from "../../components/skeleton/card";
import ModeOffline from "../../components/offlineMode";
import { IItem } from "../../utils/interface";
import ReactLoading from "react-loading";
import Lottie from "lottie-react";
import nodata from "./nodata.json";
const Home: React.FC = () => {
  const [data, setData] = useState<Array<IItem>>([]);
  const [offset, setOffset] = useState<number>(0);
  const [suggest, setSuggest] = useState<Array<IItem>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>("");

  let network = JSON.parse(`${localStorage.getItem("_cap_network")}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await UseFetch(`pokemon?limit=10&offset=0`);
        setData(res.data.results);
      } catch (error) {
        setIsLoading(true);
      }
    };
    fetchData();
  }, [suggest]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setIsLoading(true);
      UseFetch(`pokemon?limit=10&offset=${offset + 6}`)
        .then((res) => {
          setOffset(offset + 6);
          setData([...data, ...res.data.results]);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(true);
        });
    }, 1500);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataPokemon = [...data];
    let suggestion: Array<IItem> = [];
    setValueSearch(e.target.value);
    if (e.target.value.length > 0) {
      suggestion = dataPokemon.filter((el: IItem) => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
    }
    setSuggest(suggestion);
  };

  return (
    <Section id="scrollableDiv">
      <ContainerSearch>
        <Input onChange={handleSearch} placeholder="Search pokemon" type="text" />
      </ContainerSearch>
      <Text>Pokédex ({suggest.length && valueSearch.length ? suggest.length : !suggest.length && valueSearch.length ? suggest.length : data.length})</Text>
      <CardSkeleton loading={isLoading} />
      {suggest.length && valueSearch.length ? (
        <ContainerCard>
          {suggest.map((e: IItem, i: number) => {
            return <Card key={i} data={e} />;
          })}
        </ContainerCard>
      ) : (
        <>
          {!suggest.length && valueSearch.length ? (
            <NoDataContainer>
              <Lottie animationData={nodata} loop={true} />
            </NoDataContainer>
          ) : (
            <>
              <ContainerCard>
                {data.map((e: IItem, i: number) => {
                  return <Card key={i} data={e} />;
                })}
              </ContainerCard>
              <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                style={{ display: "flex", flexDirection: "column-reverse" }}
                hasMore={true}
                loader={
                  data.length === 1126 ? null : (
                    <Loading>
                      <ReactLoading type={"spin"} color={"#808080"} width={30}></ReactLoading>
                    </Loading>
                  )
                }
                scrollableTarget="scrollableDiv"
                children={undefined}
              ></InfiniteScroll>
            </>
          )}
        </>
      )}
      {network === false && <ModeOffline />}
    </Section>
  );
};

export default Home;
