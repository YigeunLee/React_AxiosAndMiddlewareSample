const initState = {
    alarm_flag : false,
    message_value: 'none',
};

export const ALARM = 'firebase/alarm';
export const MESSAGE = 'firebase/message';
export const SET_ALARM = 'firebase/set_alarm';
export const SET_MESSAGE = 'firebase/set_message';

var reducers = (state = initState,action) => {
    var {type,payload} = action;

    switch(type){
        case ALARM:
            return {...state, action : payload}
        case MESSAGE:
            return {...state, action : payload}
        case SET_ALARM:
            state.alarm_flag = payload.alarm_flag;
            return {...state, action : payload}
        case SET_MESSAGE:
            state.message_value = payload.message_value;
            return {...state, action : payload};
        default:
            return {...state};
    }
}
export default reducers; 


export function alarm(){
    return {
        type : ALARM
    }
}
export function message(){
    return {
        type : MESSAGE
    }
}

export function setAlarm(data){
    return {
        type : SET_ALARM,
        payload :{
            alarm_flag : data,
            message_value: 'none',
        }
    }
}
export function setMessage(data){
    return {
        type : SET_MESSAGE,
        payload :{
            alarm_flag : false,
            message_value: data,
        }
    }
}

