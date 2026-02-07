import { render, screen } from '../../test-utils/render';
import Hero from '../../components/Hero';

describe('Hero', () => {
  it('renders the badge', () => {
    render(<Hero />);
    expect(screen.getByText('The Easiest Popup Builder')).toBeInTheDocument();
  });

  it('renders the headline with typewriter text', () => {
    render(<Hero />);
    expect(screen.getByText(/Turn Every Visitor/)).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/Build high-converting popups/)).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<Hero />);
    expect(screen.getByText('Start Building Free')).toBeInTheDocument();
  });

  it('renders feature pills', () => {
    render(<Hero />);
    expect(screen.getByText('Forever free plan')).toBeInTheDocument();
    expect(screen.getByText('Live in 2 minutes')).toBeInTheDocument();
    expect(screen.getByText('No credit card needed')).toBeInTheDocument();
  });

  it('renders modal showcase with live templates', () => {
    render(<Hero />);
    // Carousel renders live modal components — check for template dot indicators
    const dots = screen.getAllByRole('button', { name: /Template \d+/ });
    expect(dots.length).toBe(12);
  });

  it('renders statistics section with labels', () => {
    render(<Hero />);
    expect(screen.getByText('Higher Conversion')).toBeInTheDocument();
    expect(screen.getByText('More Email Signups')).toBeInTheDocument();
    expect(screen.getByText('Better Engagement')).toBeInTheDocument();
  });
});
