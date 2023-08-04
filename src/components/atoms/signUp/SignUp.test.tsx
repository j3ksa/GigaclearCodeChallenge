import { expect, test } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import { SignUp } from './SignUp'

describe('testing signUp button behavior', () => {
    test('test default button state', () => {
        render(<SignUp />)
        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })

    test('test disabling button onClick', () => {
        render(<SignUp />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(button).toBeDisabled()
    })
})

