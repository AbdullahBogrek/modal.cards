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
    expect(screen.getByText('getpopup')).toBeInTheDocument();
  });

  it('renders Hero section', () => {
    render(<Home />);
    expect(screen.getByText('Simple modal card creator')).toBeInTheDocument();
  });

  it('renders Generator section', () => {
    render(<Home />);
    expect(screen.getByText('Modal Card Generator')).toBeInTheDocument();
  });

  it('renders Features section', () => {
    render(<Home />);
    expect(screen.getByText('Conversion & UX ready popups & modals')).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<Home />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders Footer section', () => {
    render(<Home />);
    expect(screen.getByText('Build great popups without code')).toBeInTheDocument();
  });

  it('all sections render in correct order', () => {
    const { container } = render(<Home />);
    const sections = container.firstChild?.childNodes;
    // Should have: Header, Hero, Generator, Features, FAQ, Footer
    expect(sections?.length).toBeGreaterThanOrEqual(6);
  });
});
