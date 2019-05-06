function Home() {
  return (
    <div className="container">
      <div className="main">
        <h1 className="title">
          Gabriel Germán Salas
        </h1>
        <nav className="nav">
          <a href="https://github.com/ggsalas" title="githun">github</a>
          <a href="https://twitter.com/ggsalas" title="twitter">twitter</a>
          <a href="http://ar.linkedin.com/in/ggsalas" title="linkedin">linkedin</a>
          <a href="https://www.facebook.com/ggsalas" title="facebook">facebook</a>
          <a href="https://ggsalas.wordpress.com" title="blog">blog</a>
          <a href="mailto:g@ggsalas.com" title="email">email</a>
        </nav>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700');

        body, html {
          margin: 0;
          padding:0;
          font-family: 'Fira Mono', monospace;
          max-width: 100vw;
          min-height: 100vh;
        }
      `}</style>
      <style jsx>{`
        .container {
          color: #eeeeee;
          background: #282828;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
        }

        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .title,
        .nav {
          font-size: 16px;
          line-height: 1.5em;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav a {
          margin: 10px 20px;
          color: #73cef4;
          text-decoration: none;
        }

        .nav a:hover,
        .nav a:active {
          color: #282828;
          background: #73cef4;
        }

        @media screen and (max-width: 608px) {
          .nav{
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}

export default Home;
