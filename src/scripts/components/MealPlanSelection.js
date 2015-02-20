const React = require('react');

class MealPlanSelection extends React.Component {
  render() {
    return <div className="meal-plan-selection">
      <div className="meal-plan-selection-inner">
        <span className="meal-plan-selection-text">
          {this.props.mealTime.name}
        </span>
      </div>
    </div>;
  }
}

module.exports = MealPlanSelection;
