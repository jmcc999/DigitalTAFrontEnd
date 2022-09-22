import React from 'react';
import './index.css';
import Square from './Square';


//Make the month component
class Month extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startDay : 1, //whatever the starting day of the month is (1 for sunday)
            length : 30 //Number of days in the month
        }
    }

  

    //render the month
    render() {

        //make the month array
        let monthRow1 = [];
        let monthRow2 = [];
        let monthRow3 = [];
        let monthRow4 = [];
        let monthRow5 = [];
        
        // //loop over the number of days in the month starting at the first day of the month
        for (let i = this.state.startDay; i <= this.state.length + this.state.startDay - 1; i++) {

            //Only 7 days go into a week

            //If it it the first time through the while loop
            if (i < 8) {
                monthRow1.push(<Square key = {i}/>)
            }

            //If it it the second time through the while loop
            if (i < 15 && i > 7) {
                monthRow2.push(<Square key = {i}/>)
            }

            //If it it the third time through the while loop
            if (i > 14 && i < 22) {
                monthRow3.push(<Square key = {i}/>)
            }

            //If it it the fourth time through the while loop
            if (i > 21 && i < 29) {
                monthRow4.push(<Square key = {i}/>)
            }

            //If it it the fifth time through the while loop
            if (i > 28) {
                monthRow5.push(<Square key = {i}/>)
            }
        }

        return (
            <div>
                <div>
                   {monthRow1}<br/>
                   {monthRow2}<br/>
                   {monthRow3}<br/>
                   {monthRow4}<br/>
                   {monthRow5}<br/>
                </div>
            </div>
        );
    }
}

//Export the month
export default Month