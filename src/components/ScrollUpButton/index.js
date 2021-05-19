import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import './style.css';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton
                AnimationDuration={500}
                />
            </div>
        );
    }
}