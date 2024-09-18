import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import Catalog from './Pages/Catalog'
import Exploring from './Pages/Exploring'
import Discount from './Pages/Discount'
import Footer from './Pages/Footer'
import Testimonials from './Pages/Testimonials'
import NewArrival from './Pages/NewArrivals'
const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Exploring />
            <NewArrival />
            <Catalog />
            <Testimonials />
            <Discount />
            <Footer />
        </>
    )
}

export default App