import { render } from '@testing-library/react';

import PreLoginBanner from '.';

describe('PreLoginBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreLoginBanner />);
    expect(baseElement).toBeTruthy();
  });
});
