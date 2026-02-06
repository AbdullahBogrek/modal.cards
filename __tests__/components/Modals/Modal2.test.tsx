import { render, screen } from '../../../test-utils/render';
import Modal2 from '../../../components/Modals/Modal2';

describe('Modal2', () => {
  it('renders without crashing', () => {
    render(<Modal2 />);
  });

  it('renders cover image (fallback when context image is empty)', () => {
    render(<Modal2 />);
    const img = screen.getAllByRole('img').find(
      i => i.getAttribute('src') === '/assets/modal2_cover.png'
    );
    expect(img).toBeInTheDocument();
  });

  it('renders close icon', () => {
    render(<Modal2 />);
    const closeIcon = screen.getAllByRole('img').find(
      i => i.getAttribute('src') === '/assets/modal_close_black.svg'
    );
    expect(closeIcon).toBeInTheDocument();
  });

  it('renders two action buttons', () => {
    render(<Modal2 />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('applies default background color from context', () => {
    const { container } = render(<Modal2 />);
    const modal = container.firstChild as HTMLElement;
    expect(modal).toHaveStyle({ backgroundColor: '#FFFFFF' });
  });
});
