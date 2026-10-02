//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//import { hydrate, render } from "react-dom";

//const rootElement = document.getElementById("root");

 createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <App />
  //</StrictMode>,
) 

/*
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
*/
