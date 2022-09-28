import React from "react";

class MonthDropdown extends React.Component {
    state = {
        options : [
            {
                name: 'January',
                value: ['2','31']
                // value: {
                //     startDay: 3,
                //     length: 31
                // }
            },
            {
                name: 'February',
                value: ['6','28']
                // value: {
                //     startDay: 2,
                //     length: 28
                // }
            }
        ],
        value: ['3','30'],
    }

    handleChange = (event) => {
        this.setState({value: [event.target.value[0],(event.target.value[2]+event.target.value[3])]})
        this.props.callbackFoo(this.state.value[0],this.state.value[1])
        console.log(this.state.value[1])
    }

    render() {
        const {options, val} = this.state

        return (
            <select onChange={(event) => this.handleChange(event)} name={val} value={val}>
                <option value={options[0].value} name={options[0].name}>{options[0].name}</option>
                <option value={options[1].value} name={options[1].name}>{options[1].name}</option>
            </select>
        )
    }
}

export default MonthDropdown