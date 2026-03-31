import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App', () => {
    const { getByText } = render(<p />);
    expect(getByText('Hello World!')).toBeInTheDocument();
  });
});
