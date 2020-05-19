import React from 'react'
import Layout from '../layout/Main/Main'
import styled from '@emotion/styled'

type Product = {
    id: string
    path: string
    title: string
    description: string
    origin: string
}

interface ProductProps {
    pageContext: {
        product: Product
    }
}

export default ({ pageContext: { product }}: ProductProps) => {
    const { title, origin, description } = product
    return (
        <Layout>
            <Title>{title}</Title>
            <Description>Originating from <u>{origin}</u></Description>
            <Description>{description}</Description>
        </Layout>
    )
}

const Title = styled.h1(({ theme }: StyleArgs) => ({
    color: theme.colours.white
}))

const Subtitle = styled.h4(({ theme }: StyleArgs) => ({
    color: theme.colours.white

}))

const Description = styled.p(({ theme }: StyleArgs) => ({
    color: theme.colours.white

}))