import { render } from '@testing-library/react';

import TrendingArticleCard from './TrendingArticleCard';

describe('TrendingArticleCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TrendingArticleCard />);
    expect(baseElement).toBeTruthy();
  });
});
