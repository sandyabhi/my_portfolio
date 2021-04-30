import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' exact
                        className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                        activeClassName="text-white">
                        Sandeep
                  </NavLink>
                    <NavLink to='/post'
                        className="inflex-flex items-center py-3 px-3 my-6 text-blue-100 hover:text-green-800"
                        activeClassName="text-blue-100 bg-blue-700">
                        Blog Posts
                  </NavLink>
                    <NavLink to='/project'
                        className="inflex-flex items-center py-3 px-3 my-6 text-blue-100 hover:text-green-800"
                        activeClassName="text-blue-100 bg-blue-700">
                        Projects
                  </NavLink>
                    <NavLink to='/about'
                        className="inflex-flex items-center py-3 px-3 my-6 text-blue-100 hover:text-green-800"
                        activeClassName="text-blue-100 bg-blue-700">
                        About Me!
                  </NavLink>
                </nav>
            </div>
        </header>
    )
}
