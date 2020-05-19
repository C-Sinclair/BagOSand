type Theme = {
    colours: {
      primary: string,
      white: string
    },
    fonts: {
      handwritten: string
    },
    spacing: (n: number) => number
}

type StyleArgs = {
    theme: Theme
}