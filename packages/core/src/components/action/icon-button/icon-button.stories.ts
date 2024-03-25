import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
	title: "Component / Action / Icon Button",
	component: "kit-icon-button",
	tags: ["autodocs"],
	argTypes: {
		variant: {
			options: ["filled", "outlined"],
			defaultValue: "filled",
			control: { type: "select" },
		},
		shape: {
			options: ["rounded", "square", "circle"],
			defaultValue: "circle",
			control: { type: "select" },
		},
		type: {
			options: ["button", "submit", "reset"],
			defaultValue: "button",
			control: { type: "select" },
		},
		disabled: {
			defaultValue: false,
			control: { type: "boolean" },
		},
	},
	args: {
		variant: "filled",
		shape: "circle",
		type: "button",
		disabled: false,
	},
	render: ({ variant, shape, type, disabled, loading }) =>
		html`<kit-icon-button variant=${variant} shape=${shape} type=${type} disabled=${disabled} loading=${loading}><kit-icon name="add" /></kit-icon-button>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variant: Story = {
	render: () =>
		html`<kit-icon-button variant="outlined"><kit-icon name="add" /></kit-icon-button>`,
};

export const Shape: Story = {
	render: () =>
		html`<kit-icon-button shape="rounded"><kit-icon name="add" /></kit-icon-button>`,
};

export const Disabled: Story = {
	render: () =>
		html`<kit-icon-button disabled="true"><kit-icon name="add" /></kit-icon-button>`,
};
