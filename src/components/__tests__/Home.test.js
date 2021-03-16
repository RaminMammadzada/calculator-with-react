import ReactTestRenderer from 'react-test-renderer';
import Home from '../Home';

it('Creates a snapshot for Home Page and it should be the same with the previous snapshot', () => {
  const tree = ReactTestRenderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
