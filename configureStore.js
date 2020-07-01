import { createStore,combineReducers ,compose,applyMiddleware} from 'redux';
import { connect } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {setAlarm,setMessage} from './reducers';
import {ALARM,MESSAGE} from './reducers';
import reducers from './reducers';
import axios from 'axios';

var firebaseMiddleWare =  store =>{ return nextRunner => action => {
        var {type,payload} = action;

        switch(type){
            case ALARM:
                axios.get('http://localhost:4000/alarm').then((res) => {
                    console.log(res);
                    var {alarm_flag} = res.data;
                    store.dispatch(setAlarm(alarm_flag));
                });
                break;
            case MESSAGE:
                axios.get('http://localhost:4000/message').then((res) => {
                    console.log(res);
                    var {message_value} = res.data;
                    store.dispatch(setMessage(message_value));
                });
                break;
            default:
                break;
        }

        return nextRunner(action);
    }
}

export default initState => createStore(
    reducers,
    initState,
    applyMiddleware(firebaseMiddleWare)
)