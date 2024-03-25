import {
	Component,
	type ComponentInterface,
	Event,
	type EventEmitter,
	Prop,
	h,
} from "@stencil/core";

@Component({
	tag: "kit-icon-button",
	styleUrl: "icon-button.scss",
	shadow: true,
})
export class KitIconButton implements ComponentInterface {
	@Prop({ reflect: true })
	variant: "filled" | "outlined" | "ghost" = "filled";

	@Prop({ reflect: true })
	shape: "rounded" | "square" | "circle" = "circle";

	@Prop({ reflect: true })
	type: "button" | "submit" | "reset" = "button";

	@Prop({ reflect: true })
	disabled = false;

	@Event()
	tapped: EventEmitter<MouseEvent>;

	private handleClick = (event: MouseEvent) => {
		if (!this.disabled) {
			this.tapped.emit(event);
		}
	};

	render() {
		const styles = {
			"kit-icon-button": true,
			[`kit-icon-button--variant-${this.variant}`]: true,
			[`kit-icon-button--shape-${this.shape}`]: true,
		};

		return (
			<button
				role="button"
				class={styles}
				disabled={this.disabled}
				type={this.type}
				aria-disabled={this.disabled}
				onClick={this.handleClick}
			>
				<slot />
			</button>
		);
	}
}
