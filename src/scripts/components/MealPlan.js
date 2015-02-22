const React = require('react');

const MealPlanSelection = require('./MealPlanSelection');

class MealPlan extends React.Component {
  render() {
    if (!this.props.data) {
      return null;
    }

    const mealSelections = this.props.data;

    var selections = [];
    for (let mt of mealSelections.keys()) {
      let selection = mealSelections.get(mt);
      selections.push(<MealPlanSelection key={mt} reactKey={mt} mealPlan={selection} />);
    }

    return  <div className="meal-plan">
      { selections }
    </div>;
  }
}

module.exports = MealPlan;
