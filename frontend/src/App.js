import React from 'react';
import './App.css';
import FileUpload from './component/FileUpload';
import NarBar from './shared/NavBar';
import { Route, Switch } from 'react-router-dom';
import Navigation from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        {/* <h4>React Upload File</h4>
      <FileUpload /> */}
        <NarBar />
        <Switch>
          {
            Navigation.map((item, index) => {
              return <Route exact path={item.url} component={item.component} />
            })
          }
        </Switch>

      </Router>

    </div>
  );
}

export default App;
