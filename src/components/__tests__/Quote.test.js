import ReactTestRenderer from 'react-test-renderer';
import Quote from '../Quote';

it('Creates a snapshot for Quote Page and it should be the same with the previous snapshot', () => {
  const tree = ReactTestRenderer.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
