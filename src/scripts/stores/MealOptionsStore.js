const React = require('react');
const { List } = require('immutable');

const data = require('json!../data.json');

const _mealTimes = List(data.mealTimes);
const _mealOptions = List(data.mealOptions);
let _availableOptions;


class MealOptionsStore {

  constructor() {
    _availableOptions = List(_mealOptions);
  }

  getMealTimes() {
    return _mealTimes;
  }

  getAvailableOptions() {
    return _availableOptions;
  }
}


module.exports = new MealOptionsStore();
