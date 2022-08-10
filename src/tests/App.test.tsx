import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import App from '../App'

it('should render a App', () => {
  const { container } = render(<App />)
  expect(screen.getByText(/Vite +/i)).toBeDefined()
  expect(screen.getByText(/Tailwind/i)).toBeDefined()
  expect(container.firstChild).toMatchSnapshot()
})
