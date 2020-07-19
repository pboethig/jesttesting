import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button.js';
import {isTSAnyKeyword} from '@babel/types';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without creashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});


it("renders button correctly", ()=>{
    const {getByTestId} = render( <Button label="click me"></Button>);
    expect(getByTestId('button')).toHaveTextContent("click me");
});


it("renders button correctly22", ()=>{
    const {getByTestId} = render( <Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("save");
});

it("matches snapshots", ()=>{
   const tree = renderer.create(<Button label="save"></Button>).toJSON();

   expect(tree).toMatchSnapshot();
});

it("matches snapshots2", ()=>{
    const tree = renderer.create(<Button label="click me"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshots3", ()=>{
    const component = renderer.create(<Button label="click me"></Button>).getInstance();

    let tree = component.dataFunction();

    expect(tree).toBe(10);
});

it("matches snapshots4", ()=>{
    const component = renderer.create(<Button label="click me"></Button>).getInstance();

    let tree = component.atestfunction();

    expect(tree).toBe(12);
});



