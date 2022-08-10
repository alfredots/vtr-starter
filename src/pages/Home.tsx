import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-xl lg:text-3xl font-bold">
        Vite + <span className="text-sky-500">Tailwind</span>
      </h1>
      <span className="mt-2 text-sm text-sky-900">
        <Link to="/second">access second page</Link>
      </span>
    </div>
  )
}
