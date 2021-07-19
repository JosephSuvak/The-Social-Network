import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style= {{width:'100%', margin: 'auto'}}>
                <h1>This is the landing page</h1>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        alt="bulletinboard"
                        src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80"
                        style={{maxWidth:'85%', textAlign:'center'}}></img>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;