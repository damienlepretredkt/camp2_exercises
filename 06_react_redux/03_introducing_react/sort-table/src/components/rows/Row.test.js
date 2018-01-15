import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';
import fakeProducts from '../../__datas__/fakeData'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<Row product={fakeProducts[0]}></Row>, tbody);
});


test("should disply correctly product informations", () => {

  const component = shallow(<Row product={fakeProducts[0]}></Row>);
  expect(component.find('td').at(0).text()).toBe("8282689");
  expect(component.find('td').at(1).text()).toBe("Corne chasse 14cm");
  expect(component.find('td').at(2).text()).toBe("19.99");

})
