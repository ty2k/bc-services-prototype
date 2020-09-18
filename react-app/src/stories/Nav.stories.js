import React from "react";

import { Nav } from "./Nav";

export default {
  title: "Services Page Prototype/Nav",
  component: Nav,
  argTypes: {
    dark: { control: "boolean" },
  },
};

const Template = (args) => <Nav {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  links: ['Services', 'Topics', 'News', 'Public Engagements', 'Jobs & MyHR', 'Get Help']
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  links: ['Services', 'Topics', 'News', 'Public Engagements', 'Jobs & MyHR', 'Get Help']
};
