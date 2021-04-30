import React from 'react'
import image from "../images/darkbg.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="background" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen px-8" >
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello I'm Sandeep.</h1>
            </section>
        </main>
    )
}
