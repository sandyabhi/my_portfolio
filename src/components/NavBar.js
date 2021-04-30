import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocailIcon } from 'react-social-icons'
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
                {/* <div className="inline-flex py-3 px-3 my-6 ">
                    <SocailIcon url="https://twitter.com/sandyabhi047" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocailIcon url="https://github.com/sandyabhi" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocailIcon url="https://www.linkedin.com/in/sandeep-kumar-patel-3936291b7/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div> */}
            </div>
        </header>
    )
}
