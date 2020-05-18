import React from 'react'

interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => (
    <header>
        {props.title}
    </header>
)

export default Header