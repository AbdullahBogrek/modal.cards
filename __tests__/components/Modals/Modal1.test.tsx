import { render, screen } from '../../../test-utils/render';
import Modal1 from '../../../components/Modals/Modal1';

describe('Modal1', () => {
  it('renders without crashing', () => {
    render(<Modal1 />);
  });

  it('renders an input field', () => {
    render(<Modal1 />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders two action buttons', () => {
    render(<Modal1 />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('renders close button', () => {
    render(<Modal1 />);
    const closeIcon = screen.getAllByRole('img').find(
      img => img.getAttribute('src') === '/assets/modal_close_black.svg'
    );
    expect(closeIcon).toBeInTheDocument();
  });

  it('applies default background color from context', () => {
    const { container } = render(<Modal1 />);
    const modal = container.firstChild as HTMLElement;
    expect(modal).toHaveStyle({ backgroundColor: '#FFFFFF' });
  });

  it('has fixed width and padding classes', () => {
    const { container } = render(<Modal1 />);
    const modal = container.firstChild as HTMLElement;
    expect(modal.className).toContain('w-[480px]');
    expect(modal.className).toContain('py-8');
  });
});
