const React = require('react');

class MealPlanSelection extends React.Component {
  render() {

    let inner;
    if (this.props.mealPlan) {
      inner = <img src={this.props.mealPlan.picUrl} />;
    } else {
      inner = <span className="meal-plan-selection-action-text">drag here</span>;
    }

    return <div className="meal-plan-selection">

      <div className="meal-plan-selection-outer">
        <div className="meal-plan-selection-inner">
          {inner}
        </div>
      </div>

      <div>
        <span className="meal-plan-selection-text">
          {this.props.reactKey}
        </span>
      </div>

      <div>
        <span className="meal-plan-selection-name">
          {this.props.mealPlan && this.props.mealPlan.name}
        </span>
      </div>

    </div>;
  }
}

module.exports = MealPlanSelection;
