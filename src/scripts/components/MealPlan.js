const React = require('react');

var MealPlanSelection = require('./MealPlanSelection');

class MealPlan extends React.Component {
  render() {
    if (!this.props.mealTimes) {
      return null;
    }
    
    return  <div className="meal-plan">
      { this.props.mealTimes.map(mt => <MealPlanSelection mealTime={mt} />) }
    </div>;
  }
}

module.exports = MealPlan;
