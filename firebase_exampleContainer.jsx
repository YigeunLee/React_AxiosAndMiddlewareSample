import { connect } from 'react-redux';
import {alarm,message}from './reducers';
import firebase_example from './firebase_example';
var mapStateToProps = state => {
    return {
        message_value : state.message_value,
        alarm_flag : state.alarm_flag
    };
};

var mapDispatchToProps = (dispatch) => {
    return {
        handleAlarm : () => {dispatch(alarm())},
        handleMessage : () => {dispatch(message())}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(firebase_example);