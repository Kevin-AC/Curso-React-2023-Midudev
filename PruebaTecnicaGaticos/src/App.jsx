
import{useCatFact} from'./hooks/useCatFact'
import {useCatImage} from './hooks/useCatImage'

function App() {
  
  const {fact,getFactAndUpdate}=useCatFact()
  const { image } = useCatImage({fact})

  const handleClik=async()=>{
    getFactAndUpdate()
    
  }
  
  return (
    <main className="w-screen h-screen bg-slate-900 flex flex-col gap-3  items-center text-white"> 
      <h1 className="font-bold">React Prueba tecnica gaticos</h1>
      {fact && <p className="w-1/2 text-center">{fact}</p>}
      {image &&
        <img className="h-80"
        src={image}
          alt="image fron cat randon img"
        />
      }
      <button
        className="border w-14"
        onClick={handleClik}>Click</button>
    </main>
  )
}

export default App
