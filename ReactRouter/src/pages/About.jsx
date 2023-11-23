/* eslint-disable react/prop-types */
import { Link } from '../components/Link'
const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Estes router fue creado del curso de midudev react 2023',
    button: 'Ir a Home'
  },
  en: {
    title: 'About us',
    description: 'This router was created from the midudev react 2023 course.',
    button: 'Go Home'
  }
}
const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
        <>
            <h1 className="font-bold text-3xl">{i18n.title}</h1>
            <div>
                <img src="https://pbs.twimg.com/profile_images/1613612257015128065/oA0Is67J_400x400.jpg" alt="midudev" />
            </div>
            <p>{i18n.description}</p>
            <Link to={'/'}>{i18n.button}</Link>
        </>
  )
}
