import React from 'react'
import '../style/Footer.css'

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
          Copyright &copy; { new Date().getFullYear() } — <a className="linkedin" href="https://www.linkedin.com/in/alan8819/" target="_blank" rel="noreferrer" ><strong>Alan Tanaka</strong></a>
        </span>
      </div>
    </footer>
  )
}
