/**
 * @jest-environment jsdom
 */

import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {createElement} from 'react'
import Home from "../../app/page"
import userEvent from '@testing-library/user-event'

describe("Page",()=> {
    test('home renders correctly', () => {
        const {container} = render(createElement(Home))
        expect(container.firstChild).toMatchSnapshot()
    })
})

describe("Interaction Tests",() => {
    test('Press the button', async () => {
        const user = userEvent.setup()
        render(createElement(Home))
        const button = screen.getByRole('button')
        await user.click(button)
        expect(button).toHaveTextContent("Pressed")
    })
})