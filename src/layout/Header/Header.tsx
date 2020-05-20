import React from 'react'
import { Root, Title, Basket, Home } from './styled'
import { Link } from '../../components/Link/Link'

interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => (
    <Root>
        <Link to='/'>
            <Home />
        </Link>
        <Title className='text-5xl'>
            {title}
        </Title>
        <Basket />
    </Root>
)

export default Header