const React            = require('react');
const { List, Set }    = require('immutable');
const { EventEmitter } = require('events');

const data = require('json!../data.json');

const AppDispatcher             = require('../AppDispatcher');
const MealOptionsConstants      = require('../constants/MealOptionsConstants');


const CHANGE_EVENT = 'meal-options-change';

const _mealTimes = List(data.mealTimes);
const _mealOptions = List(data.mealOptions);
let _availableOptions;


function filterOptions(filterValue) {
  if (!filterValue || filterValue.trim() === "") {
    _availableOptions = List(_mealOptions);
    return;
  }

  const searchByRegex = new RegExp(filterValue, 'i');

  const byName = _mealOptions.filter(m => {
    return m.name.match(searchByRegex);
  });

  const byTag = _mealOptions
    .filter(m => {
      return m.tags
              .map(tag => { return tag.match(searchByRegex); })
              .reduce((prev, cur) => { return prev || cur; })
    });

  _availableOptions = Set(List(byName).concat(byTag));
}


class MealOptionsStore extends EventEmitter {

  constructor() {
    _availableOptions = List(_mealOptions);
  }

  getMealTimes() {
    return _mealTimes;
  }

  getAvailableOptions() {
    return _availableOptions;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const _mealOptionsStore = new MealOptionsStore();

AppDispatcher.register(function(action) {
    var change = true;

    switch(action.actionType) {
      case MealOptionsConstants.MEAL_OPTIONS_FILTER_CHANGED:
          filterOptions(action.value);
        break;

      default:
        change = false;
        break;
    }

    if(change) {
      _mealOptionsStore.emitChange();
    }
});


module.exports = _mealOptionsStore;
