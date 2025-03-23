import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

// Mock the required components
jest.mock("../../app/components/HomeSection", () => {
  return function MockHomeSection() {
    return <div>Home Section</div>;
  };
});

jest.mock("../../app/components/AboutSection", () => {
  return function MockAboutSection() {
    return <div>About Section</div>;
  };
});

describe("Home Page", () => {
  it("renders the main container with correct classes", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toHaveClass(
      "relative",
      "min-h-screen",
      "flex",
      "flex-col",
      "-mt-16"
    );
  });

  it("renders the HomeSection", () => {
    render(<Home />);
    const homeSection = screen.getByText(/home section/i);
    expect(homeSection).toBeInTheDocument();
  });

  it("renders the AboutSection", () => {
    render(<Home />);
    const aboutSection = screen.getByText(/about section/i);
    expect(aboutSection).toBeInTheDocument();
  });

  it("renders sections in correct order", () => {
    render(<Home />);
    const sections = screen.getAllByText(/section$/i);
    expect(sections).toHaveLength(2);
    expect(sections[0]).toHaveTextContent(/home section/i);
    expect(sections[1]).toHaveTextContent(/about section/i);
  });

  it("wraps sections in a flex container", () => {
    render(<Home />);
    const flexContainer = screen.getByRole("main").firstChild as HTMLElement;
    expect(flexContainer).toHaveClass("flex-1");
  });
});
