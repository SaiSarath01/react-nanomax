import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div id='detail'>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/`} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }  >Active</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/latest`} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>Latest</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/devlopment`} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>Comments</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/search`} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>Search</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout

// https://lobste.rs/active.json, https://lobste.rs/newest.json