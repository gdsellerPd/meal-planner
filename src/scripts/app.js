require('../styles/app.scss');

const React = require('react');

const Header = require('./components/Header');
const MealPlan = require('./components/MealPlan');
const MealOptions = require('./components/MealOptions');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mealTimes: [{ name: "Mon" }, { name: "Tue" }, { name: "Wed" }, { name: "Thu" },
                  { name: "Fri" }, { name: "Sat" }, { name: "Sun" }]
    };
  }

  render() {
    return  <div className="main">
              <Header title={this.props.title} />
              <MealPlan mealTimes={this.state.mealTimes} />
              <MealOptions />
            </div>;
  }
}

React.render(<App title="Meal Planner Extreme" />, document.body);
