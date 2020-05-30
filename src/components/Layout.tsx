import * as React from "react"
import Head from "next/head"

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = "Mikhail Mikheev" }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </>
)

export default Layout
