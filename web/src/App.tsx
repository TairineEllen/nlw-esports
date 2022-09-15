import { useEffect, useState } from 'react';
import './styles/main.css';
import logo from './assets/logo.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

interface Game {
  id: string;
  title: string;
  banner: string;
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
    .then(res => res.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text '>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner 
              title={game.title}
              banner={game.banner}
              adsCount={game._count.ads}
            />
          )
        })}          
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
