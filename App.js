import './App.css';
import React,{PureComponent} from 'react';
import {Provider} from 'react-redux';
import Firebase_exampleContainer from './firebase_middlewares/firebase_exampleContainer';
import reducer from './firebase_middlewares/reducers';
import configureStore from './firebase_middlewares/configureStore'; 

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const store = configureStore();
        
          return (
              <div>
                <nav>
                    <div className="nav_wrapper">
                        <Provider store={store}>
                            <Firebase_exampleContainer/>
                        </Provider>
                    </div>
                </nav>
              </div>
          );
    }
}

export default App;






