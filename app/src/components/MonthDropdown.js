import React from "react";
import { useState } from "react";

function MonthDropdown(props) {

   
        const [months, setMonths] = useState ({ monthMaster : {
            Jan: {
                name: 'January',
                startDay: '2', //How to set this as this.props.startDay?
                length: 31,
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
        }
    
        })

        //Function for onChange
        const handleChange = (event) => {

console.log(months)
        setMonths({ ...months, monthMaster: {
                Jan: {
                    name: 'January',
                    startDay: '4', //How to set this as this.props.startDay?
                    length: 31,
                },
                
                Feb : {
                    name: 'February',
                    startDay: ((((parseInt(months.monthMaster.Jan.startDay) + (months.monthMaster.Jan.length % 7)) -1) % 7) + 1).toString(),
                    length: 28 
                },

                Mar: {
                    name: 'March',
                    startDay: ((((parseInt(months.monthMaster.Feb.startDay) + (months.monthMaster.Feb.length % 7)) -1) % 7) + 1).toString(),
                    length: 31
                },
            }
        })


        // //Sets the state so that january's start day is from the start day of the year
        // this.setState({Jan: {
        //     name: 'January',
        //     startDay: '4', //How to set this as this.props.startDay?
        //     length: 31,
        //     },

        //     Feb: {
        //         name: 'February',
        //         startDay: ((((parseInt(this.state.Jan.startDay) + (this.state.Jan.length % 7)) -1) % 7) + 1).toString(),
        //         length: 28 
        //     },

        //     Mar: {
        //         name: 'March',
        //         startDay: ((((parseInt(this.state.Feb.startDay) + (this.state.Feb.length % 7)) -1) % 7) + 1).toString(),
        //         length: 31
        //     }
        // })

        // //Each subsequent month's start day is based off of this
        // this.setState({Feb: {
        //         name: 'February',
        //         startDay: ((((parseInt(this.state.Jan.startDay) + (this.state.Jan.length % 7)) -1) % 7) + 1).toString(),
        //         length: 28 
        //     }
        // })

        // this.setState({Mar: {
        //         name: 'March',
        //         startDay: ((((parseInt(this.state.Feb.startDay) + (this.state.Feb.length % 7)) -1) % 7) + 1).toString(),
        //         length: 31
        //     }
        // })

        // this.setState({Apr: {
        //     name: 'April',
        //     startDay: ((((parseInt(this.state.Mar.startDay) + (this.state.Mar.length % 7)) -1) % 7) + 1).toString(),
        //     length: 30
        // }
        // })

        // this.setState({May: {
        //     name: 'May',
        //     startDay: ((((parseInt(this.state.Apr.startDay) + (this.state.Apr.length % 7)) -1) % 7) + 1).toString(),
        //     length: 31
        // }
        // })

        // this.setState({Jun: {
        //     name: 'June',
        //     startDay: ((((parseInt(this.state.May.startDay) + (this.state.May.length % 7)) -1) % 7) + 1).toString(),
        //     length: 30
        // }
        // })

        // this.setState({Jul: {
        //     name: 'July',
        //     startDay: ((((parseInt(this.state.Jun.startDay) + (this.state.Jun.length % 7)) -1) % 7) + 1).toString(),
        //     length: 31
        // }
        // })

        // this.setState({Aug: {
        //     name: 'August',
        //     startDay: ((((parseInt(this.state.Jul.startDay) + (this.state.Jul.length % 7)) -1) % 7) + 1).toString(),
        //     length: 31
        // }
        // })

        // this.setState({Sep: {
        //     name: 'September',
        //     startDay: ((((parseInt(this.state.Aug.startDay) + (this.state.Aug.length % 7)) -1) % 7) + 1).toString(),
        //     length: 30
        // }
        // })

        // this.setState({Oct: {
        //     name: 'October',
        //     startDay: ((((parseInt(this.state.Sep.startDay) + (this.state.Sep.length % 7)) -1) % 7) + 1).toString(),
        //     length: 31
        // }
        // })

        // this.setState({Nov: {
        //     name: 'November',
        //     startDay: ((((parseInt(this.state.Oct.startDay) + (this.state.Oct.length % 7)) -1) % 7) + 1).toString(),
        //     length: 30
        // }
        // })

        // this.setState({Dec: {
        //     name: 'December ',
        //     startDay: ((((parseInt(this.state.Nov.startDay) + (this.state.Nov.length % 7)) -1) % 7) + 1).toString(),
        //     length: 31
        // }
        // })
    

        //Callback function to send start day and length to the parent that renders the month
        props.callbackFoo(event.target.value)
        console.log(event.target.value)
    }

        return (
            <div>
            <select onChange={(event) => handleChange(event)} name='monthDropdown'>
                <option value={[months.monthMaster.Jan.startDay, months.monthMaster.Jan.length]} name={months.monthMaster.Jan.name}>{months.monthMaster.Jan.name}</option>
                <option value={[months.monthMaster.Feb.startDay, months.monthMaster.Feb.length]} name={months.monthMaster.Feb.name}>{months.monthMaster.Feb.name}</option>
                <option value={[months.monthMaster.Mar.startDay, months.monthMaster.Mar.length]} name={months.monthMaster.Mar.name}>{months.monthMaster.Mar.name}</option>
            </select>
            </div>
        )
    
}

export default MonthDropdown