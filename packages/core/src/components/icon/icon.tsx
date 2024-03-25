import { Component, type ComponentInterface, Prop, h } from "@stencil/core";
import { type Icon, iconData } from "./icon-data";

@Component({
	tag: "kit-icon",
	styleUrl: "icon.scss",
	shadow: true,
})
export class KitIcon implements ComponentInterface {
	@Prop({ reflect: true })
	name!: Icon;

	render() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				height="100%"
				width="100%"
				focusable="false"
				aria-hidden="true"
			>
				${iconData[this.name]}
			</svg>
		);
	}
}
