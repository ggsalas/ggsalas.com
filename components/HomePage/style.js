import css from 'styled-jsx/css'

export default css`
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
    .nav {
      flex-direction: column;
      align-items: center;
    }
  }
`
