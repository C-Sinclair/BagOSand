import Img from 'gatsby-background-image'
import styled from '@emotion/styled'

export const Background = styled.div`
    
`

export const BackgroundImg = styled(Img)(({ theme }: StyleArgs) => ({
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
}))