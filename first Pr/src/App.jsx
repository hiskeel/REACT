import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArtistCard from './components/ArtistCard'
function App() {
  const [count, setCount] = useState(0)
  const [artist, setArtists] = useState(
    {
      name: 'Vincent ',
      surname: 'van Gogh',
      birthday: '1853-03-30',
      death: '1890-07-29',
      works: [
        { title: 'Starry Night', year: 1889 },
        { title: 'Sunflowers', year: 1888 },
      ],
    })

  return (
    <>
      <h1>Artists</h1>
      <ArtistCard name={artist.name} surname={artist.surname} birthday={artist.birthday} death={artist.death} works={artist.works} />
    </>

  )
}

export default App
