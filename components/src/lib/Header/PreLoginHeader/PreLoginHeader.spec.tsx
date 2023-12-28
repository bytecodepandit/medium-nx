import { render } from '@testing-library/react';
import { PreLoginHeader } from './index'

describe('PreLoginHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreLoginHeader />);
    expect(baseElement).toBeTruthy();
  });
});
