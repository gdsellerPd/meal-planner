require('../app.css');

const React = require('react');

const Header = require('./components/Header');

class App extends React.Component {
  render() {
    return  <div className="main">
              <Header />
            </div>;
  }
}

React.render(<App name="Jason" />, document.body);
