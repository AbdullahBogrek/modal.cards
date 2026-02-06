import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalLanguageContextProvider, useLanguageContext } from '../../contexts/LanguageContext';

function TestConsumer() {
  const { languageToggle, setLanguageToggle, languageSwitch, setLanguageSwitch } = useLanguageContext();
  return (
    <div>
      <span data-testid="toggle">{String(languageToggle)}</span>
      <span data-testid="switch">{String(languageSwitch)}</span>
      <button onClick={() => setLanguageToggle(true)}>openToggle</button>
      <button onClick={() => setLanguageSwitch(true)}>enableSwitch</button>
    </div>
  );
}

describe('LanguageContext', () => {
  it('provides default values (both false)', () => {
    render(
      <ModalLanguageContextProvider>
        <TestConsumer />
      </ModalLanguageContextProvider>
    );
    expect(screen.getByTestId('toggle')).toHaveTextContent('false');
    expect(screen.getByTestId('switch')).toHaveTextContent('false');
  });

  it('updates languageToggle', async () => {
    const user = userEvent.setup();
    render(
      <ModalLanguageContextProvider>
        <TestConsumer />
      </ModalLanguageContextProvider>
    );
    await user.click(screen.getByText('openToggle'));
    expect(screen.getByTestId('toggle')).toHaveTextContent('true');
  });

  it('updates languageSwitch', async () => {
    const user = userEvent.setup();
    render(
      <ModalLanguageContextProvider>
        <TestConsumer />
      </ModalLanguageContextProvider>
    );
    await user.click(screen.getByText('enableSwitch'));
    expect(screen.getByTestId('switch')).toHaveTextContent('true');
  });
});
