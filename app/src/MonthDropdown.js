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

            Mar: {
                name: 'March',
                startDay: '',
                length: 31  
            },

            Apr: {
                name: 'April',
                startDay: '',
                length: 30
            },

            May: {
                name: 'May',
                startDay: '',
                length: 31  
            },

            Jun: {
                name: 'June',
                startDay: '',
                length: 30 
            },

            Jul: {
                name: 'July',
                startDay: '',
                length: 31 
            },

            Aug: {
                name: 'August',
                startDay: '',
                length: 31 
            },

            Sep: {
                name: 'September',
                startDay: '',
                length: 30  
            },

            Oct: {
                name: 'October',
                startDay: '',
                length: 31  
            },

            Nov: {
                name: 'November',
                startDay: '',
                length: 30  
            },

            Dec: {
                name: 'December',
                startDay: '',
                length: 31  
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
                startDay: (((this.state.Jan.startDay + (this.state.Jan.length % 7)) -1) % 7) + 1,
                length: 28 
            }
        })

        this.setState({Mar: {
                name: 'March',
                startDay: (((this.state.Feb.startDay + (this.state.Feb.length % 7)) -1) % 7) + 1,
                length: 31
            }
        })

        this.setState({Apr: {
            name: 'April',
            startDay: (((this.state.Mar.startDay + (this.state.Mar.length % 7)) -1) % 7) + 1,
            length: 31
        }
        })

        this.setState({May: {
            name: 'May',
            startDay: (((this.state.Apr.startDay + (this.state.Apr.length % 7)) -1) % 7) + 1,
            length: 31
        }
        })

        this.setState({Jun: {
            name: 'June',
            startDay: (((this.state.May.startDay + (this.state.May.length % 7)) -1) % 7) + 1,
            length: 30
        }
        })

        this.setState({Jul: {
            name: 'July',
            startDay: (((this.state.Jun.startDay + (this.state.Jun.length % 7)) -1) % 7) + 1,
            length: 31
        }
        })

        this.setState({Aug: {
            name: 'August',
            startDay: (((this.state.Jul.startDay + (this.state.Jul.length % 7)) -1) % 7) + 1,
            length: 31
        }
        })

        this.setState({Sep: {
            name: 'September',
            startDay: (((this.state.Aug.startDay + (this.state.Aug.length % 7)) -1) % 7) + 1,
            length: 30
        }
        })

        this.setState({Oct: {
            name: 'October',
            startDay: (((this.state.Sep.startDay + (this.state.Sep.length % 7)) -1) % 7) + 1,
            length: 31
        }
        })

        this.setState({Nov: {
            name: 'November',
            startDay: (((this.state.Oct.startDay + (this.state.Oct.length % 7)) -1) % 7) + 1,
            length: 30
        }
        })

        this.setState({Dec: {
            name: 'December ',
            startDay: (((this.state.Nov.startDay + (this.state.Nov.length % 7)) -1) % 7) + 1,
            length: 31
        }
        })
        
        this.setState({value: [event.target.value]})
        this.props.callbackFoo(this.state.value[0],(this.state.value[2] + this.state.value[3]))
        console.log(this.state.value)
    }

    render() {

        return (
            <select onChange={(event) => this.handleChange(event)} name='monthDropdown' value={this.state.value}>
                <option value={[this.state.Jan.startDay,this.state.Jan.length]} name={this.state.Jan.name}>{this.state.Jan.name}</option>
                <option value={[this.state.Feb.startDay,this.state.Feb.length]} name={this.state.Feb.name}>{this.state.Feb.name}</option>
                <option value={[this.state.Mar.startDay,this.state.Mar.length]} name={this.state.Mar.name}>{this.state.Mar.name}</option>
                <option value={[this.state.Apr.startDay,this.state.Apr.length]} name={this.state.Apr.name}>{this.state.Apr.name}</option>
                <option value={[this.state.May.startDay,this.state.May.length]} name={this.state.May.name}>{this.state.May.name}</option>
                <option value={[this.state.Jun.startDay,this.state.Jun.length]} name={this.state.Jun.name}>{this.state.Jun.name}</option>
                <option value={[this.state.Jul.startDay,this.state.Jul.length]} name={this.state.Jul.name}>{this.state.Jul.name}</option>
                <option value={[this.state.Aug.startDay,this.state.Aug.length]} name={this.state.Aug.name}>{this.state.Aug.name}</option>
                <option value={[this.state.Sep.startDay,this.state.Sep.length]} name={this.state.Sep.name}>{this.state.Sep.name}</option>
                <option value={[this.state.Oct.startDay,this.state.Oct.length]} name={this.state.Oct.name}>{this.state.Oct.name}</option>
                <option value={[this.state.Nov.startDay,this.state.Nov.length]} name={this.state.Nov.name}>{this.state.Nov.name}</option>
                <option value={[this.state.Dec.startDay,this.state.Dec.length]} name={this.state.Dec.name}>{this.state.Dec.name}</option>
            </select>
        )
    }
}

export default MonthDropdown