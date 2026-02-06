import { render, screen } from '../../../test-utils/render';
import userEvent from '@testing-library/user-event';
import Appearance from '../../../components/Generator/Appearance';

describe('Appearance', () => {
  it('renders the section title', () => {
    render(<Appearance />);
    expect(screen.getByText(/Appearance/)).toBeInTheDocument();
  });

  it('renders size buttons (Small, Medium, Large)', () => {
    render(<Appearance />);
    expect(screen.getByText('Small')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('size buttons are disabled when appearance is not active', () => {
    render(<Appearance />);
    expect(screen.getByText('Small')).toBeDisabled();
    expect(screen.getByText('Medium')).toBeDisabled();
    expect(screen.getByText('Large')).toBeDisabled();
  });

  it('renders 5 color picker inputs', () => {
    render(<Appearance />);
    const colorInputs = screen.getAllByDisplayValue(/#/);
    expect(colorInputs.length).toBe(5);
  });

  it('color inputs are disabled when appearance is not active', () => {
    render(<Appearance />);
    const colorInputs = screen.getAllByDisplayValue(/#/);
    colorInputs.forEach(input => {
      expect(input).toBeDisabled();
    });
  });

  it('renders position grid (9 buttons)', () => {
    render(<Appearance />);
    const positionButtons = screen.getAllByRole('button').filter(
      btn => btn.classList.contains('appearance-position-button')
    );
    expect(positionButtons).toHaveLength(9);
  });

  it('renders upload logo section', () => {
    render(<Appearance />);
    expect(screen.getByText('Upload Logo')).toBeInTheDocument();
    expect(screen.getByText(/Drop your image here/)).toBeInTheDocument();
  });
});
