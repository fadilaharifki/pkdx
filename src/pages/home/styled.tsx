import styled from "@emotion/styled";

interface StyledStatProps {
  size: number;
}

export const Section = styled.section`
  height: 100vh;
  overflow-y: scroll;
`;
export const SectionDetail = styled.section`
  height: 100vh;
  overflow-y: scroll;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardPoke = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 40%;
  min-height: 200px;
  background: ${(props) => props.color};
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  transition: 1s;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
  }
`;

export const Text = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 20px 20px 10px;
`;

export const TitleCard = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 374px) {
    font-size: 13px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const Type = styled.div`
  border-radius: 10px;
  padding: 2px 10px;
  color: white;
  background: ${(props) => props.color};
  margin-right: 5px;
  text-transform: capitalize;

  @media screen and (max-width: 374px) {
    font-size: 13px;
  }
`;
export const Input = styled.input`
  padding: 10px 20px;
  margin: 8px 0;
  border-radius: 10px;
  outline: none;
  border: 1px solid green;
  width: 75%;
  &:focus {
    border: 2px solid rgb(80, 200, 255);
    box-shadow: 2px 1px 31px 2px rgba(80, 200, 255, 0.53);
    -webkit-box-shadow: 2px 1px 31px 2px rgba(80, 200, 255, 0.53);
    -moz-box-shadow: 2px 1px 31px 2px rgba(80, 200, 255, 0.53);
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.color};
`;
export const TitleDetail = styled.div`
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (max-width: 374px) {
    font-size: 13px;
  }
`;

export const Layout = styled.div`
  border-radius: 20px 20px 0 0;
  padding: 20px;
  background: white;
`;
export const NavBarBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleBottom = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 20px 0;
  margin-right: 10px;
  color: ${(props) => props.color};
  cursor: pointer;
  @media screen and (max-width: 374px) {
    font-size: 13px;
  }
`;

export const ContainerChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Bar = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10px;
  background: #ededed;
  border-radius: 20px;
`;

export const Bar2 = styled.div<StyledStatProps>`
  box-sizing: border-box;
  width: ${(props) => `${props.size}%`};
  height: 10px;
  border-radius: 20px;
  background: ${(props) => `${props.size > 50 ? "green" : "orange"}`};
`;

export const TitleChart = styled.div`
  width: 80%;
  text-transform: capitalize;
  padding: 3px 0;
`;
export const NumberChart = styled.div`
  font-weight: bold;
  margin-right: 5px;
  width: 30px;

  @media screen and (max-width: 374px) {
    width: 20px;
  }
`;
export const TitleStat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImgAnimate = styled.img`
  potition: fixed;
`;

export const LayoutTop = styled.div`
  padding: 20px;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 300px;
`;

export const PositionAbility = styled.div`
  margin-right: 10px;
  border-radius: 10px;
  background: #ededed;
  padding: 5px 10px;
  @media screen and (max-width: 374px) {
    font-size: 13px;
  }
`;

export const ContainerAbility = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding-left: 8px;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const TextAbouTitle = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TextAbout = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
`;

export const TextAbilities = styled.div`
  padding: 10px 2px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
`;

export const Desc = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Loading = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
