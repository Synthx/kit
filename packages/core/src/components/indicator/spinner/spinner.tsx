import { Component, type ComponentInterface, Prop, h } from "@stencil/core";

@Component({
	tag: "kit-spinner",
	styleUrl: "spinner.scss",
	shadow: true,
})
export class KitSpinner implements ComponentInterface {
	@Prop({ reflect: true })
	size: "small" | "medium" | "large" = "medium";

	render() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-16 -16 32 32"
				width="100%"
				height="100%"
				focusable="false"
				aria-hidden="true"
			>
				<circle r="9" />
				<circle r="9" />
			</svg>
		);
	}
}
