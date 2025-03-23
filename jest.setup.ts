// File: jest.setup.ts
// Jest setup file with testing-library configuration

import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";

// Configure Testing Library
configure({
  asyncUtilTimeout: 5000,
  computedStyleSupportsPseudoElements: false,
  defaultHidden: false,
  eventWrapper: (cb) => cb(),
  reactStrictMode: true,
  throwSuggestions: true,
});

// Silence React 18 Testing Library warnings about act()
const originalError = console.error;
jest.spyOn(console, "error").mockImplementation((...args) => {
  const message = typeof args[0] === "string" ? args[0] : "";
  if (message.includes("ReactDOMTestUtils.act")) {
    return;
  }
  originalError.apply(console, args);
});

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Add TextEncoder and TextDecoder for pg module
if (typeof global.TextEncoder === "undefined") {
  import("util").then(({ TextEncoder, TextDecoder }) => {
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
  });
}
