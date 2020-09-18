import React from "react";

import { ServiceHighlight } from "./ServiceHighlight";

export default {
  title: "Services Page Prototype/ServiceHighlight",
  component: ServiceHighlight,
  argTypes: {
    external: { control: "boolean" },
  },
};

const Template = (args) => <ServiceHighlight {...args} />;

export const InternalLink = Template.bind({});
ExternalLink.args = {
  external: true
};

export const ExternalLink = Template.bind({});
InternalLink.args = {
  external: false
};
