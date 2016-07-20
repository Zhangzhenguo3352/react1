import React, {Component} from 'react';
import ReactDom, {render} from 'react-dom';

import DOM_1 from './map-app/DOM_1';
class MyStyle extends Component {
    render(){

        return(
            <div>
                zhang1233
                <DOM_1/>
            </div>
        )
    }
}


render(<MyStyle/>,document.getElementById('app'))

// import React, { Component } from 'react';
// import ReactDOM, { render } from 'react-dom';
// import App from './components/DOMComponent';
//
//
// let rootEle = document.getElementById('app');
//
// render(<App />, rootEle)
