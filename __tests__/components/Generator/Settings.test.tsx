import { render, screen } from '../../../test-utils/render';
import userEvent from '@testing-library/user-event';
import Settings from '../../../components/Generator/Settings';

describe('Settings', () => {
  it('renders the section title', () => {
    render(<Settings />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders webhook section', () => {
    render(<Settings />);
    expect(screen.getByText('Webhook to Send data')).toBeInTheDocument();
    expect(screen.getByText('Enter your Webhook URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Webhook URL')).toBeInTheDocument();
  });

  it('renders checkbox options', () => {
    render(<Settings />);
    expect(screen.getByText('Send form submission')).toBeInTheDocument();
    expect(screen.getByText('Send click data')).toBeInTheDocument();
  });

  it('renders Get your Code button', () => {
    render(<Settings />);
    expect(screen.getByText('Get your Code')).toBeInTheDocument();
  });

  it('Get your Code button is disabled when settings step not reached', () => {
    render(<Settings />);
    expect(screen.getByText('Get your Code')).toBeDisabled();
  });

  it('webhook input is disabled when settings step not reached', () => {
    render(<Settings />);
    expect(screen.getByPlaceholderText('Your Webhook URL')).toBeDisabled();
  });

  it('checkboxes are disabled when settings step not reached', () => {
    render(<Settings />);
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(cb => {
      expect(cb).toBeDisabled();
    });
  });
});
