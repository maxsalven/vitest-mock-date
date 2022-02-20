import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Example } from "./Example";

export default {
  title: "Example",
  component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Now = Template.bind({});
Now.args = {
  date: new Date().toISOString().substring(0, 10),
};
