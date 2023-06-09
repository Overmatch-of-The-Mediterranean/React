import { styled } from "styled-components";

export  const HomeWrapper = styled.div`
    .list {
        .item {
            color: ${props=>props.theme.color};
        }
    }
`

export const HyButton = styled.button`
    border: 3px solid red;
    font-size: 50px;
`

export const NewHyButton = styled(HyButton)`
    background-color: green;
    border-radius: 5px;
`
