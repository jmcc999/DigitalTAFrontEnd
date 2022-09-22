import React from 'react';
import './index.css';

//Make the square component
class Square extends React.Component {

    //render the square
    render() {

        return (
            <div>
                {this.props.day}
            </div>
        );
    }
}

//Export the square
export default Square