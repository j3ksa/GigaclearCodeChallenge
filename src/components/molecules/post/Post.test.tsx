import { expect, test, vi} from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import { Post } from './Post'

const dataTest = {
    "id": "1",
    "image": "https://i.ibb.co/r5Wsp79/post1.jpg",
    "title": "Case Study",
    "tags": [
        "topic",
        "user"
    ],
    "timestamp": "1628726400",
    "description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
}

describe('testing signUp button', () => {
    test('test if button is not rendering at first', () => {
        render(<Post data={dataTest}/>)
        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', 'http://localhost:3000/blog/*')
        
    })

})

