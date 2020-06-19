import React from 'react';
import { 
  Dialog,
  Auth,
  ControlPanel,
  Body,
  UserSpace,
  Header,
  RouteTransit,
  Request,
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
            to='/auth'
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
        path='/auth'
        render={() => <Dialog>
          <Auth />
        </Dialog>
        }
      />
      <RouteTransit
        isAuth={true}
        path='/sendRequest'
        redirectPath='/form'
      >
        <Dialog>
          <Request />
        </Dialog>
      </RouteTransit>
    </div>
  );

  // ------------------------------
 
}

export default App;
