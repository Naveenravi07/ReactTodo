import React, {Component} from 'react'
import "./TodoApp.css"
import {SiAzurepipelines} from "react-icons/si"

export class TodoApp extends Component {

    state = {
        value: "",
        items: []
    }
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handlesubmit = event => {
        event.preventDefault()
        const {value} = this.state
        const allitemstemp = this.state.items

        allitemstemp.push(value)

        this.setState({items: allitemstemp, value: ""})
    }

    deleteItem = (id) => {
        console.log(id);
        let dummyarray = this.state.items
        dummyarray.splice(id,1)
        this.setState({items: dummyarray})
    }
    render() {

        const {value, items} = this.state;
        console.log(items);
        return (
            <div className='todo-container'>
                <form onSubmit={
                    this.handlesubmit
                }>
                    <div className='todo-inp'>
                        <h1 className="Heading">TODO APP
                            <span>&nbsp;&nbsp;</span>
                            <SiAzurepipelines/>
                        </h1>

                        <input value={value}
                            onChange={
                                this.handleChange
                            }
                            type="text"
                            placeholder='Add Your Todo Here'/>

                    </div>
                </form>

                <div className='todo-item'>
                    <ul> {
                        this.state.items.map((data, index) => (
                            <li key={index}>
                                {data}
                                <i onClick={
                                        () => this.deleteItem(index)
                                    }
                                    className='fa-solid fa-trash-can'></i>
                            </li>
                        ))
                    } </ul>
                </div>
            </div>
        )
    }
}

export default TodoApp
