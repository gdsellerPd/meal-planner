const React = require('react');

const MealOptionsFilter = require('./MealOptionsFilter');
const MealOptionsList = require('./MealOptionsList');


class MealOptions extends React.Component {
  render() {
    return  <div className="meal-options">
              <h1 className="meal-options-header">Meal Options</h1>
              <MealOptionsFilter />
              <MealOptionsList />
            </div>;
  }
}

module.exports = MealOptions;
