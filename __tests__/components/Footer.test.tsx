import { render, screen } from '../../test-utils/render';
import Footer from '../../components/Footer';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('Footer', () => {
  it('renders brand and description', () => {
    render(<Footer />);
    expect(screen.getByText('getpopup')).toBeInTheDocument();
    expect(screen.getByText(/easiest way to create high-converting popups/)).toBeInTheDocument();
  });

  it('renders Product column links', () => {
    render(<Footer />);
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Templates')).toBeInTheDocument();
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  });

  it('renders Resources column links', () => {
    render(<Footer />);
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Documentation')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 getpopup/)).toBeInTheDocument();
  });
});
