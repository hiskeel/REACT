import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NoPage from './components/Nopage'
import Layout from './components/layout'
import Biography from './components/biography'
import W from './components/Works'
import CreateFeedback from './components/CreateFeedback'

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home name={artist.name} surname={artist.surname} birthday={artist.birthday} death={artist.death} works={artist.works} />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/createFeedback" element={<CreateFeedback />} />
          <Route path="/works" element={<W />} />

          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
