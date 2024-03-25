import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
	title: "Component / Hello World",
	component: "kit-hello-world",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => html`<kit-hello-world />`,
};
