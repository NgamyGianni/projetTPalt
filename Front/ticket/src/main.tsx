import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from 'react-router-dom'

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
	type: "dark",
	theme: {
		colors: {
			// brand colors
			// background: "#fff",//#1d1d1d
			background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,46,161,1) 82%, rgba(0,54,65,1) 100%)',
			text: "#1d1d1d"
		},
		space: {},
		fonts: {}
	}
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={myDarkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
