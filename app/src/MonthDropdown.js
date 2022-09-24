import React from "react";

class MonthDropdown extends React.PureComponent {
    state = {
        options : [
            {
                name: 'January',
                value: {
                    startDay: 2,
                    length: 31
                }
            },
            {}
        ],
        value: 'Pick a month',
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        const {options, value} = this.state

        return (
            <select onChange={this.handleChange} value={value}>
                {options.map(item => (
                    <option key={item.value} value= {item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
        )
    }
}

export default MonthDropdown