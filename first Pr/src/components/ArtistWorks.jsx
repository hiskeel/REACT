import React from 'react'

export default function ArtistWorks({ name, image, year }) {
    return (
        <div className='artist-works' style={{
            maxWidth: '350px',
            margin: '20px auto',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            background: '#fff',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#2d3748' }}>
                Artist Name: {name}
            </h2>
            <img
                src={image}
                alt={name}
                style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
            />
            <p style={{ fontSize: '1rem', color: '#4a5568' }}>
                Year: {year}
            </p>
        </div>
    );
}
