import { render, screen } from "@testing-library/react"
import HomePage from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('test on <HomePage />', () => {

    const user = {
        id:1,
        name: 'mario'
    }

    test('must show the component without user', () => {

        render( 
            <UserContext.Provider value={{user:null}} >
                <HomePage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect( preTag.innerHTML ).toBe( 'null' )
    })

    test('must show the component with user', () => {

        render( 
            <UserContext.Provider value={{ user }} >
                <HomePage /> 
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        expect( preTag.innerHTML ).toBeTruthy()
        expect( preTag.innerHTML ).toContain( user.name )
        expect( preTag.innerHTML ).toContain( user.id.toString() )
        expect( preTag.innerHTML ).toContain( `${user.id}` )



        // console.log(preTag)
    })
})
