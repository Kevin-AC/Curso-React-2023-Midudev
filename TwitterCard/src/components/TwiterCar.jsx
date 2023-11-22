import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwiterCar ({ name, userName }) {
  const [following, setFollowing] = useState(false)
  const handleClick = () => {
    setFollowing(!following)
  }
  const text = following ? 'Siguiendo' : 'Seguir'
  return (
      <article className='flex w-72 justify-between items-center gap-4'>
        <header className='flex justify-between gap-2 '>
        <img className='w-12 rounded-full' src={`https://unavatar.io/twitter/${userName}`} alt="Profile image" />
          <div className='text-white flex flex-col '>
          <strong>{name}</strong>
            <span>@{userName}</span>
          </div>
        </header>
        <aside>
        <button
        onClick={handleClick}
        className="bg-white font-bold rounded-3xl px-2 h-8 ">{text}</button>
        </aside>
      </article>
  )
}
