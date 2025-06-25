import React from 'react'
import ArtistWorks from './ArtistWorks'
export default function ArtistCard({ name, surname, birthday, death, works }) {
    return (
        <div className='artist-card'>
            <h2>Artist Name: {name}</h2>
            <h2>Artist SurName: {surname}</h2>
            <p>Artist Birthday: {birthday}</p>
            <p>Artist Death: {death}</p>
            <ArtistWorks works={works} />
        </div>

    )
}
