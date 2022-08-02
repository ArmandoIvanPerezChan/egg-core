import { StyledEggButton } from './StyledEggButton'

export interface EggButtonProps {
    children?: any,
    /**
     * onClick is a event for execute any function
     */
    onClick?: () => void
    /**
     * width is for set a width to the button
     */
    width?: string | number,
    /**
     * height is for set a height to the button
     */
    height?: string | number
    /**
     * full is for set a full size to the button
     */
    full?: boolean,
}

export const EggButton = ({ onClick, children, width, full, height="30px"  }: EggButtonProps) => {
  return (
    <StyledEggButton
        onClick={ onClick }
        width={ width }
        full={ full }
        height={ height }
    >
        { children }
    </StyledEggButton>
  )
}
