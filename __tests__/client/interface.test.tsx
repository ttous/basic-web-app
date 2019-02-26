import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Home from '../../src/client/ts/pages/Home';
import About from '../../src/client/ts/pages/About';
import NotFound from '../../src/client/ts/pages/NotFound';

test('Home', () => {
    const tree = renderer
        .create(<Home />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('About', () => {
    const tree = renderer
        .create(<About />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('NotFound', () => {
    const tree = renderer
        .create(<NotFound />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});