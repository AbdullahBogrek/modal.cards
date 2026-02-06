import { render, screen } from '../test-utils/render';
import Home from '../pages/index';

describe('Smoke Test', () => {
  it('renders the home page without crashing', () => {
    render(<Home />);
    expect(screen.getByText('Simple modal card creator')).toBeInTheDocument();
  });

  it('renders the Generator section', () => {
    render(<Home />);
    expect(screen.getByText('Modal Card Generator')).toBeInTheDocument();
  });
});
