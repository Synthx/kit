import {
	Component,
	type ComponentInterface,
	Event,
	type EventEmitter,
	Listen,
	Prop,
	State,
	h,
} from "@stencil/core";

@Component({
	tag: "kit-spin-button",
	styleUrl: "spin-button.scss",
	shadow: true,
})
export class KitSpinButton implements ComponentInterface {
	@Prop()
	min?: number;

	@Prop()
	max?: number;

	@Prop()
	step = 1;

	@Event()
	counterChanged: EventEmitter<number>;

	@State()
	counter = 0;

	@Listen("keydown")
	onKeyDown(event: KeyboardEvent) {
		if (event.key === "ArrowUp") {
			event.preventDefault();
			this.increment();
		} else if (event.key === "ArrowDown") {
			event.preventDefault();
			this.decrement();
		}
	}

	private increment = (value?: number) => {
		this.counter += value ?? this.step;
		this.counterChanged.emit(this.counter);
	};

	private decrement = (value?: number) => {
		this.counter -= value ?? this.step;
		this.counterChanged.emit(this.counter);
	};

	render() {
		return (
			<div class="kit-spin-button" tabindex="0">
				<button
					class="kit-spin-button__action"
					tabindex="-1"
					type="button"
					onClick={() => this.decrement()}
				>
					<kit-icon name="subtract" />
				</button>
				<div class="kit-spin-button__label">{this.counter}</div>
				<button
					class="kit-spin-button__action"
					tabindex="-1"
					type="button"
					onClick={() => this.increment()}
				>
					<kit-icon name="add" />
				</button>
			</div>
		);
	}
}
