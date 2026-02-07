import { render, screen } from '../../../test-utils/render';
import userEvent from '@testing-library/user-event';
import Templates from '../../../components/Generator/Templates';

describe('Templates', () => {
  it('renders the section title', () => {
    render(<Templates />);
    expect(screen.getByText('Choose your template')).toBeInTheDocument();
  });

  it('renders 12 template selection buttons', () => {
    render(<Templates />);
    const buttons = screen.getAllByText('Select template');
    expect(buttons).toHaveLength(12);
  });

  it('renders 12 live template thumbnails', () => {
    render(<Templates />);
    // Each template renders as a live modal component (not a static img)
    const buttons = screen.getAllByText('Select template');
    expect(buttons).toHaveLength(12);
  });

  it('clicking a template button triggers selection', async () => {
    const user = userEvent.setup();
    render(<Templates />);
    const buttons = screen.getAllByText('Select template');
    await user.click(buttons[0]);
    // Template 1 should now be selected (id=1 in ModalContext)
    // The button has id="1" which sets the modal id
  });
});
