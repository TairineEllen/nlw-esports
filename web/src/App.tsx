import './styles/main.css';
import logo from './assets/logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text '>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner banner='/game-1.png' title='League of Legends' adsCount={5} />
        <GameBanner banner='/game-2.png' title='Dota 2' adsCount={5} />
        <GameBanner banner='/game-3.png' title='Counter Strike' adsCount={5} />
        <GameBanner banner='/game-4.png' title='Apex Legends' adsCount={5} />
        <GameBanner banner='/game-5.png' title='Fortnite' adsCount={5} />
        <GameBanner banner='/game-6.png' title='World of Warcraft' adsCount={5} />       
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
