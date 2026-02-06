import { render, screen } from '../../test-utils/render';
import Features from '../../components/Features';

describe('Features', () => {
  it('renders section title', () => {
    render(<Features />);
    expect(screen.getByText('Conversion & UX ready popups & modals')).toBeInTheDocument();
  });

  it('renders all three feature cards', () => {
    render(<Features />);
    expect(screen.getByText('Pixel Perfect')).toBeInTheDocument();
    expect(screen.getByText('Conversion Ready')).toBeInTheDocument();
    expect(screen.getByText('Modern & Useful')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<Features />);
    expect(screen.getByText(/calculate your email marketing roi/)).toBeInTheDocument();
    expect(screen.getByText(/generating afree code/)).toBeInTheDocument();
    expect(screen.getByText(/estimate the total profit/)).toBeInTheDocument();
  });
});
