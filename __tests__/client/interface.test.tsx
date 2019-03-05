import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { StaticRouter } from 'react-router-dom';

import App from '../../src/client/scripts/App';

test('Home', () => {
    const tree = renderer
        .create(
            <StaticRouter location={"/home"}>
                <App />
            </StaticRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('About', () => {
    const tree = renderer
        .create(
            <StaticRouter location={"/about"}>
                <App />
            </StaticRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('NotFound', () => {
    const tree = renderer
        .create(
            <StaticRouter location={`/${randomString(10)}`}>
                <App />
            </StaticRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

function randomString(length: number) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let i;
    for (i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}