import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';
import fakeProducts from '../../__datas__/fakeData'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table> </Table>, div);
});


test("should return a table element", () => {

    const component = shallow(<Table />);

    component.setProps({products: fakeProducts})

    expect(component.find('table')).toHaveLength(1);
    expect(component.find('th').at(0).text()).toBe("Product Id")
    expect(component.find('th').at(1).text()).toBe("Title")
    expect(component.find('th').at(2).text()).toBe("Price")

})

test("should return a table element", () => {

    const component = shallow(<Table />);

    component.setProps({products: fakeProducts})

    expect(component.find('table')).toHaveLength(1);
    expect(component.find('Row')).toHaveLength(3);


})
