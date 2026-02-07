import { render, screen } from '../../test-utils/render';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders section title', () => {
    render(<Footer />);
    expect(screen.getByText('Build great popups without code')).toBeInTheDocument();
  });

  it('renders all four footer cards', () => {
    render(<Footer />);
    expect(screen.getByText('Targeting Options')).toBeInTheDocument();
    expect(screen.getByText('No-Code')).toBeInTheDocument();
    expect(screen.getByText('Integrations')).toBeInTheDocument();
    expect(screen.getByText('Performance')).toBeInTheDocument();
  });
});
