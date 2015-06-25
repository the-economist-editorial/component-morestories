import React from 'react';
import SwipeView from 'react-swipe-views';

import json from './json.js';

export default class MoreStories extends React.Component {


  render() {
    var stories = json.tiles.reduce((total, article) => {
      total[article.section] = total[article.section] || [];
      total[article.section].push(article);
      return total;
    }, {});
    return (
      <SwipeView>
        {
          Object.keys(stories).map((title) => {
            return (
              <div title={title}>
              </div>
            )
          })
        }
      </SwipeView>
    );
  }

}