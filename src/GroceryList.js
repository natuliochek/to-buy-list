import { Component } from "react";
import bag from './bag.png';

export class GroceryList extends Component {
    state = {
        userInput: '',
        GroceryList: []
    }

        onChangeEvent(e) {
            this.setState({userInput: e})
            // console.log(e);
        }

        addItem (input) {
            if (input === '') {
                alert ("Please enter an item")
            }
            else {
            let listArray = this.state.GroceryList;
            listArray.push(input);
            this.setState({GroceryList: listArray, userInput:''})
            console.log(listArray)
        }}

        crossedItem (event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }

        deleteItem() {
            let listArray = this.state.GroceryList;
            listArray = [];
            this.setState({GroceryList: listArray})
        }

        onFormSubmit(e) {
            e.preventDefault();
        }

    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                <input  className="container" type="text"
                placeholder="So, what do we need?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
                </div>
                <div className="container">
                    <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <ul>
                    {this.state.GroceryList.map((item, index) => (
                        <li onClick={this.crossedItem} key={index}>
                            <img src={ bag } alt="bag" width="40px" />  
                            { item }</li>
                    ))}
                </ul>
                <div className="container">
                    <button className="btn delete" onClick={()=> this.deleteItem()}>Delete All</button>
                </div>
                </form>
            </div>
        )
    }
}
