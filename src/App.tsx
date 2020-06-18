import React from 'react';
import { 
  Dialog,
  Auth,
  ControlPanel,
  Body,
  UserSpace,
  Header,
} from './components/';
import { Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header>
          Header
          <Link
            to='/sendRequest'
          >Отправить заявку</Link>
          <Link
            to='/userSpace'
          >Войти</Link>
        </Header>
      <ControlPanel>Actions
      </ControlPanel>
      <Body>
        <Route
          exact
          path='/'
          render={() => (<div>Реклама</div>)}
        />
        <Route
          path='/userSpace'
          component={UserSpace}
        />
      </Body>
      <Route 
        path='/sendRequest'
        render={() => <Dialog>
          <Auth />
        </Dialog>
        }
      />
    </div>
  );

  // ------------------------------
 
}

export default App;
