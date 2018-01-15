import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';


Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('should not change from snapshot', () => {

  const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})


test("should have h1 tag with Hello World text", () => {

  const app = shallow(
    <App />
  );

  expect(app.find('h1').text()).toEqual('Hello World !');

})


test("it should get the h1 content of elements of the page", () => {
  return Wapiti.goto("http://localhost:3000/")
    .capture(() => document.querySelector("h1").textContent)
    .run()
    .then(result => {
      expect(result).toEqual("Hello World !");
    });
});
