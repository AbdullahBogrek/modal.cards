import { render, screen } from '../../test-utils/render';
import userEvent from '@testing-library/user-event';
import Header from '../../components/Header';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('Header', () => {
  it('renders logo and brand name', () => {
    render(<Header />);
    expect(screen.getByAltText('getpopup Logo')).toBeInTheDocument();
    expect(screen.getByText('getpopup')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Templates')).toBeInTheDocument();
  });

  it('does not render auth buttons', () => {
    render(<Header />);
    expect(screen.queryByText('Sign in')).not.toBeInTheDocument();
    expect(screen.queryByText('Try for free')).not.toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });

    // Before click: only desktop nav links (1 instance each)
    expect(screen.getAllByText('How It Works')).toHaveLength(1);

    await user.click(menuButton);
    // After click: desktop + mobile nav links (2 instances each)
    expect(screen.getAllByText('How It Works')).toHaveLength(2);
  });
});
