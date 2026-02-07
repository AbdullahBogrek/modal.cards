import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TranslationProvider, useTranslation } from '../../contexts/TranslationContext';

function TestComponent() {
  const { locale, setLocale, t } = useTranslation();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="translated">{t('header.howItWorks')}</span>
      <button onClick={() => setLocale('tr')}>Switch to TR</button>
      <button onClick={() => setLocale('en')}>Switch to EN</button>
    </div>
  );
}

describe('TranslationContext', () => {
  it('defaults to English locale', () => {
    render(
      <TranslationProvider>
        <TestComponent />
      </TranslationProvider>
    );
    expect(screen.getByTestId('locale')).toHaveTextContent('en');
  });

  it('translates keys correctly in English', () => {
    render(
      <TranslationProvider>
        <TestComponent />
      </TranslationProvider>
    );
    expect(screen.getByTestId('translated')).toHaveTextContent('How It Works');
  });

  it('switches to Turkish locale', async () => {
    const user = userEvent.setup();
    render(
      <TranslationProvider>
        <TestComponent />
      </TranslationProvider>
    );

    await user.click(screen.getByText('Switch to TR'));

    expect(screen.getByTestId('locale')).toHaveTextContent('tr');
    expect(screen.getByTestId('translated')).toHaveTextContent('Nasıl Çalışır');
  });

  it('switches back to English from Turkish', async () => {
    const user = userEvent.setup();
    render(
      <TranslationProvider>
        <TestComponent />
      </TranslationProvider>
    );

    await user.click(screen.getByText('Switch to TR'));
    await user.click(screen.getByText('Switch to EN'));

    expect(screen.getByTestId('locale')).toHaveTextContent('en');
    expect(screen.getByTestId('translated')).toHaveTextContent('How It Works');
  });

  it('returns the key itself for missing translations', () => {
    function MissingKeyComponent() {
      const { t } = useTranslation();
      return <span data-testid="missing">{t('nonexistent.key')}</span>;
    }

    render(
      <TranslationProvider>
        <MissingKeyComponent />
      </TranslationProvider>
    );
    expect(screen.getByTestId('missing')).toHaveTextContent('nonexistent.key');
  });
});
