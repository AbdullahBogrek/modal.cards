import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalCustomizationContextProvider, useModalCustomizationContext } from '../../contexts/ModalCustomizationContext';

function TestConsumer() {
  const ctx = useModalCustomizationContext();
  return (
    <div>
      <span data-testid="size">{ctx.size}</span>
      <span data-testid="position">{ctx.position}</span>
      <span data-testid="textColor">{ctx.textColor}</span>
      <span data-testid="buttonColor">{ctx.buttonColor}</span>
      <span data-testid="backgroundColor">{ctx.backgroundColor}</span>
      <span data-testid="title">{ctx.title}</span>
      <span data-testid="subtitle">{ctx.subtitle}</span>
      <span data-testid="button1">{ctx.button1}</span>
      <span data-testid="button2">{ctx.button2}</span>
      <span data-testid="webhookUrl">{ctx.webhookUrl}</span>
      <span data-testid="browserLanguage">{JSON.stringify(ctx.browserLanguage)}</span>
      <span data-testid="bodyText">{ctx.bodyText}</span>
      <span data-testid="inputPlaceholder1">{ctx.inputPlaceholder1}</span>
      <span data-testid="linkText2">{ctx.linkText2}</span>
      <button onClick={() => ctx.setSize('lg')}>setSize</button>
      <button onClick={() => ctx.setPosition('top-10_left-10')}>setPosition</button>
      <button onClick={() => ctx.setTextColor('#FF0000')}>setTextColor</button>
      <button onClick={() => ctx.setTitle('New Title')}>setTitle</button>
      <button onClick={() => ctx.setWebhookUrl('https://example.com')}>setWebhookUrl</button>
      <button onClick={() => ctx.setBrowserLanguage(['en', 'tr'])}>setBrowserLanguage</button>
      <button onClick={() => ctx.loadTemplateDefaults(1)}>loadTemplate1</button>
      <button onClick={() => ctx.loadTemplateDefaults(7)}>loadTemplate7</button>
    </div>
  );
}

describe('ModalCustomizationContext', () => {
  it('provides correct BASE_DEFAULTS', () => {
    render(
      <ModalCustomizationContextProvider>
        <TestConsumer />
      </ModalCustomizationContextProvider>
    );
    expect(screen.getByTestId('size')).toHaveTextContent('md');
    expect(screen.getByTestId('position')).toHaveTextContent('center');
    expect(screen.getByTestId('textColor')).toHaveTextContent('#000000');
    expect(screen.getByTestId('buttonColor')).toHaveTextContent('#000000');
    expect(screen.getByTestId('backgroundColor')).toHaveTextContent('#FFFFFF');
    expect(screen.getByTestId('title')).toHaveTextContent('');
    expect(screen.getByTestId('subtitle')).toHaveTextContent('');
    expect(screen.getByTestId('button1')).toHaveTextContent('');
    expect(screen.getByTestId('button2')).toHaveTextContent('');
    expect(screen.getByTestId('webhookUrl')).toHaveTextContent('');
    expect(screen.getByTestId('browserLanguage')).toHaveTextContent('[]');
  });

  it('loadTemplateDefaults(1) loads template 1 values', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('loadTemplate1'));
    expect(screen.getByTestId('title')).toHaveTextContent('Security Code');
    expect(screen.getByTestId('subtitle')).toHaveTextContent('This code expires in 24 hours');
    expect(screen.getByTestId('button1')).toHaveTextContent('Cancel');
    expect(screen.getByTestId('button2')).toHaveTextContent('Continue');
    expect(screen.getByTestId('inputPlaceholder1')).toHaveTextContent('Code');
  });

  it('loadTemplateDefaults(7) loads dark theme template', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('loadTemplate7'));
    expect(screen.getByTestId('backgroundColor')).toHaveTextContent('#F97316');
    expect(screen.getByTestId('textColor')).toHaveTextContent('#FFFFFF');
    expect(screen.getByTestId('buttonColor')).toHaveTextContent('#FFFFFF');
    expect(screen.getByTestId('title')).toHaveTextContent('Hi, stranger');
  });

  it('updates size', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('setSize'));
    expect(screen.getByTestId('size')).toHaveTextContent('lg');
  });

  it('updates position', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('setPosition'));
    expect(screen.getByTestId('position')).toHaveTextContent('top-10_left-10');
  });

  it('updates text color', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('setTextColor'));
    expect(screen.getByTestId('textColor')).toHaveTextContent('#FF0000');
  });

  it('updates title', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('setTitle'));
    expect(screen.getByTestId('title')).toHaveTextContent('New Title');
  });

  it('updates webhook URL', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('setWebhookUrl'));
    expect(screen.getByTestId('webhookUrl')).toHaveTextContent('https://example.com');
  });

  it('updates browser language array', async () => {
    const user = userEvent.setup();
    render(<ModalCustomizationContextProvider><TestConsumer /></ModalCustomizationContextProvider>);
    await user.click(screen.getByText('setBrowserLanguage'));
    expect(screen.getByTestId('browserLanguage')).toHaveTextContent('["en","tr"]');
  });
});
