import styled from "@emotion/styled";

export const Container = styled.div`
    position:fixed;
    display:flex;
    flex-direction:row;
    justify-content: center;
    z-index:100;
    width: 100%;
    bottom: 0;
    margin: 10px 0;
`

export const Box = styled.div`
    width: 95%;
    height: 4rem;
    display:flex;
    flex-direction:row;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    background: #95c98f;
`
export const Text = styled.div`
    font-weight: bold;
    text-align: center;
    color: white;
    margin-left: 10px;
`