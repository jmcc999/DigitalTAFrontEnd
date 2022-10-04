import React from "react";

class YearDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            y22 : { 
                name: '2022',
                startDay: 7
            },

            y23 : { 
                name: '2023',
                startDay: ''
            },

            value: '?'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        console.log('mounted')
    }

    handleChange = (event) => {

        this.setState({y23: {
                name: '2023',
                startDay: (this.state.y22.startDay % 7) + 1
            }
        })
        
        this.setState({value: event.target.value})
        this.props.callbackFoo(this.state.value)
        console.log(this.state.value)
    }

    render() {

        return (
            <select onChange={(event) => this.handleChange(event)} name='yearDropdown' value={this.state.value}>
                <option value={this.state.y22.startDay} name={this.state.y22.name}>{this.state.y22.name}</option>
                <option value={this.state.y23.startDay} name={this.state.y23.name}>{this.state.y23.name}</option>
            </select>
        )
    }
}

export default YearDropdown