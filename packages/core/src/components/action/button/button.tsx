import {
	Component,
	type ComponentInterface,
	Event,
	type EventEmitter,
	Prop,
	h,
} from "@stencil/core";

@Component({
	tag: "kit-button",
	styleUrl: "button.scss",
	shadow: true,
})
export class KitButton implements ComponentInterface {
	@Prop({ reflect: true })
	variant: "filled" | "outlined" | "underline" | "ghost" = "filled";

	@Prop({ reflect: true })
	shape: "rounded" | "square" | "pill" = "rounded";

	@Prop({ reflect: true })
	type: "button" | "submit" | "reset" = "button";

	@Prop({ reflect: true })
	loading = false;

	@Prop({ reflect: true })
	disabled = false;

	@Event()
	tapped: EventEmitter<MouseEvent>;

	private handleClick = (event: MouseEvent) => {
		if (!this.disabled && !this.loading) {
			this.tapped.emit(event);
		}
	};

	render() {
		const styles = {
			"kit-button": true,
			"kit-button--loading": this.loading,
			[`kit-button--variant-${this.variant}`]: true,
			[`kit-button--shape-${this.shape}`]: true,
		};

		return (
			<button
				role="button"
				class={styles}
				disabled={this.disabled || this.loading}
				type={this.type}
				aria-disabled={this.disabled || this.loading}
				onClick={this.handleClick}
			>
				{this.loading && <kit-spinner size="small" />}
				<span class="label">
					<slot />
				</span>
			</button>
		);
	}
}
