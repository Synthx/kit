import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
	title: "Component / Action / Spin Button",
	component: "kit-spin-button",
	tags: ["autodocs"],
	argTypes: {},
	args: {},
	render: () => html`<kit-spin-button />`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
