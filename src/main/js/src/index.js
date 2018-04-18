import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Routes from './routes'
import reducers from './reducers/index';
import { AUTHENTICATED, USER } from './actions/ActionTypes';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// if user returns true, dispach user to be authenticated
if (USER) {
    store.dispatch({ type: AUTHENTICATED });
  }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Routes/>
            </App>    
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
