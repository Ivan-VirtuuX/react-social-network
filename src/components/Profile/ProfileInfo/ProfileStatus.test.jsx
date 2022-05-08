import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="VirtuuX" />);

    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="VirtuuX" />);

    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="VirtuuX" />);

    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("VirtuuX");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="VirtuuX" />);

    const root = component.root;

    let span = root.findByType("span");
    span.props.onDoubleClick();

    let input = root.findByType("input");

    expect(input.props.value).toBe("VirtuuX");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="VirtuuX" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
