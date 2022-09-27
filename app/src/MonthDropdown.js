import React from "react";

class MonthDropdown extends React.Component {
    state = {
        options : [
            {
                name: 'January',
                value: {
                    startDay: 2,
                    length: 31
                }
            },
            {
                name: 'February',
                value: {
                    startDay: 2,
                    length: 28
                }
            }
        ],
        value: 'Pick a month',
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
        console.log(event.target.value)
        this.props.callbackFoo(this.state.value.startDay,this.state.value.length)
    }

    render() {
        const {options, val} = this.state

        return (
            <select onChange={(event) => this.handleChange(event)} name={val} value={val}>
                <option value={1} name={options[0].name}>{options[0].name}</option>
                <option value={2} name={options[1].name}>{options[1].name}</option>
            </select>
        )
    }
}

export default MonthDropdown