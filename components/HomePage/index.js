import React from 'react'
import style from './style'

function HomePage() {
  return (
    <div className="container">
      <div className="main">
        <h1 className="title">Gabriel Germán Salas</h1>
        <nav className="nav">
          <a href="https://github.com/ggsalas" title="githun">
            GitHub
          </a>
          <a href="https://twitter.com/ggsalas" title="twitter">
            Twitter
          </a>
          <a href="http://ar.linkedin.com/in/ggsalas" title="linkedin">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/ggsalas" title="facebook">
            Facebook
          </a>
          <a href="https://ggsalas.wordpress.com" title="blog">
            Blog
          </a>
          <a href="mailto:g@ggsalas.com" title="email">
            Email
          </a>
        </nav>
      </div>

      <style jsx>{style}</style>
    </div>
  )
}

export default HomePage
