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
    expect(screen.getByText(/Beautifully crafted modal templates/)).toBeInTheDocument();
    expect(screen.getByText(/Optimized layouts and CTA placements/)).toBeInTheDocument();
    expect(screen.getByText(/Clean, contemporary designs/)).toBeInTheDocument();
  });
});
