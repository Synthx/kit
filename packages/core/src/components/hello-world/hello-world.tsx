import { Component, type ComponentInterface, h } from "@stencil/core";

@Component({
	tag: "kit-hello-world",
	styleUrl: "hello-world.scss",
	shadow: true,
})
export class KitHelloWorld implements ComponentInterface {
	render() {
		return <span class="kit-hello-world">Hello World !</span>;
	}
}
