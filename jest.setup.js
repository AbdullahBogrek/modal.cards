import '@testing-library/jest-dom';

Element.prototype.scrollIntoView = jest.fn();

// Mock IntersectionObserver for components using it (e.g. HeroStats)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
