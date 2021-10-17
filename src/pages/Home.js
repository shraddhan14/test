import React from 'react';
import Footer from "../components/common/Footer";
import CurrentLocation from "../components/CurrentLocation";

function Home() {
    return (
        <>
            <main>
                <div className="container">
                    <CurrentLocation />
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home
