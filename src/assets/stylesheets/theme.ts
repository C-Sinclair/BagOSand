const SPACING_MULTIPLIER = 9

const theme: Theme = {
  colours: {
    primary: '#007bff',
    white: '#fff'
  },
  fonts: {
    handwritten: `'Allura', cursive`
  },
  spacing: (n: number) => n * SPACING_MULTIPLIER
}

export default theme
