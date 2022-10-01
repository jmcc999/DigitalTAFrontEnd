import React from "react";

class MonthDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options : [
                {
                    name: 'January',
                    startDay: 5,
                    length: 31
                },
                {
                    name: 'February',
                    startDay: 2,
                    length: 28  
                },
                // {
                //     name: 'March',
                //     value: [((this.state.options.value[1] % 7) + this.state.value[0]),'31']   
                // },
                // {
                //     name: 'April',
                //     value: [((this.state.options.value[1] % 7) + this.state.value[0]),'30']   
                // },
            ],
            value: '?'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        console.log('mounted')
    }

    handleChange = (event) => {
        this.setState({value: [event.target.value]})
        this.props.callbackFoo(this.state.value[0],(this.state.value[2] + this.state.value[3]))
        console.log(this.state.value)
    }

    render() {
        const {options, val} = this.state

        return (
            <select onChange={(event) => this.handleChange(event)} name={val} value={val}>
                <option value={[options[0].startDay,options[0].length]} name={options[0].name}>{options[0].name}</option>
                <option value={[options[1].startDay,options[1].length]} name={options[1].name}>{options[1].name}</option>
                {/* <option value={options[2].value} name={options[2].name}>{options[2].name}</option>
                <option value={options[3].value} name={options[3].name}>{options[3].name}</option> */}
            </select>
        )
    }
}

export default MonthDropdown