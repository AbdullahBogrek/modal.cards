import { render, screen } from '../../test-utils/render';
import Features from '../../components/Features';

describe('Features', () => {
  it('renders section title and subtitle', () => {
    render(<Features />);
    expect(screen.getByText('Why getpopup?')).toBeInTheDocument();
    expect(screen.getByText('Everything you need to create popups that convert')).toBeInTheDocument();
  });

  it('renders all six feature cards', () => {
    render(<Features />);
    expect(screen.getByText('Smart Targeting')).toBeInTheDocument();
    expect(screen.getByText('Visual Editor')).toBeInTheDocument();
    expect(screen.getByText('Lightweight')).toBeInTheDocument();
    expect(screen.getByText('Mobile Ready')).toBeInTheDocument();
    expect(screen.getByText('Webhooks & APIs')).toBeInTheDocument();
    expect(screen.getByText('Multi-language')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<Features />);
    expect(screen.getByText(/26\+ targeting triggers/)).toBeInTheDocument();
    expect(screen.getByText(/drag-and-drop editor/)).toBeInTheDocument();
    expect(screen.getByText(/Zero impact on your site speed/)).toBeInTheDocument();
  });
});
