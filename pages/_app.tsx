import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`


const theme = {
  colors: {
    primary: '#0070f3',
    white: '#ffffff',
    black: '#000000',
    background: '#121212;',
    lightGrey: "#eeeeee",
    lighterGrey: "#d6d7da",
    grey: '#ffffff1e',
    darkerGrey: '#333333',
    blue: "#08d1ff",
    lightGreen: "#81ecec",
    green: "#1abc9c",
  },
  sizes: {
    xs: '0.5rem', //8px
    sm: '1rem', //16px
    md: '2rem', //32px
    lg: '3rem', //48px
    xl: '4rem', //64px
    cell: '5rem', //75px
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
