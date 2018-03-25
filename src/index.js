import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Favicon url="./logo-gf.png" />
        <App />
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
