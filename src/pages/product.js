import React from 'react'
import { Link } from 'gatsby'

import Wrapper from '../components/wrapper'
import SEO from '../components/seo'

const ProductPage = () => (
	<Wrapper>
		<SEO title="Sand Store" />
		<h1>Welcome to the sand store</h1>
		<Link to="/">Go home</Link>
	</Wrapper>
)

export default ProductPage
