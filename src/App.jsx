import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='flex justify-between flex-col min-h-screen min-w-screen items-center bg-slate-300'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
