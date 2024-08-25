import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import LoginPage from "../../src/09-useContext/LoginPage"



describe('test on <LoginPage />', () => {
    test('must show component without user', () => {
        render(
            <UserContext.Provider value={{user:null}} >
                <LoginPage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect( preTag.innerHTML ).toBe( 'null' )
    })

    test('must called setUser when button´s clicked', () => {

        setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{ user:null, setUser: setUserMock}} >
                <LoginPage /> 
            </UserContext.Provider>
        )

        const buttonUser = screen.getByRole( 'button' )
        fireEvent.click( buttonUser )
        
        expect( setUserMock ).toHaveBeenCalledWith({ id: 123, name: 'mario', email: 'correo@gmail.com' })
    
        })
    
})

