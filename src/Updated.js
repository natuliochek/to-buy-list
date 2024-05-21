import { Component } from "react";
import arh from './arh1.jpg';
import DM from './MD.jpg'

export class Updated extends Component {
    state = {
        CTA: "Like us !",
        image: arh
    }

    liked = ()=> {
        this.setState({
            CTA: "THANK YOU !!!",
            image: DM
        })
    }

    render() {
        return(
            <div className='like'>
                <h1>{ this.state.CTA } </h1>
            <button onClick={ this.liked } className='btn'>
              Click here
            </button>
            <img src = { this.state.image } width="300px" alt="arhangelsk" />
            
        </div>
        )
    }
}