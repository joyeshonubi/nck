import  {default as Apple} from './nck-payment/Apple/index.js' 
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Apple />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

export {default as Apple} from './nck-payment/Apple/index.js';
export { default as Google } from './nck-payment/Google/index.js';
