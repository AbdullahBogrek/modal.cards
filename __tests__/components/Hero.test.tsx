import { render, screen } from '../../test-utils/render';
import Hero from '../../components/Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Simple modal card creator')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(screen.getByText(/utility-first CSS framework/)).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<Hero />);
    expect(screen.getByText('Try it out now')).toBeInTheDocument();
  });

  it('renders feature badges', () => {
    render(<Hero />);
    expect(screen.getByText('Free and paid plans')).toBeInTheDocument();
    expect(screen.getByText('Setup in minutes')).toBeInTheDocument();
    expect(screen.getByText('No credit card required*')).toBeInTheDocument();
  });

  it('renders statistics section', () => {
    render(<Hero />);
    expect(screen.getByText('3x')).toBeInTheDocument();
    expect(screen.getByText('120%')).toBeInTheDocument();
    expect(screen.getByText('390%')).toBeInTheDocument();
  });
});
