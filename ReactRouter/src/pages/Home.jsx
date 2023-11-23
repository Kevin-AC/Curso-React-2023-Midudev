import { Link } from '../components/Link'

export default function HomePage () {
  return (
        <>
            <h1 className="font-bold text-3xl">Home</h1>
            <p>Esta es la pagina principal</p>
            <Link to={'/about'}>Ir a About</Link>
        </>
  )
}
