import Img from 'gatsby-background-image'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Background = tw.div`
    bg-black
    bg-opacity-25
    h-screen
    overflow-hidden
`

export const BackgroundImg = styled(Img)(({ theme }: StyleArgs) => ({
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
}))