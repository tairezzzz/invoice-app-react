import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import './styles/style.scss';

ReactDOM.render(<Root/>, document.getElementById('root') as HTMLElement);
registerServiceWorker();