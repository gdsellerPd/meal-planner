const React = require('react');


class MealOptionsFilter extends React.Component {
  render() {
    return <input className="meal-options-filter-input" type="text" placeholder="filter meal options"/>;
  }
}

module.exports = MealOptionsFilter;