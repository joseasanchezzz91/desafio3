import React, { Component } from 'react'

import List from '../components/List';
import H2 from '../components/H2';



class Home extends Component {
    render() {

        return (
            <div className="index row">
                <div>
                    <H2>Fellowship of the Ring</H2>
                    <input type="text" placeholder="search hero" />
              
                    <List />
                </div>
            </div>
        )
    }
}

export default Home;

