const React = require('react');

const MealPlan = require('./MealPlan');

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mealTimes: [
        { name: "Mon" },
        { name: "Tue" },
        { name: "Wed" },
        { name: "Thu" },
        { name: "Fri" },
        { name: "Sat" },
        { name: "Sun" }
      ]
    };
  }

  render() {
    return  <div className="header">
              <h1>Meal Planner</h1>
              <MealPlan mealTimes={this.state.mealTimes} />
            </div>
  }
}

module.exports = Header;
