import React from 'react';
import { render, screen, fireEvent } from '../../test-utils/render';
import { useStepValidation } from '../../hooks/useStepValidation';
import { useModalContext } from '../../contexts/ModalContext';
import { useModalCustomizationContext } from '../../contexts/ModalCustomizationContext';

function TestHarness() {
  const validation = useStepValidation();
  const { setId } = useModalContext();
  const ctx = useModalCustomizationContext();

  return (
    <div>
      <span data-testid="appearance">{String(validation.isAppearanceEnabled)}</span>
      <span data-testid="content">{String(validation.isContentEnabled)}</span>
      <span data-testid="targeting">{String(validation.isTargetingEnabled)}</span>
      <span data-testid="settings">{String(validation.isSettingsEnabled)}</span>

      <button data-testid="select-template-1" onClick={() => { setId(1); ctx.loadTemplateDefaults(1); }}>T1</button>
      <button data-testid="select-template-2" onClick={() => { setId(2); ctx.loadTemplateDefaults(2); }}>T2</button>
      <button data-testid="select-template-5" onClick={() => { setId(5); ctx.loadTemplateDefaults(5); }}>T5</button>
      <button data-testid="clear-title" onClick={() => ctx.setTitle('')}>Clear Title</button>
      <button data-testid="clear-logo" onClick={() => ctx.setLogo('')}>Clear Logo</button>
      <button data-testid="set-logo" onClick={() => ctx.setLogo('/test-logo.png')}>Set Logo</button>
    </div>
  );
}

describe('useStepValidation', () => {
  it('returns all false when no template is selected', () => {
    render(<TestHarness />);
    expect(screen.getByTestId('appearance').textContent).toBe('false');
    expect(screen.getByTestId('content').textContent).toBe('false');
    expect(screen.getByTestId('targeting').textContent).toBe('false');
    expect(screen.getByTestId('settings').textContent).toBe('false');
  });

  it('enables appearance when a template is selected', () => {
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-1'));
    expect(screen.getByTestId('appearance').textContent).toBe('true');
  });

  it('enables content for template with hasLogo when logo is pre-filled by defaults', () => {
    // Template 1 has hasLogo: true and defaults include logo: "/assets/security_icon.svg"
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-1'));
    expect(screen.getByTestId('content').textContent).toBe('true');
  });

  it('disables content for template with hasLogo when logo is cleared', () => {
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-1'));
    fireEvent.click(screen.getByTestId('clear-logo'));
    expect(screen.getByTestId('content').textContent).toBe('false');
  });

  it('re-enables content when logo is set back', () => {
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-1'));
    fireEvent.click(screen.getByTestId('clear-logo'));
    expect(screen.getByTestId('content').textContent).toBe('false');
    fireEvent.click(screen.getByTestId('set-logo'));
    expect(screen.getByTestId('content').textContent).toBe('true');
  });

  it('enables content immediately for template without logo (template 2)', () => {
    // Template 2 has hasLogo: false
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-2'));
    expect(screen.getByTestId('content').textContent).toBe('true');
  });

  it('enables targeting when all content fields are filled by defaults', () => {
    // Template 5 has minimal fields and all are pre-filled
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-5'));
    expect(screen.getByTestId('targeting').textContent).toBe('true');
  });

  it('disables targeting when title is cleared', () => {
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-5'));
    expect(screen.getByTestId('targeting').textContent).toBe('true');
    fireEvent.click(screen.getByTestId('clear-title'));
    expect(screen.getByTestId('targeting').textContent).toBe('false');
  });

  it('settings always equals targeting (both enabled or both disabled)', () => {
    render(<TestHarness />);
    fireEvent.click(screen.getByTestId('select-template-5'));
    expect(screen.getByTestId('settings').textContent).toBe(
      screen.getByTestId('targeting').textContent
    );
    fireEvent.click(screen.getByTestId('clear-title'));
    expect(screen.getByTestId('settings').textContent).toBe(
      screen.getByTestId('targeting').textContent
    );
  });

  it('revalidates correctly when switching templates', () => {
    render(<TestHarness />);
    // Select template 1 (has logo, defaults provide it)
    fireEvent.click(screen.getByTestId('select-template-1'));
    expect(screen.getByTestId('content').textContent).toBe('true');

    // Switch to template 2 (no logo required)
    fireEvent.click(screen.getByTestId('select-template-2'));
    expect(screen.getByTestId('content').textContent).toBe('true');
    expect(screen.getByTestId('targeting').textContent).toBe('true');
  });
});
