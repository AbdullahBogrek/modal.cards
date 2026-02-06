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
    const content = screen.getByText('You can pay with a credit card.');
    expect(content.closest('div')).toHaveClass('hidden');
  });

  it('shows content when title is clicked', async () => {
    const user = userEvent.setup();
    render(<Accordion {...defaultProps} />);

    await user.click(screen.getByRole('button'));

    const content = screen.getByText('You can pay with a credit card.');
    expect(content.closest('div')).not.toHaveClass('hidden');
  });

  it('hides content when clicked again (toggle)', async () => {
    const user = userEvent.setup();
    render(<Accordion {...defaultProps} />);

    const button = screen.getByRole('button');
    await user.click(button); // open
    await user.click(button); // close

    const content = screen.getByText('You can pay with a credit card.');
    expect(content.closest('div')).toHaveClass('hidden');
  });

  it('changes background color when expanded', async () => {
    const user = userEvent.setup();
    const { container } = render(<Accordion {...defaultProps} />);

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass('bg-white');

    await user.click(screen.getByRole('button'));
    expect(wrapper).toHaveClass('bg-[#F5F5F5]');
  });
});
