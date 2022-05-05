/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import history from 'utils/history';

export default function HomePage() {
  const route = link => {
    history.push(link);
  };

  return (
    <div className="app">
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <div>This is home page</div>
      <button type="button" onClick={() => route('project')}>
        Go to project
      </button>
    </div>
  );
}

// function routeMe(link) {
//   history.push(link);
// }
