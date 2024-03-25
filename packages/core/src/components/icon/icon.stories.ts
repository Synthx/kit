import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { icons } from "./icon-data";

const meta: Meta = {
	title: "Component / Icon",
	component: "kit-icon",
	tags: ["autodocs"],
	argTypes: {
		name: {
			options: icons,
			control: { type: "select" },
		},
	},
	args: {
		name: "add",
	},
	render: ({ name }) => html`<kit-icon name=${name} />`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
