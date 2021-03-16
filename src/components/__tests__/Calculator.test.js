import ReactTestRenderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should render the Calculator component', () => {
    const tree = ReactTestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
