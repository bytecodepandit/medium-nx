import { render } from '@testing-library/react';

import LoginModal from './LoginModal';

describe('LoginModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginModal />);
    expect(baseElement).toBeTruthy();
  });
});
