import { angularOutputTarget } from "@stencil/angular-output-target";
import type { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
	namespace: "core",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "dist-custom-elements",
			dir: "components",
		},
		angularOutputTarget({
			componentCorePackage: "@jetpinpin/kit-core",
			outputType: "standalone",
			directivesProxyFile:
				"../angular/projects/kit/src/lib/stencil-generated/proxies.ts",
		}),
	],
	plugins: [sass()],
	testing: {
		browserHeadless: "new",
	},
};
