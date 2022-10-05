import React from "react";

class YearDropdown extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

            //Makes all the years for the dropdown
            y22 : { 
                name: 2022,
                startDay: 7,
                leapYear: false
            },

            y23 : { 
                name: 2023,
                startDay: '',
                leapYear: false
            },

            y24 : { 
                name: 2024,
                startDay: '',
                leapYear: false
            },

            y25 : { 
                name: 2025,
                startDay: '',
                leapYear: false
            },

            y26 : { 
                name: 2026,
                startDay: '',
                leapYear: false
            },

            y27 : { 
                name: 2027,
                startDay: '',
                leapYear: false
            },

            y28 : { 
                name: 2028,
                startDay: '',
                leapYear: false
            },

            y29 : { 
                name: 2029,
                startDay: '',
                leapYear: false
            },

            y30 : { 
                name: 2030,
                startDay: '',
                leapYear: false
            },

            value: '?'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {

        //Set the start date of each year to be based on the year before
        this.setState({y23: {
            name: 2023,
            startDay: (this.state.y22.startDay % 7) + 1,
            leapYear: false
        }
        })

        this.setState({y24: {
        name: 2024,
        startDay: (this.state.y23.startDay % 7) + 1,
        leapYear: false
        }
        })

        this.setState({y25: {
            name: 2025,
            startDay: (this.state.y24.startDay % 7) + 1,
            leapYear: false
            }
        })

        this.setState({y26: {
            name: 2026,
            startDay: (this.state.y25.startDay % 7) + 1,
            leapYear: false
            }
        })

        this.setState({y27: {
            name: 2027,
            startDay: (this.state.y26.startDay % 7) + 1,
            leapYear: false
            }
        })

        this.setState({y28: {
            name: 2028,
            startDay: (this.state.y27.startDay % 7) + 1,
            leapYear: false
            }
        })

        this.setState({y29: {
            name: 2029,
            startDay: (this.state.y28.startDay % 7) + 1,
            leapYear: false
            }
        })

        this.setState({y30: {
            name: 2030,
            startDay: (this.state.y29.startDay % 7) + 1,
            leapYear: false
            }
        })

        //handles leap years
        for (let i = 22; i < 30; i++) {
            
            //If the year is a multiple of 4 and not a multiple of 100
            //Multiple of 400 are leap years
            if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {

                eval('this.setState({y' + i + ':{' +
                        'name: 20' + i + ',' +
                        'startDay: (this.state.y'+ (i-1) +'.startDay % 7) + 1,' +
                        'leapYear: true' +
                    '}' + 
                '})')

                eval('this.setState({y' + (i+1) + ':{' +
                    'name: 20' + (i+1) + ',' +
                    'startDay: (((this.state.y'+ (i) +'.startDay % 7) + 1) % 7) + 1,' +
                    'leapYear: false' +
                    '}' + 
                '})')


                eval('this.setState({y' + (i+2) + ':{' +
                    'name: 20' + (i+2) + ',' +
                    'startDay: (this.state.y'+ (i+1) +'.startDay % 7) + 1,' +
                    'leapYear: false' +
                    '}' + 
                '})')

                eval('this.setState({y' + (i+3) + ':{' +
                    'name: 20' + (i+3) + ',' +
                    'startDay: (this.state.y'+ (i+2) +'.startDay % 7) + 1,' +
                    'leapYear: false' +
                    '}' + 
                '})')
                        
            }
           
        }

        //Set the inital state and send it to the parent component
        this.setState({value: this.state.y22.startDay})
        this.props.callbackFoo(this.value)
    }

    //function for onChange
    handleChange = (event) => {

        //Set the state value to be the value of the dropdown
        this.setState({value: event.target.value})

        //send this value to the parent so that the month can know what the start day is
        this.props.callbackFoo(this.state.value)
        console.log(this.state.value)
    }

    render() {

        return (

            //Dropdown for all the years
            <select onChange={(event) => this.handleChange(event)} name='yearDropdown' value={this.state.value}>
                <option value={this.state.y22.startDay} name={this.state.y22.name}>{this.state.y22.name}</option>
                <option value={this.state.y23.startDay} name={this.state.y23.name}>{this.state.y23.name}</option>
                <option value={this.state.y24.startDay} name={this.state.y24.name}>{this.state.y24.name}</option>
                <option value={this.state.y25.startDay} name={this.state.y25.name}>{this.state.y25.name}</option>
                <option value={this.state.y26.startDay} name={this.state.y26.name}>{this.state.y26.name}</option>
                <option value={this.state.y27.startDay} name={this.state.y27.name}>{this.state.y27.name}</option>
                <option value={this.state.y28.startDay} name={this.state.y28.name}>{this.state.y28.name}</option>
                <option value={this.state.y29.startDay} name={this.state.y29.name}>{this.state.y29.name}</option>
                <option value={this.state.y30.startDay} name={this.state.y30.name}>{this.state.y30.name}</option>
            </select>
        )
    }
}

export default YearDropdown