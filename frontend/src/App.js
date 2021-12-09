import React from 'react'
import Router from './Router'
import "./assets/style.css"
import { BrowserRouter } from 'react-router-dom';
import { LayoutProvider } from 'react-page-layout';

function App() {
  return (
        <LayoutProvider layouts={layouts}>
			           <BrowserRouter>
				                  <Router />
			           </BrowserRouter>
		     </LayoutProvider>
  );
}

export default App;
