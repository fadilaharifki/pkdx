import { DetailContainer, TopName, TopAbility, ContainerAbility, ContainerImg, Img, ContainerStatistic, Text1, Text2, Title, Value, ContainerStatisticValue } from "./style";

interface PostProps {
  loading: boolean;
}

export default function DetailSkeleton({ loading }: PostProps) {
  return (
    <>
      {loading && (
        <DetailContainer>
          <TopName />
          <ContainerAbility>
            <TopAbility />
            <TopAbility />
          </ContainerAbility>
          <ContainerImg>
            <Img></Img>
          </ContainerImg>

          <ContainerStatistic>
            <ContainerAbility>
              <Title />
              <Title />
            </ContainerAbility>
            <Text1 />
            <Text2 />
            <ContainerStatisticValue>
              <Title />
              <Value />
            </ContainerStatisticValue>
            <ContainerStatisticValue>
              <Title />
              <Value />
            </ContainerStatisticValue>
            <ContainerStatisticValue>
              <Title />
              <Value />
            </ContainerStatisticValue>
          </ContainerStatistic>
        </DetailContainer>
      )}
    </>
  );
}
