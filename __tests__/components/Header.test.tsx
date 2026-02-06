import { render, screen } from '../../test-utils/render';
import userEvent from '@testing-library/user-event';
import Header from '../../components/Header';

jest.mock('next/link', () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe('Header', () => {
  it('renders logo and brand name', () => {
    render(<Header />);
    expect(screen.getByAltText('Modal cards Logo')).toBeInTheDocument();
    expect(screen.getByText('modal.cards')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Product Tour')).toBeInTheDocument();
    expect(screen.getByText('Showcase')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
  });

  it('renders sign in and CTA buttons', () => {
    render(<Header />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    expect(screen.getByText('Try for free')).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    const { container } = render(<Header />);
    const menuButton = container.querySelector('button img[src="/assets/menu.svg"]')!.closest('button')!;

    // The wrapping div contains 'hidden' class when menu is closed
    // Walk up from "Solutions" text to find the div with w-full class that has hidden
    const getNavWrapper = () => {
      let el: HTMLElement | null = screen.getByText('Solutions');
      while (el && !el.classList.contains('w-full')) {
        el = el.parentElement;
      }
      return el;
    };

    expect(getNavWrapper()).toHaveClass('hidden');

    await user.click(menuButton);
    expect(getNavWrapper()).not.toHaveClass('hidden');
  });
});
