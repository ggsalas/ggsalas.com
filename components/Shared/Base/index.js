import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

function Base({ children }) {
  const title = 'ggsalas.com'
  const description = 'Gabriel Germán Salas'
  const url = 'https://ggsalas.com'

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=0, width=device-width height=device-height"
        />
        <title>{title}</title>
        <meta property="og:url" content={url} />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta property="og:type" content="article" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </Head>

      {children}

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700');

        body,
        html {
          margin: 0;
          padding: 0;
          font-family: 'Fira Mono', monospace;
          max-width: 100vw;
          min-height: 100vh;
        }
      `}</style>
    </React.Fragment>
  )
}

Base.propTypes = {
  children: PropTypes.node
}

export default Base
