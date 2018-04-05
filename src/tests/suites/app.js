import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./../../client/app"; 

test('App component renders with h1 text', () => {
    const component = renderer.create(<App></App>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});