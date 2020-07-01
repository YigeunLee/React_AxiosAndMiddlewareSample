import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class firebase_example extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
     
    }
    render(){
        var alarm = this.props.handleAlarm;
        var message = this.props.handleMessage;
        var {message_value,alarm_flag} = this.props;

        return (
            <div>
            <button onClick={() => alarm()}>alarm</button>
            <button onClick={() => message()}>message</button>
            <p>{ 'test ' + message_value }</p>
            <p>{  'test alarm ' + alarm_flag }</p>
            </div>
        );
    }
    
}

firebase_example.propTypes = {
    message_value : PropTypes.string,
    alarm_flag : PropTypes.bool,
    handleAlarm : PropTypes.func,
    handleMessage : PropTypes.func,
};