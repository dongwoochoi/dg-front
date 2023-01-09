
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./module/index";


ReactDOM.render(
	
	<Provider>
		<React.StrictMode>
			<CookiesProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</CookiesProvider>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);