import { expect, test, vi} from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import { ScrollToTop } from './ScrollToTop'

describe('testing scrollToTop button behavior', () => {
    test('test if button is not rendered at first', () => {
        render(<ScrollToTop />)
        const button = screen.queryByText('button')
        expect(button).toBeNull() 
        
    })

    test('test if button render after scrolling', async () => {
        render(<ScrollToTop />)
        fireEvent.scroll(window, { target: { scrollY: 1000 } });
        const button = screen.queryByText('button')
        expect(button).toBeDefined();
    })

})

