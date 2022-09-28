import React from "react";
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';


class MonthParent extends React.Component {

    state = {
        startDay: '3',
        length: '30'
    }

    callbackFoo = (firstDay,duration) => {
        this.setState({
          startDay: firstDay,
          length: duration
        })
        console.log(firstDay)
    }

    render() {
        return (
            <div>
            <Month startDay={this.state.startDay} length={this.state.length}/>
            <MonthDropdown callbackFoo={(startDay,length) => this.callbackFoo(startDay,length)}/>
            </div>
        );
    }      

}

export default MonthParent