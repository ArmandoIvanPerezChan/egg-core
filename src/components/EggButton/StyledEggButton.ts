import styled from 'styled-components'
import { EggButtonProps } from './EggButton'

export const StyledEggButton = styled.button<EggButtonProps>`
    background-color: white;
    padding-top: 11px;
    padding-bottom: 11px;
    box-shadow: 0px 0px 30px #0000000D;
    border: 1px solid #EDEDED;
    height: height;
    border-radius: 8px;
    width: ${ props => props.full ? "100%" : props.width };

    :hover:enabled {
        background-color: #eaeaea;
        cursor: pointer;
    }
`