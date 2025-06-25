import React from 'react'

export default function ArtistWorks({ works }) {
    return (
        <div>
            ArtistWorks
            {works.map((work) => (
                <div key={work.title}>
                    <h3>{work.title}</h3>
                    <p>Year: {work.year}</p>
                </div>
            ))}
        </div>
    );
}
