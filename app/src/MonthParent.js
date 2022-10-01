import React from "react";
import Month from './Month.js'
import MonthDropdown from './MonthDropdown';


class MonthParent extends React.Component {

    state = {
        startDay: '2',
        length: '31'
    }

    callbackFoo = (value) => {
        this.setState({
          startDay: value[0],
          length: value[2] + value[3]
        })
        console.log(value[2])
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