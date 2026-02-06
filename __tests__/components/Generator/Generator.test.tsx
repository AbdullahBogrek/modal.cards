import { render, screen } from '../../../test-utils/render';
import userEvent from '@testing-library/user-event';
import Generator from '../../../components/Generator';

describe('Generator', () => {
  it('renders the section title', () => {
    render(<Generator />);
    expect(screen.getByText('Modal Card Generator')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Generator />);
    expect(screen.getByText(/Measure your return on email marketing/)).toBeInTheDocument();
  });

  it('shows CardPlaceholder when no template is selected (id=0)', () => {
    render(<Generator />);
    expect(screen.getByText('Please select a template to create a modal.')).toBeInTheDocument();
  });

  it('renders Templates section', () => {
    render(<Generator />);
    expect(screen.getByText('Choose your template')).toBeInTheDocument();
  });

  it('renders Appearance section', () => {
    render(<Generator />);
    expect(screen.getByText(/Appearance/)).toBeInTheDocument();
  });

  it('renders Content section', () => {
    render(<Generator />);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders Targeting section', () => {
    render(<Generator />);
    expect(screen.getByText('Targeting')).toBeInTheDocument();
  });

  it('renders Settings section', () => {
    render(<Generator />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('replaces CardPlaceholder with Modal1 when template 1 is selected', async () => {
    const user = userEvent.setup();
    render(<Generator />);

    // Select template 1
    const selectButtons = screen.getAllByText('Select template');
    await user.click(selectButtons[0]);

    // CardPlaceholder should be gone
    expect(screen.queryByText('Please select a template to create a modal.')).not.toBeInTheDocument();
    // Modal1 should appear with its default content
    expect(screen.getByText('Security Code')).toBeInTheDocument();
  });

  it('shows different modal when different template is selected', async () => {
    const user = userEvent.setup();
    render(<Generator />);

    // Select template 2
    const selectButtons = screen.getAllByText('Select template');
    await user.click(selectButtons[1]);

    expect(screen.queryByText('Please select a template to create a modal.')).not.toBeInTheDocument();
    // Modal2 reads from context — loadTemplateDefaults(2) sets "Install local now"
    expect(screen.getByText('Install local now')).toBeInTheDocument();
  });
});
