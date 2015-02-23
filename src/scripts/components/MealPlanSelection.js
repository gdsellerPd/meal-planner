const React = require('react');

const MealPlanActionCreator = require('../actions/MealPlanActionCreator');

class MealPlanSelection extends React.Component {
  render() {

    let inner;
    if (this.props.mealPlan) {
      inner = <img className="meal-plan-selection-image" src={this.props.mealPlan.picUrl} onClick={this._onRemove.bind(this)} />;
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

  _onRemove() {
    MealPlanActionCreator.mealPlanDelete(this.props.reactKey, this.props.mealPlan);
  }
}

module.exports = MealPlanSelection;
