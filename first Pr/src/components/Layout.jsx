import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='Layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/biography">Biography</Link></li>
                        <li><Link to="/createTask">Tasks</Link></li>
                        <li><Link to="/works">Works</Link></li>
                        <li><Link to="/createFeedback">Create Feedback</Link></li>
                        <li><Link to="/toDoList">To Do List</Link></li>

                    </ul>
                </nav>
            </header>
            <main>
                {/* Content will be rendered here */}
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2025 React App</p>
            </footer>
        </div>
    )
}