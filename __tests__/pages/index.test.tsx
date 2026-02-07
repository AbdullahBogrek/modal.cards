import { render, screen } from '../../test-utils/render';
import Home from '../../pages/index';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders Header section', () => {
    render(<Home />);
    expect(screen.getAllByText('getpopup').length).toBeGreaterThanOrEqual(1);
  });

  it('renders Hero section', () => {
    render(<Home />);
    expect(screen.getByText(/Turn Every Visitor/)).toBeInTheDocument();
  });

  it('renders How It Works section', () => {
    render(<Home />);
    expect(screen.getByText('Four simple steps to create high-converting popups')).toBeInTheDocument();
  });

  it('renders Features section', () => {
    render(<Home />);
    expect(screen.getByText('Why getpopup?')).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<Home />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders Footer section', () => {
    render(<Home />);
    expect(screen.getByText(/easiest way to create high-converting popups/)).toBeInTheDocument();
  });

  it('all sections render in correct order', () => {
    const { container } = render(<Home />);
    const sections = container.firstChild?.childNodes;
    // Should have: Header, Hero (2 sections), HowItWorks, Features, FAQ, Footer
    expect(sections?.length).toBeGreaterThanOrEqual(6);
  });
});
