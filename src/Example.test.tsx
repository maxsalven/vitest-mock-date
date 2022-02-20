import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Example.stories";

const { Now } = composeStories(stories);

it("renders the current time with local mocks", async () => {
  render(<Now />);

  expect(screen.getByText("The date is 2017-01-01")).toBeInTheDocument();

  console.log(screen);
});
