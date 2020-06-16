import React from 'react';
import { 
  FormSendRequest,
  Header,
  Body,
} from './components/';
import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header>
        
      </Header>
      <Body>
        <FormSendRequest />
      </Body>
    </div>
  );
}

export default App;
