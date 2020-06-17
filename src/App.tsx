import React from 'react';
import { 
  FormSendRequest,
  ControlPanel,
  Body,
} from './components/';
import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <ControlPanel>
        <div>
          <AboutFactoring />
          <About />
          <PressCenter />
          <Contacts />
        </div>
        <div>
          <Enter />
          <EnterSBBOL />
        </div>
      </ControlPanel>
      <Body>
        <FormSendRequest />
      </Body>
    </div>
  );
}

export default App;
