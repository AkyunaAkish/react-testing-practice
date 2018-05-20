import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
const app = shallow(<App />);

// Whenever you make a change to the app component
// that you want to keep, go to the new failing test
// and press "U" in the command line to update your snapshoit

it('renders <App /> correctly', () => {
    // snapshots keep a recorded history of 
    // your react component
    // whenever a change happens in the app
    // snapshots will update and keep a history
    // of the rendering of the component
    expect(app).toMatchSnapshot();
});

it('initializes <App /> `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to  <App /> `state` when clicking `add gift` button', () => {
    app.find('.btn-add').simulate('click');

    expect(app.state().gifts).toEqual([{ id: 1 }]);
});

