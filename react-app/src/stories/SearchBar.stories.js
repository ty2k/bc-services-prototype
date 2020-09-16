import React from "react";

import { SearchBar } from "./SearchBar";

export default {
  title: "Example/SearchBar",
  component: SearchBar,
  argTypes: {
    icon: { control: "boolean" },
  },
};

const Template = (args) => <SearchBar {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: true
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  icon: false
};
