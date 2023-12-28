import { render } from '@testing-library/react';

import PostLoginHeader from './index';

describe('PostLoginHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostLoginHeader />);
    expect(baseElement).toBeTruthy();
  });
});
