import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from "../../src/client/ts/App";

describe('Default', () => {
    test('displaying "fail"', () => {
        const tree = renderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});