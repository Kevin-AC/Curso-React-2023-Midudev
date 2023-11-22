import { TwiterCar } from './components/TwiterCar'

function App () {
  return (
    <main className="w-scree h-screen bg-slate-900 flex flex-col items-center justify-center gap-3">
      <TwiterCar name='Midudev' userName='midudev'></TwiterCar>
      <TwiterCar name='Kevin Argumedo' userName='kevin.argumedo'></TwiterCar>
      <TwiterCar name='Elonmusk' userName='elon musk'></TwiterCar>

    </main>
  )
}

export default App
