import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 

// import CounterApp from './01-useState/CounterApp'
// import CustomCounterHook from './01-useState/CustomCounterHook'
// import FormWithCustomHook from './02-useEffect/SimpleFormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
// import Layout from './05-useLayoutEffect/Layout'
// import Memorize from './06-memo/Memorize'
// import MemoHook from './06-memo/MemoHook'
// import CallbackHook from './06-memo/CallbackHook'
// import { Padre } from './07-memo/Padre'
// import './08-useReducer/intro-reducer'

import TodoApp from './08-useReducer/TodoApp'
import MainApp from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  
    // <FormWithCustomHook />
    // <MultipleCustomHooks />
    // <FocusScreen />
    // <Layout />
    // <Memorize />
    // <MemoHook/>
    // <CallbackHook />
    // <Padre />
    // <TodoApp/>
    // <MainApp/>

  // </React.StrictMode>,

  <BrowserRouter>
    {/* <React.StrictMode>, */}

    <MainApp/>

    {/* </React.StrictMode>, */}
  </BrowserRouter>

)
