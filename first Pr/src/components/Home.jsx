import React from 'react'
import ArtistWorks from './ArtistWorks'
import { Link, Outlet } from 'react-router-dom';

export default function Home({ name, surname, birthday, death, works }) {
    return (
        <div className='Home'>
            <div className='artist-card'>
                <h2>Artist Name: {name}</h2>
                <h2>Artist SurName: {surname}</h2>
                <p>Artist Birthday: {birthday}</p>
                <p>Artist Death: {death}</p>
                <h2> <Link to="/works">Works of Vincent Van Goh</Link></h2>

            </div>

        </div>
    )
}