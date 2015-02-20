require('../styles/app.scss');

const React = require('react');

const Header = require('./components/Header');
const MealPlan = require('./components/MealPlan');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mealTimes: [{ name: "Mon" }, { name: "Tue" }, { name: "Wed" }, { name: "Thu" },
                  { name: "Fri" }, { name: "Sat" }, { name: "Sun" }],

      title: "Meal Planner Extreme"
    };
  }

  render() {
    return  <div className="main">
              <Header title={this.state.title} />
              <MealPlan mealTimes={this.state.mealTimes} />
            </div>;
  }
}

React.render(<App name="Jason" />, document.body);
