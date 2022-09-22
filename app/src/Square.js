import React from 'react';
import './index.css';


//Make the square component
class Square extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            day : 1, //The first day of every month
        }
    }

  

    //render the square
    render() {

        return (
            <div>
                <div>
                   I am a square  
                </div>
            </div>
        );
    }
}

//Export the square
export default Square