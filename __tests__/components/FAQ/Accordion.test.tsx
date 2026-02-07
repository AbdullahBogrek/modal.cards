import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from '../../../components/FAQ/Accordion';

describe('Accordion', () => {
  const defaultProps = {
    title: 'How do I pay?',
    content: 'You can pay with a credit card.',
  };

  it('renders the title', () => {
    render(<Accordion {...defaultProps} />);
    expect(screen.getByText('How do I pay?')).toBeInTheDocument();
  });

  it('content is hidden by default', () => {
    render(<Accordion {...defaultProps} />);
    const region = screen.getByRole('region');
    expect(region).toHaveStyle({ height: '0', opacity: '0' });
  });

  it('shows content when title is clicked', async () => {
    const user = userEvent.setup();
    render(<Accordion {...defaultProps} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('You can pay with a credit card.')).toBeInTheDocument();
    const region = screen.getByRole('region');
    expect(region).toHaveStyle({ opacity: '1' });
  });

  it('hides content when clicked again (toggle)', async () => {
    const user = userEvent.setup();
    render(<Accordion {...defaultProps} />);

    const button = screen.getByRole('button');
    await user.click(button); // open
    await user.click(button); // close

    const region = screen.getByRole('region');
    expect(region).toHaveStyle({ height: '0', opacity: '0' });
  });

  it('changes background color when expanded', async () => {
    const user = userEvent.setup();
    const { container } = render(<Accordion {...defaultProps} />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('bg-surface');

    await user.click(screen.getByRole('button'));
    expect(wrapper).toHaveClass('bg-surface-alt');
  });
});
