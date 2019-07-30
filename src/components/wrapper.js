import React from 'react'

const Wrapper = children => (
	<main>
		<section>Here is a content section</section>
		{...children}
	</main>
)

export default Wrapper
