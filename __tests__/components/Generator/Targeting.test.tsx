import { render, screen } from '../../../test-utils/render';
import Targeting from '../../../components/Generator/Targeting';

describe('Targeting', () => {
  it('renders the section title', () => {
    render(<Targeting />);
    expect(screen.getByText('Targeting')).toBeInTheDocument();
  });

  it('renders all targeting feature labels', () => {
    render(<Targeting />);
    expect(screen.getByText('Visitor Device')).toBeInTheDocument();
    expect(screen.getByText('After X seconds')).toBeInTheDocument();
    expect(screen.getByText('After % Scroll')).toBeInTheDocument();
    expect(screen.getByText('Traffic Source')).toBeInTheDocument();
    expect(screen.getByText('Browser Language')).toBeInTheDocument();
    expect(screen.getByText('Exit Intent Targeting')).toBeInTheDocument();
  });

  it('renders device checkboxes (Desktop, Mobile)', () => {
    render(<Targeting />);
    expect(screen.getByText('Desktop')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
  });

  it('renders seconds input with default value', () => {
    render(<Targeting />);
    const secondsInput = screen.getByDisplayValue('12');
    expect(secondsInput).toBeInTheDocument();
    expect(secondsInput).toBeDisabled();
  });

  it('renders scroll input with default value', () => {
    render(<Targeting />);
    const scrollInput = screen.getByDisplayValue('50');
    expect(scrollInput).toBeInTheDocument();
  });

  it('renders traffic source input', () => {
    render(<Targeting />);
    expect(screen.getByPlaceholderText('Enter your traffic source domain')).toBeInTheDocument();
  });
});
