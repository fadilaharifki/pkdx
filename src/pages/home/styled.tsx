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
    background: ${(props) => props.color}
`