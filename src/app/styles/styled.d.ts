import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: "#7E8129",
        secondary: "#F9F9E6",

        "gray-500": "#A7A4A4",
    }
  }
}