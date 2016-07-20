'use strict'

import React, {Component} from 'react';

class APP_test extends Component{
    state = {
        name:0
    }
    onClickHiand = () => {
        this.setState({
            name:name++
        })
    }
    render(){
        return (
            <div onClick={this.onClickHiand}>
                我想点一次，加1 ：{this.state.name}

            </div>
        )
    }
}

export default APP_test;
