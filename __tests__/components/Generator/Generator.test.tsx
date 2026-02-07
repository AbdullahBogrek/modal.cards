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
    expect(screen.getByText(/Build high-converting popup modals/)).toBeInTheDocument();
  });

  it('renders Templates section', () => {
    render(<Generator />);
    expect(screen.getAllByText('Choose your template').length).toBeGreaterThanOrEqual(1);
  });

  it('hides wizard steps when no template is selected', () => {
    render(<Generator />);
    expect(screen.queryByText(/Appearance/)).not.toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    expect(screen.queryByText('Targeting')).not.toBeInTheDocument();
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();
  });

  it('shows wizard steps after selecting a template', async () => {
    const user = userEvent.setup();
    render(<Generator />);

    const selectButtons = screen.getAllByText('Select template');
    await user.click(selectButtons[0]);

    expect(screen.getAllByText(/Appearance/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Content').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Targeting').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Settings').length).toBeGreaterThanOrEqual(1);
  });

  it('shows modal preview when template 1 is selected', async () => {
    const user = userEvent.setup();
    render(<Generator />);

    const selectButtons = screen.getAllByText('Select template');
    await user.click(selectButtons[0]);

    // Modal1 appears in both thumbnail and preview
    expect(screen.getAllByText('Security Code').length).toBeGreaterThanOrEqual(2);
  });

  it('shows different modal when different template is selected', async () => {
    const user = userEvent.setup();
    render(<Generator />);

    const selectButtons = screen.getAllByText('Select template');
    await user.click(selectButtons[1]);

    // Modal2 appears in both thumbnail and preview
    expect(screen.getAllByText('Install local now').length).toBeGreaterThanOrEqual(2);
  });
});
