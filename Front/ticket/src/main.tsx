import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
	type: "dark",
	theme: {
		colors: {
			// brand colors
			background: "#1d1d1d",
			text: "#fff"
		},
		space: {},
		fonts: {}
	}
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider theme={myDarkTheme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
)
