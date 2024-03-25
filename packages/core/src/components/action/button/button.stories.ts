import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
	title: "Component / Action / Button",
	component: "kit-button",
	tags: ["autodocs"],
	argTypes: {
		variant: {
			options: ["filled", "outlined"],
			defaultValue: "filled",
			control: { type: "select" },
		},
		shape: {
			options: ["rounded", "square", "pill"],
			defaultValue: "rounded",
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
		loading: {
			defaultValue: false,
			control: { type: "boolean" },
		},
	},
	args: {
		variant: "filled",
		shape: "rounded",
		type: "button",
		disabled: false,
		loading: false,
	},
	render: ({ variant, shape, type, disabled, loading }) =>
		html`<kit-button variant=${variant} shape=${shape} type=${type} disabled=${disabled} loading=${loading}>Click me</kit-button>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Variant: Story = {
	render: () => html`<kit-button variant="outlined">Click me</kit-button>`,
};

export const Shape: Story = {
	render: () => html`<kit-button shape="pill">Click me</kit-button>`,
};

export const Disabled: Story = {
	render: () => html`<kit-button disabled="true">Click me</kit-button>`,
};

export const Loading: Story = {
	render: () => html`<kit-button loading="true">Click me</kit-button>`,
};
