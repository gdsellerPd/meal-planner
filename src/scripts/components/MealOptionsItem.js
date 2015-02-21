const React = require('react');


class MealOptionsItem extends React.Component {
  render() {
    return  <div className="meal-options-item-container">
              <div className="meal-options-item">
                <img src={this.props.data.picUrl} />
                <div className="meal-options-item-details">
                  <div>
                    <a className="meal-options-item-details-title" target="_blank" href={this.props.data.url}>
                      {this.props.data.name}
                    </a>
                  </div>
                </div>
              </div>
            </div>;
  }
}

module.exports = MealOptionsItem;
