import styled from '@emotion/styled'
import BackgroundImg from 'gatsby-background-image'

export const SliderContainer = styled.div`
    // background: linear-gradient(210deg,#943cff 0%,#dd45d3 40.13%,#fc9a57 90%);
    color: white;
    // padding: 10rem 0;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
`

export const Slide = styled(BackgroundImg)(({ theme }: StyleArgs) => ({
   height: 400,
   padding: theme.spacing(5) 
}))
