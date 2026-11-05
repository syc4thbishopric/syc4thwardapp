import "../shared/globals.css"
import Head from "next/head"
import Script from "next/script"
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "../theme"
import { config } from "../config"

function MyApp({ Component, pageProps }) {
  return (
    <AppCacheProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {config.gtmId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${JSON.stringify(config.gtmId)});`,
          }}
        />
      )}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </AppCacheProvider>
  )
}

export default MyApp
