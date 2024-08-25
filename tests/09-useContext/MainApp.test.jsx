import { render, screen } from "@testing-library/react"
import MainApp from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('test on <MainApp />', () => {
    test('must show HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>        
        )
        // screen.debug()
        expect( screen.getByText('Home') ).toBeTruthy()
    })

    test('must show LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']} >
                <MainApp />
            </MemoryRouter>        
        )
        // screen.debug()

        expect( screen.getByText('LoginPage') ).toBeTruthy()
    })

  
})
