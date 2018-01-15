import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddTodo
      value={''}
    ></AddTodo>, div);
});


test("should contain a FormGroup", () => {
  const component = shallow(
    <AddTodo
      value={''}
    ></AddTodo>)

  expect(component.find('FormGroup')).toHaveLength(1);
})
