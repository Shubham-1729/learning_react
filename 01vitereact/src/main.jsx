import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     Children: 'click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const  anotheruser = 'Chai aur code'

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'}, 'click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
    <App /> // App(), it also works but not a good practice
    // <reactElement /> // it can't be executed because it is a object.
    // ReactElement
    // reactElement
)
