require('../styles/app.scss');

const React = require('react');

const Header = require('./components/Header');
const MealPlan = require('./components/MealPlan');
const MealOptions = require('./components/MealOptions');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mealTimes: [{ name: "Sun" }, { name: "Mon" }, { name: "Tue" }, { name: "Wed" },
                  { name: "Thu" }, { name: "Fri" }, { name: "Sat" } ],

      mealOptions: [{
        name:   'Stir-Fry Chicken with Broccoli Recipe',
        url:    'https://www.flickr.com/photos/40726522@N02/8248039340/in/photolist-oTfPPv-8uRsLx-64BrYT-9eEsJL-oLRqJ1-3917uk-9Azmdp-dyRmJQ-goW3PH-d8Yps1-fDVUs-bokENz-4hGZ1d-Ltn5G-adVdDX-niq744-9vFzQD-5p9v7-xGMMq-iBYqih-9acLSt-5bg5wJ-dvKfRi-2dwX14-oH3RQV-opkb9s-8Mq97h-qXJxmi-729MLR-fz9WJz-6izVoh-aSDi72-dR7ADh-hs7WmW-a4am7P-oWZ74H-bsJx9H-39Cf6m-5Z6Qs9-9Bvtyr-9yQW5B-99naKQ-5xb2Kd-c6SA4-fRWuqp-bsWugr-cG7Akf-q4SExy-fpboiL-dcK6jQ',
        picUrl: 'images/StirFryChicken.jpg'
      }, {
        name:   'Stir-Fry Chicken with Broccoli Recipe',
        url:    'https://www.flickr.com/photos/40726522@N02/8248039340/in/photolist-oTfPPv-8uRsLx-64BrYT-9eEsJL-oLRqJ1-3917uk-9Azmdp-dyRmJQ-goW3PH-d8Yps1-fDVUs-bokENz-4hGZ1d-Ltn5G-adVdDX-niq744-9vFzQD-5p9v7-xGMMq-iBYqih-9acLSt-5bg5wJ-dvKfRi-2dwX14-oH3RQV-opkb9s-8Mq97h-qXJxmi-729MLR-fz9WJz-6izVoh-aSDi72-dR7ADh-hs7WmW-a4am7P-oWZ74H-bsJx9H-39Cf6m-5Z6Qs9-9Bvtyr-9yQW5B-99naKQ-5xb2Kd-c6SA4-fRWuqp-bsWugr-cG7Akf-q4SExy-fpboiL-dcK6jQ',
        picUrl: 'images/StirFryChicken.jpg'
      },
      {
        name:   'Stir-Fry Chicken with Broccoli Recipe',
        url:    'https://www.flickr.com/photos/40726522@N02/8248039340/in/photolist-oTfPPv-8uRsLx-64BrYT-9eEsJL-oLRqJ1-3917uk-9Azmdp-dyRmJQ-goW3PH-d8Yps1-fDVUs-bokENz-4hGZ1d-Ltn5G-adVdDX-niq744-9vFzQD-5p9v7-xGMMq-iBYqih-9acLSt-5bg5wJ-dvKfRi-2dwX14-oH3RQV-opkb9s-8Mq97h-qXJxmi-729MLR-fz9WJz-6izVoh-aSDi72-dR7ADh-hs7WmW-a4am7P-oWZ74H-bsJx9H-39Cf6m-5Z6Qs9-9Bvtyr-9yQW5B-99naKQ-5xb2Kd-c6SA4-fRWuqp-bsWugr-cG7Akf-q4SExy-fpboiL-dcK6jQ',
        picUrl: 'images/StirFryChicken.jpg'
      },
      {
        name:   'Stir-Fry Chicken with Broccoli Recipe',
        url:    'https://www.flickr.com/photos/40726522@N02/8248039340/in/photolist-oTfPPv-8uRsLx-64BrYT-9eEsJL-oLRqJ1-3917uk-9Azmdp-dyRmJQ-goW3PH-d8Yps1-fDVUs-bokENz-4hGZ1d-Ltn5G-adVdDX-niq744-9vFzQD-5p9v7-xGMMq-iBYqih-9acLSt-5bg5wJ-dvKfRi-2dwX14-oH3RQV-opkb9s-8Mq97h-qXJxmi-729MLR-fz9WJz-6izVoh-aSDi72-dR7ADh-hs7WmW-a4am7P-oWZ74H-bsJx9H-39Cf6m-5Z6Qs9-9Bvtyr-9yQW5B-99naKQ-5xb2Kd-c6SA4-fRWuqp-bsWugr-cG7Akf-q4SExy-fpboiL-dcK6jQ',
        picUrl: 'images/StirFryChicken.jpg'
      },
      {
        name:   'Stir-Fry Chicken with Broccoli Recipe',
        url:    'https://www.flickr.com/photos/40726522@N02/8248039340/in/photolist-oTfPPv-8uRsLx-64BrYT-9eEsJL-oLRqJ1-3917uk-9Azmdp-dyRmJQ-goW3PH-d8Yps1-fDVUs-bokENz-4hGZ1d-Ltn5G-adVdDX-niq744-9vFzQD-5p9v7-xGMMq-iBYqih-9acLSt-5bg5wJ-dvKfRi-2dwX14-oH3RQV-opkb9s-8Mq97h-qXJxmi-729MLR-fz9WJz-6izVoh-aSDi72-dR7ADh-hs7WmW-a4am7P-oWZ74H-bsJx9H-39Cf6m-5Z6Qs9-9Bvtyr-9yQW5B-99naKQ-5xb2Kd-c6SA4-fRWuqp-bsWugr-cG7Akf-q4SExy-fpboiL-dcK6jQ',
        picUrl: 'images/StirFryChicken.jpg'
      }]
    };
  }

  render() {
    return  <div className="main">
              <Header title={this.props.title} />
              <MealPlan mealTimes={this.state.mealTimes} />
              <MealOptions mealOptions={this.state.mealOptions} />
            </div>;
  }
}

React.render(<App title="Meal Planner Extreme" />, document.body);
