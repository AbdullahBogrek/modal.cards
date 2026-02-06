import { render, screen } from '../../../test-utils/render';
import CardPlaceholder from '../../../components/Generator/CardPlaceholder';

describe('CardPlaceholder', () => {
  it('renders placeholder message', () => {
    render(<CardPlaceholder />);
    expect(screen.getByText('Please select a template to create a modal.')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<CardPlaceholder />);
    expect(screen.getByText(/Update the template quickly and easily/)).toBeInTheDocument();
  });

  it('renders the placeholder icon', () => {
    render(<CardPlaceholder />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/assets/start_building.svg');
  });
});
