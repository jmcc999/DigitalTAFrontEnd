import React from "react";

class MonthDropdown extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options : [
                {
                    name: 'January',
                    value: ['2','31']
                },
                {
                    name: 'February',
                    value: ['6','28']   
                }
            ],
            value: '?'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (event) => {
        this.setState({value: [event.target.value[0],(event.target.value[2]+event.target.value[3])]})
        this.props.callbackFoo(this.state.value[0],this.state.value[1])
        console.log(this.state.value[1])
    }

    componentDidMount() {
       this.setState({value: ['5','29']})
       console.log('mounted')
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