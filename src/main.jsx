import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/app.scss'
import { ReactLenis } from '@studio-freight/react-lenis'
import { BrowserRouter } from 'react-router-dom'
import Grid from './components/grid/Grid.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root>
      <React.StrictMode>
        <BrowserRouter>
          <App />
		  <Grid />
        </BrowserRouter>
      </React.StrictMode>
  </ReactLenis>
)
