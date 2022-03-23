import styled from "@emotion/styled"

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

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 125px;
    padding: 10px 20px;
    margin: 5px;
    background-image:  linear-gradient(90deg, rgba(177,240,227,1) 0%, rgba(143,201,130,1) 46%, rgba(242,255,141,1) 100%);
    border-radius: 15px;
    cursor: pointer;

    @media screen and (max-width: 374px) {
        width: 90px;
        padding: 30px 20px;
    }

    &:hover {
        -webkit-transform: scale(1.08);
        transform: scale(1.08);
    };

    &:focus {
        -webkit-transform: scale(1.08);
        transform: scale(1.08);
    }
`

export const TitleCard = styled.div`
    text-transform: uppercase;
    text-align:center;
    font-weight:bold;

    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const PositionTypeContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-weight:bold;
`

export const PositionType = styled.div`
    margin:10px 2px;
    border-radius:10px;
    background: #de6000;
    padding: 5px 10px;
    color:white;
    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const Owned = styled.div`
    margin:10px 2px;
    border-radius:10px;
    background: #de6000;
    padding: 5px 10px;
    color:white;
    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const ShapeBackgorund = styled.div`
    width: 100%;
    height :7rem;
    border-radius: 0 0 0 100px;
    background-image: linear-gradient(90deg, rgba(34,195,94,1) 0%, rgba(253,231,45,1) 100%);
`

export const ContainerDetail = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

export const CardDetail = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:-3rem;
    padding:20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    background:white;
    z-index:10;
    width: 70%;
    height :12rem;
    border-radius:20px;
    `

export const Content = styled.div`
    display:flex;
    flex-direction: row;
    `

export const CardBottom = styled.div`
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 80px 0 0 30px;
    psition:fixed;
    margin-top:-3rem;
    z-index:1;
    background:white;
    height : 100vh;
    border-radius: 100px 0 0 0;

    @media screen and (max-width: 414px) {
        height : auto;
    }
`

export const ContainerChart = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
`

export const Bar = styled.div`
    box-sizing: border-box;
    width: 150px;
    height: 10px;
    background: #ededed;
    border-radius:20px;
`

export const TitleChart = styled.div`
    width:100px
`
export const NumberChart = styled.div`
    font-weight:bold;
    margin-right: 5px;
    width: 30px;

    @media screen and (max-width: 374px) {
           width: 20px;
    }
`

export const TitleDetail = styled.div`
    text-transform: uppercase;
    font-weight:bold;
    font-size: 25px;
`

export const TitleBottom = styled.div`
    text-transform: uppercase;
    font-weight:bold;
    margin: 10px 0;
    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const Desc = styled.div`
    margin-bottom:40px;
`
export const ContainerAbility = styled.div`
    display: flex;  
    flex-direction:row;
    justify-content: start;
    align-items:center;
    width: 100%;
`
export const ContainerMove = styled.div`
    display: flex;  
    flex-wrap: wrap;
    flex-direction:row;
    justify-content: start;
    align-items:center;
    padding-bottom:100px;
    width: 100%;
`

export const PositionAbility = styled.div`
    margin-right:10px;
    border-radius:10px;
    background: #ededed;
    padding: 5px 10px;
    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`


export const PositionMoves = styled.a`
    margin:5px;
    border-radius:10px;
    background: #ededed;
    padding: 5px 10px;
    cursor:pointer;
    text-decoration: none;
    color:black;

    &:hover {
        background: green;
        color:white;
    }

    &:focus {
        background: green;
        color:white;
    }

    @media screen and (max-width: 374px) {
        font-size:13px;
    }
`

export const BtnCatch = styled.div`
    margin-top:2rem;
    color:white;
    font-weight:bold;
    background: green;
    padding: 15px 20px;
    border-radius: 10px;
    width: 55px;
`
export const Input = styled.input`
    padding: 10px 20px;
    margin: 8px 0;
    border-radius:10px;
    outline: none;
    border: 1px solid;
    width: 75%
`

export const Img = styled.img`
    display:flex;
    width:130px;
    height:130px;
`

export const ContainerSearch = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:20px;
    justify-content:center;
    flex-wrap: wrap;
    width: 100%;
`