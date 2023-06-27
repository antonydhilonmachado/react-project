import logo from './logo.svg';
import './App.css';
import Home from './component/Home'

import ReactTable from './component/ReactTable';
import BootstrapExample from './component/BootstrapExample';
import RouterExample from './component/Routerexample';
import HookExample from './Hook/HookExample';
import { Provider } from 'react-redux';
import ReduxExample from './Hook/ReduxExample';
import store from './Hook/Store';
import JqueryExample from './Hook/JqueryExample';


function App() {
  return (
    <div>
     
     <ReactTable></ReactTable>
     <BootstrapExample></BootstrapExample>
     
     <HookExample></HookExample>
     <Provider store={store}>
        <ReduxExample />
     </Provider>
     <JqueryExample></JqueryExample>
     
    </div>    
  );
}

export default App;    
