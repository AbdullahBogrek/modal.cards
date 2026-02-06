import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalContextProvider, useModalContext } from '../../contexts/ModalContext';

function TestConsumer() {
  const { id, setId, appearance, setAppearance, contentArea, setContentArea, targeting, setTargeting, settings, setSettings } = useModalContext();
  return (
    <div>
      <span data-testid="id">{id}</span>
      <span data-testid="appearance">{String(appearance)}</span>
      <span data-testid="contentArea">{String(contentArea)}</span>
      <span data-testid="targeting">{String(targeting)}</span>
      <span data-testid="settings">{String(settings)}</span>
      <button onClick={() => setId(5)}>setId</button>
      <button onClick={() => setAppearance(true)}>setAppearance</button>
      <button onClick={() => setContentArea(true)}>setContentArea</button>
      <button onClick={() => setTargeting(true)}>setTargeting</button>
      <button onClick={() => setSettings(true)}>setSettings</button>
    </div>
  );
}

describe('ModalContext', () => {
  it('provides default values', () => {
    render(
      <ModalContextProvider>
        <TestConsumer />
      </ModalContextProvider>
    );
    expect(screen.getByTestId('id')).toHaveTextContent('0');
    expect(screen.getByTestId('appearance')).toHaveTextContent('false');
    expect(screen.getByTestId('contentArea')).toHaveTextContent('false');
    expect(screen.getByTestId('targeting')).toHaveTextContent('false');
    expect(screen.getByTestId('settings')).toHaveTextContent('false');
  });

  it('updates id when setId is called', async () => {
    const user = userEvent.setup();
    render(
      <ModalContextProvider>
        <TestConsumer />
      </ModalContextProvider>
    );
    await user.click(screen.getByText('setId'));
    expect(screen.getByTestId('id')).toHaveTextContent('5');
  });

  it('updates appearance when setAppearance is called', async () => {
    const user = userEvent.setup();
    render(
      <ModalContextProvider>
        <TestConsumer />
      </ModalContextProvider>
    );
    await user.click(screen.getByText('setAppearance'));
    expect(screen.getByTestId('appearance')).toHaveTextContent('true');
  });

  it('updates all wizard step flags independently', async () => {
    const user = userEvent.setup();
    render(
      <ModalContextProvider>
        <TestConsumer />
      </ModalContextProvider>
    );
    await user.click(screen.getByText('setContentArea'));
    await user.click(screen.getByText('setTargeting'));
    await user.click(screen.getByText('setSettings'));
    expect(screen.getByTestId('contentArea')).toHaveTextContent('true');
    expect(screen.getByTestId('targeting')).toHaveTextContent('true');
    expect(screen.getByTestId('settings')).toHaveTextContent('true');
  });
});
