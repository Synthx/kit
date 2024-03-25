import type { Preview } from "@storybook/web-components";
import { defineCustomElements } from "../loader";
import "../src/styles/global.scss";

defineCustomElements();

const preview: Preview = {
	parameters: {
		controls: {
			expanded: true,
		},
		layout: "centered",
	},
};

export default preview;
