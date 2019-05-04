function Home() {
  return <div className="main">
    <h1>
      Gabriel <span>{`<ggsalas.com>`}</span>
    </h1>

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Fira+Mono:400,700');

      body, html {
        margin: 0;
        padding:0;
        font-family: 'Fira Mono', monospace;
      }
    `}</style>
    <style jsx>{`
      .main {
        color: #eeeeee;
        background: #282828;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
      }

      .main h1 {
        font-weight: normal;
      }
    `}</style>
    </div>
}

export default Home;
