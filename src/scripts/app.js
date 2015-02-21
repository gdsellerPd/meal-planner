require('../styles/app.scss');

const React = require('react');

const MealOptionsStore = require('./stores/MealOptionsStore');

const Header      = require('./components/Header');
const MealPlan    = require('./components/MealPlan');
const MealOptions = require('./components/MealOptions');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mealTimes   : MealOptionsStore.getMealTimes(),
      mealOptions : MealOptionsStore.getAvailableOptions()
    };
  }

  render() {
    return  <div className="main">
              <Header title={this.props.title} />
              <MealPlan mealTimes={this.state.mealTimes} />
              <MealOptions mealOptions={this.state.mealOptions} />
            </div>;
  }
}

React.render(<App title="Meal Planner Extreme" />, document.body);
