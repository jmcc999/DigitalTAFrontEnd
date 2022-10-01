import React from "react";

class MonthDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Jan : { 
                name: 'January',
                startDay: 5,
                length: 31
            },

            Feb: {
                name: 'February',
                startDay: '',
                length: 28  
            },

            value: '?'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        console.log('mounted')
    }

    handleChange = (event) => {
        this.setState({Feb: {
            name: 'February',
            startDay: this.state.Jan.startDay + (this.state.Jan.length % 7),
            length: 28 
        }})
        this.setState({value: [event.target.value]})
        this.props.callbackFoo(this.state.value[0],(this.state.value[2] + this.state.value[3]))
        console.log(this.state.value)
    }

    render() {

        return (
            <select onChange={(event) => this.handleChange(event)} name='monthDropdown' value={this.state.value}>
                <option value={[this.state.Jan.startDay,this.state.Jan.length]} name={this.state.Jan.name}>{this.state.Jan.name}</option>
                <option value={[this.state.Feb.startDay,this.state.Feb.length]} name={this.state.Feb.name}>{this.state.Feb.name}</option>
                {/* <option value={options[2].value} name={options[2].name}>{options[2].name}</option>
                <option value={options[3].value} name={options[3].name}>{options[3].name}</option> */}
            </select>
        )
    }
}

export default MonthDropdown