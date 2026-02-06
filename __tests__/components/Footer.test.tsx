import { render, screen } from '../../test-utils/render';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders section title', () => {
    render(<Footer />);
    expect(screen.getByText('Build great popups without code')).toBeInTheDocument();
  });

  it('renders all four footer cards', () => {
    render(<Footer />);
    const targetingOptions = screen.getAllByText('Targeting Options');
    expect(targetingOptions).toHaveLength(3);
    expect(screen.getByText('No-Code')).toBeInTheDocument();
  });
});
