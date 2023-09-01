import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const port = process.env.PORT || 8080;

//app.listen (port,() =>console.log (app listening on http://localhost3000)); 