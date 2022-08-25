import { render } from '@testing-library/react';
import App from '../../App';

test('App wrapper', () => {
  const {container} = render(<App />);
  expect(container.getElementsByClassName('App').length).toBe(1);
});
