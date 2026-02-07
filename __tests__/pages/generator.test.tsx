import { render, screen } from '../../test-utils/render';
import GeneratorPage from '../../pages/generator';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('Generator Page', () => {
  it('renders without crashing', () => {
    render(<GeneratorPage />);
    expect(document.body).toBeInTheDocument();
  });

  it('renders back to home link', () => {
    render(<GeneratorPage />);
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('renders the getpopup logo', () => {
    render(<GeneratorPage />);
    expect(screen.getByAltText('getpopup')).toBeInTheDocument();
  });

  it('renders the Generator component', () => {
    render(<GeneratorPage />);
    expect(screen.getByText('Modal Card Generator')).toBeInTheDocument();
  });
});
