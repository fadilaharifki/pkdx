import styled from '@emotion/styled'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    background: #f5f5f5;
`

export const ContainerMobile = styled.div`
  background: #ffffff;
  // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 100%;

  @media screen and (min-width: 447px) {
    width: 450px;
  }

`