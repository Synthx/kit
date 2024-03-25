import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
	title: "Component / Indicator / Spinner",
	component: "kit-spinner",
	tags: ["autodocs"],
	argTypes: {
		size: {
			options: ["small", "medium", "large"],
			defaultValue: "medium",
			control: { type: "select" },
		},
	},
	args: {
		size: "medium",
	},
	render: ({ size }) => html`<kit-spinner size=${size} />`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Size: Story = {
	render: () => html`<kit-spinner size="large" />`,
};
