import styled from "@emotion/styled";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

export const Box = styled(Skeleton)`
    margin:10px;
    width:135px;
    height:10rem;
    border-radius: 20px;

    @media screen and (min-width: 374px) {
        width:160px;
        height:12rem;
    }
`