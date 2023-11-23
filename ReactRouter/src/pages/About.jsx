import { Link } from '../components/Link'
export default function AboutPage () {
  return (
        <>
            <h1 className="font-bold text-3xl">About</h1>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg" alt="midudev" />
            </div>
            <p>Estes router fue creado del curso de midudev react 2023</p>
            <Link to={'/'}>Ir a Home</Link>
        </>
  )
}
