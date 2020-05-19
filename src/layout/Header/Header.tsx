import React from 'react'
import { Root, Title, Basket } from './styled'

interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => (
    <Root>
        <Title className='text-5xl'>
            {title}
        </Title>
        <Basket />
    </Root>
)

export default Header