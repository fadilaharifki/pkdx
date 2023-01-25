import styled from "@emotion/styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Box = styled(Skeleton)`
  margin: 10px;
  width: 135px;
  height: 10rem;
  border-radius: 20px;

  @media screen and (min-width: 374px) {
    width: 160px;
    height: 12rem;
  }
`;

export const DetailContainer = styled.div``;
export const TopName = styled(Skeleton)`
  margin: 10px;
  width: 135px;
  height: 2rem;
  border-radius: 10px;

  @media screen and (min-width: 374px) {
    width: 135px;
    height: 2rem;
  }
`;
export const ContainerAbility = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TopAbility = styled(Skeleton)`
  margin-left: 10px;
  width: 70px;
  height: 1rem;
  border-radius: 10px;

  @media screen and (min-width: 374px) {
    width: 70px;
    height: 1.5rem;
  }
`;

export const ContainerImg = styled.div`
  padding: 10px;
  border-radius: 10px;
`;

export const Img = styled(Skeleton)`
  width: 100%;
  height: 20rem;
  border-radius: 10px;
`;

export const ContainerStatistic = styled.div`
  padding: 10px;
`;

export const Title = styled(Skeleton)`
  width: 100px;
  height: 1rem;
  border-radius: 10px;
  margin-right: 10px;

  @media screen and (min-width: 374px) {
    width: 100px;
    height: 1.5rem;
  }
`;
export const Value = styled(Skeleton)`
  width: 80px;
  height: 1rem;
  border-radius: 10px;
  margin-right: 10px;

  @media screen and (min-width: 374px) {
    width: 80px;
    height: 1.5rem;
  }
`;
export const Text1 = styled(Skeleton)`
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  height: 1rem;
`;
export const Text2 = styled(Skeleton)`
  width: 70%;
  border-radius: 10px;
  height: 1rem;
  margin-bottom: 10px;
`;

export const ContainerStatisticValue = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
`;
