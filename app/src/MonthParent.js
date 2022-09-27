import React from "react";
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';


class MonthParent extends React.Component {

    state = {
        startDay: '3',
        length: '30'
    }

    callbackFoo = (startDay,length) => {
        this.setState({
          startDay: startDay,
          length: length
        })
        console.log('ran')
    }

    render() {
        return (
            <div>
            <Month startDay={this.state.startDay} length={this.state.length}/>
            <MonthDropdown callbackFoo={() => this.callbackFoo()}/>
            </div>
        );
    }      

}

export default MonthParent