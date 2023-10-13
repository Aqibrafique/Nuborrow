
// import './App.css'
import {useState} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import HelpSection from './components/HelpSection';
import Table from './components/Table';
function App() {
 

  return (
    <>
    <div>
       <Header/>
      <HelpSection/>
      <Table/>
      <Footer/>
      </div>
    </>
  )
}

export default App
