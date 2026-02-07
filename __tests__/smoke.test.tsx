import { render, screen } from '../test-utils/render';
import Home from '../pages/index';

describe('Smoke Test', () => {
  it('renders the home page without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Turn Every Visitor/)).toBeInTheDocument();
  });

  it('renders the How It Works section', () => {
    render(<Home />);
    expect(screen.getAllByText('How It Works').length).toBeGreaterThanOrEqual(1);
  });
});
