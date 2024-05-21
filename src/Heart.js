import { Component } from "react";

export class Heart extends Component{

    handleChange = (e)=> {
        console.log(e.target.value)
    }

    render() {
        return(
            <div>
                <input type="text" 
                onChange={this.handleChange} />
            </div>
        )
    }
}