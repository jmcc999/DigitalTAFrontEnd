import React from "react";
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';


class MonthParent extends React.Component {

    state = {
        startDay: '',
        length: '',
        janStartDay: '',
    }

    callbackFooMonth = (value) => {
        this.setState({
          startDay: value[0],
          length: value[2] + value[3]
        })
        console.log(value[2])
    }

    callbackFooYear = (value) => {
        this.setState({
          startDay: value,
          janStartDay: value
        })
        console.log(value)
    }

    render() {
        return (
            <div>
            <Month startDay={this.state.startDay} length={this.state.length}/>
            <MonthDropdown startDay={this.state.janStartDay} callbackFoo={(startDay,length) => this.callbackFooMonth(startDay,length)}/>
            <YearDropdown callbackFoo={(startDay) => this.callbackFooYear(startDay)}/>
            </div>
        );
    }      

}

export default MonthParent