import { render, screen } from '../../../test-utils/render';
import Content from '../../../components/Generator/Content';

describe('Content', () => {
  it('renders the section title', () => {
    render(<Content />);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders edit content subtitle', () => {
    render(<Content />);
    expect(screen.getByText('Edit your content')).toBeInTheDocument();
  });

  it('renders input fields with descriptive placeholders', () => {
    render(<Content />);
    // Default template features (template 1 fallback): title, subtitle, input1, button1, button2
    expect(screen.getByPlaceholderText('Enter title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter subtitle')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Input placeholder 1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Button 1 text')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Button 2 text')).toBeInTheDocument();
  });

  it('all inputs are disabled when wizard steps are not complete', () => {
    render(<Content />);
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach(input => {
      expect(input).toBeDisabled();
    });
  });
});
