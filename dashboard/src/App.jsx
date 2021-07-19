import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import auth from './services/API/auth'

export default function App() {
  React.useEffect(auth, [])
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <Main/>
      </div>
      <Footer/>
    </>
  )
}
