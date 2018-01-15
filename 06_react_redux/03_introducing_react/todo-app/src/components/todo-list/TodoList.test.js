import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


const todos = [
  {name: 'todo1', active: true},
  {name: 'todo2', active: true},
  {name: 'todo3', active: false}
]


Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TodoList
      todos={todos}
      filterType="active"
      handleCheck={""}
      className=""
    ></TodoList>, div);
});


test("should display one list", () => {

  const component = shallow(<TodoList
        todos={todos}
        filterType="active"
        handleCheck={""}
        className=""
      ></TodoList>);

  expect(component.find('ListGroup')).toHaveLength(1)


})
