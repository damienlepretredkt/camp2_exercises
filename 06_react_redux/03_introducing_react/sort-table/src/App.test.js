import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';
import fakeProducts from './__datas__/fakeData'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('should not change from snapshot', () => {

  const component = renderer.create(
      <App products={fakeProducts}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})


test("should have h1 tag with 'Welcome to Sort Table' text and correct class name ", () => {
  const app = shallow(<App />);

  expect(app.find('h1').text()).toEqual('Welcome to Sort Table');
  expect(app.find('.App-title')).toHaveLength(1);
})

test("should have 1 element with class name App-header", () => {
  const app = shallow(<App />);

  expect(app.find('.App-header')).toHaveLength(1);
})


test("should have Table component", () => {
  const app = shallow(<App />);
  expect(app.find('Table')).toHaveLength(1);
  expect(app.find('Table').props().products).toBeInstanceOf(Array);
})

test("it should get the content of elements of the page", () => {
  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("h1").textContent)
    .capture(() => document.querySelectorAll('td')[0].textContent)
    .capture(() => document.querySelectorAll('td')[1].textContent)
    .capture(() => document.querySelectorAll('td')[2].textContent)
    .capture(() => document.querySelectorAll('td').length)
    .run()
    .then(result => {
      expect(result).toEqual(["Welcome to Sort Table","8044622","2 guêtres RIDING noir","14.99", 39]);
    });
});
