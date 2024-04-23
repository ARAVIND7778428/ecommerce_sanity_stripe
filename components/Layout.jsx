// rafce

import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <meta name='impact-site-verification' value='a7c984a3-b2c8-499f-bf0d-9994aa11dfda'></meta>
        <title>E-commmerce Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
