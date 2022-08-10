import { Link } from 'react-router-dom'

export const Second = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-xl lg:text-3xl font-bold">
        <span className="text-purple-600">Second</span>
      </h1>
      <span className="mt-2 text-sm text-purple-900">
        <Link to="/">access home page</Link>
      </span>
    </div>
  )
}
