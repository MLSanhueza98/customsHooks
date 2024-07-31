import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 

// import CounterApp from './01-useState/CounterApp'
// import CustomCounterHook from './01-useState/CustomCounterHook'
// import FormWithCustomHook from './02-useEffect/SimpleFormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
import FocusScreen from './04-useRef/FocusScreen'
import Layout from './05-useLayoutEffect/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  
    // <FormWithCustomHook />
    // <MultipleCustomHooks />
    // <FocusScreen />
    <Layout />

  // </React.StrictMode>,
)
