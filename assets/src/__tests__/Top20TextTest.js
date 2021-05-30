import React from 'react';
import { shallow, mount, render } from 'enzyme';
const jsdomAlert = window.alert;

// setup file
console.warn = () => {};
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import BestSellers from '../modules/bestSellers/BestSellers.tsx';

import PastPurchases from '../modules/pastPurchases/PastPurchases.tsx';

  it('Render check Text \'Top 20 best sellers\'', function() {
    window.alert = jest.fn(); // Surpress Bug alert from https://stackoverflow.com/questions/55787988/window-alert-not-implemented-when-running-tests
    expect(shallow(<BestSellers />).contains('Top 20 best sellers')).toBe(true);
  });

  it('Render check Text \'Past Purchases\'', function() {
    window.alert = jest.fn(); // Surpress Bug alert from https://stackoverflow.com/questions/55787988/window-alert-not-implemented-when-running-tests
    expect(shallow(<PastPurchases />).contains(
    <div className="white-box">
      <h3>Past purchases</h3>
    </div>)).toBe(true);
  });
  
  