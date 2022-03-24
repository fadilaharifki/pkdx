import styled from "@emotion/styled"

interface StyledStatProps {
    size?: number
}

export const Section = styled.section`
    height: 100vh;
    overflow-y: scroll;
`
export const SectionDetail = styled.section`
    height: 100vh;
    overflow-y: scroll;
`

export const ContainerList = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap: wrap;
    width: 100%;
`

export const ContainerCard = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-wrap: wrap;
`

export const CardPoke = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    flex-wrap: wrap;
    width: 40%;
    background: ${(props) => props.color};
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    
    &:hover {
        -webkit-transform: scale(1.08);
        transform: scale(1.08);
    };
`

export const Text = styled.div`
    text-transform: uppercase;
    font-weight:bold;
    margin:20px 20px 10px;
`

export const TitleCard = styled.div`
    text-transform: uppercase;
    text-align:center;
    font-weight:bold;

    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const List = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 5px;
`

export const Type = styled.div`
    border-radius: 10px;
    padding: 2px 10px;
    color: white;
    background: ${(props) => props.color};
    margin-right: 5px;
    text-transform: capitalize;
`
export const Input = styled.input`
    padding: 10px 20px;
    margin: 8px 0;
    border-radius:10px;
    outline: none;
    border: 1px solid;
    width: 75%
`

export const ContainerSearch = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:20px;
    justify-content:center;
    flex-wrap: wrap;
    width: 100%;
`

export const Img = styled.img`
    display:flex;
    width:100%;
    height:auto;
`

export const ContainerDetail = styled.div`
    display:flex;
    flex-direction: column;
    background: ${(props) => props.color};
`
export const TitleDetail = styled.div`
    text-transform: uppercase;
    font-weight:bold;

    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const Layout = styled.div`
    border-radius: 20px 20px 0 0;
    height: 100vh;
    padding: 20px;
    background:white;
    
`

export const TitleBottom = styled.div`
    text-transform: uppercase;
    font-weight:bold;
    margin: 10px 0;
    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const ContainerChart = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin-bottom:10px;
`

export const Bar = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 10px;
    background: #ededed;
    border-radius:20px;
`

export const Bar2 = styled.div<StyledStatProps>`
    box-sizing: border-box;
    width: ${(props: any) => `${props.size}%`};
    height: 10px;
    border-radius:20px;
    background: ${(props: any) => `${props.size > 50 ? "green" : "orange"}`};
`

export const TitleChart = styled.div`
    width:80%;
    text-transform: capitalize;
    padding: 3px 0;
`
export const NumberChart = styled.div`
    font-weight:bold;
    margin-right: 5px;
    width: 30px;

    @media screen and (max-width: 374px) {
           width: 20px;
    }
`
export const TitleStat = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`

export const ImgAnimate = styled.img`
    // display:flex;
    potition: fixed;
`

export const LayoutTop = styled.div`
    padding: 20px
`

export const ContainerImage = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`