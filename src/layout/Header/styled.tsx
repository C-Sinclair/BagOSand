import styled from '@emotion/styled'
import { IoIosBasket, IoIosHome } from 'react-icons/io'

export const Root = styled.header(({ theme }: StyleArgs) => ({
    display: 'flex',
    justifyContent: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderBottom: `1px solid ${theme.colours.white}`
}))

export const Title = styled.h1(({ theme }: StyleArgs) => ({
    color: theme.colours.white,
    fontFamily: theme.fonts.handwritten
}))

export const Basket = styled(IoIosBasket)(({ theme }: StyleArgs) => ({
    fill: theme.colours.white,
    height: theme.spacing(3),
    width: theme.spacing(3),
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
    cursor: 'pointer',
    transition: `all 0.2s ease`,
    '&:hover': {
        transform: `rotate(${theme.spacing(1)}deg)`
    }
}))

export const Home = styled(IoIosHome)(({ theme }: StyleArgs) => ({
    fill: theme.colours.white,
    height: theme.spacing(3),
    width: theme.spacing(3),
    position: 'absolute',
    left: theme.spacing(2),
    top: theme.spacing(2),
    cursor: 'pointer'
}))