import React from 'react';
import './App.css';
import FileUpload from './component/FileUpload';
import NarBar from './shared/NavBar';
import { Route, Switch } from 'react-router-dom';
import Navigation from './routes';
import { BrowserRouter as Router } from 'react-router-dom';


import { useAppContext } from "./contextApp/useContextApp";

function App() {

  const {
    NavigationConfig
  } = useAppContext();

  console.log(NavigationConfig);

  return (
    <div>
      <Router>
        {/* <h4>React Upload File</h4>
      <FileUpload /> */}
        <NarBar />
        <Switch>
          {
            NavigationConfig.map((item, index) => {
              return <Route exact path={item.url} component={item.component} />
            })
          }
        </Switch>

        {/* <FileUpload /> */}

      </Router>

    </div>
  );
}

export default App;
