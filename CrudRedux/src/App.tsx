import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'
import { Toaster } from 'sonner'

function App () {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-3xl'>Crud Redux</h1>
     <div className='flex flex-col gap-3'>
        <ListOfUsers></ListOfUsers>
        <CreateNewUser></CreateNewUser>
        <Toaster richColors></Toaster>
     </div>
    </div>
  )
}

export default App
