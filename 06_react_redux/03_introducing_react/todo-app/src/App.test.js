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


test("should update state when trigger handleChange", () => {

  const component = shallow(<App />);

  const event = {target: {value: "myTodoName"}}

  component.instance().handleChange(event);
  expect(component.state('value')).toBe('myTodoName');

})

test("should add a todo when trigger handleSubmit",() => {

  const component = shallow(<App />);
  component.setState({ value: 'todoName' });
  const fakeEvent = {
    preventDefault: () => {}
  }

  component.instance().handleSubmit(fakeEvent)

  expect(component.state('todos').length).toBe(1);
  expect(component.state('todos')).toBeInstanceOf(Array);
  expect(component.state('todos')).toEqual([{name: "todoName", active: true}]);
})

// handleSubmit = (event) => {
//   const newTodo = {
//     name: this.state.value,
//     active: true
//   }
//   this.setState({todos: [...this.state.todos, ...[newTodo]]})
//   event.preventDefault();
// }
