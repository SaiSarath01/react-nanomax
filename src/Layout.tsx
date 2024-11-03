import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header id='nav'>
                <a id="logo" style={{
                    backgroundColor: "#500000"
                }} href="/" title="Lobsters (Current traffic: 0%)"></a>

                <div className="navholder">
                    <nav className="links">
                        <a href="/">Active</a>
                        <a href="/recent">Recent</a>
                        <a href="/">Comments</a>


                        <a href="/">Search</a>


                        <a className="corner" href="/">Login</a>
                    </nav>
                </div>

                <nav className="corner">
                    <a className="corner" href="/">Login</a>
                </nav>
            </header>
            <div id='inside'>
                <Outlet />
            </div>
            <footer>
    <a href="/about">About</a>
    <a href="/tags">Tags</a>
    <a href="/filters">Filter</a>
    <a href="/moderations">Moderation Log</a>
  </footer>
  <span id="iab-pcm-sdk"></span><span id="iab-autofill-sdk"></span>
        </>
    )
}

export default Layout

// https://lobste.rs/active.json, https://lobste.rs/newest.json