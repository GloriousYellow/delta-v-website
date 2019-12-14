import Head from 'next/head'
import { useEvent, useUpdate } from 'react-use'

const HideScrollbar = () => (
  <style jsx global>{`
    ::-webkit-scrollbar {
      display: none;
    }
  `}</style>
)

export default ({ children }) => {
  const update = useUpdate()

  useEvent('resize', () => {
    update()
  })

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500|Comfortaa:300,400,500,600,700&display=swap&subset=cyrillic,cyrillic-ext,greek,latin-ext,vietnamese"
          rel="stylesheet"
        />
        <title>Delta V</title>
      </Head>
      <div
        style={{
          fontFamily: 'Roboto',
          color: 'white',
          margin: 'auto',
          textAlign: 'justify',
          lineHeight: 1.5,
          fontWeight: 400,
        }}
      >
        {children}
        <style jsx global>
          {`
            body {
              background: #292a36;
              margin: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-weight: 500;
            }
          `}
        </style>
        {process.browser && window.innerHeight === window.outerHeight && (
          <HideScrollbar />
        )}
      </div>
    </>
  )
}
