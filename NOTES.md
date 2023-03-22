# NOTES

- [r/sveltejs - Enable VS Code breakpoints/debugging for Sveltekit server-side code with this](https://www.reddit.com/r/sveltejs/comments/11hsz5o/enable_vs_code_breakpointsdebugging_for_sveltekit/?utm_source=share&utm_medium=web2x&context=3&xpromo_edp=enabled)

## Tutorial

```shell
$ npm create svelte@latest my-app
# init repo
$ git init
$ git add .
$ git commit -am "first commit"
# add @vavite/node-loader
$ pnpm add -D @vavite/node-loader
```

edit `vite.config.ts` as follows:

```ts
// added
import { nodeLoaderPlugin } from '@vavite/node-loader/plugin';

export default defineConfig({
	plugins: [
		sveltekit(),
		// added
		nodeLoaderPlugin()
	]
});
```

Add the following to the scripts section of `package.json` `"debug": "vavite-loader vite dev"`

create a new **Run and Debug Configuration** using the npm template, using command run and script debug (and argument `--host` if you want to reach the dev server from anything other than localhost)

```json
{
	"version": "0.2.0",
	"configurations": [
		{
      "name": "Launch via NPM",
 			"type": "node",			
			"request": "launch",
			"runtimeExecutable": "npm",
			"runtimeArgs": [
        "run-script", 
        "debug",
        "--host",
        "--preserve-symlinks"
      ],
			"skipFiles": ["<node_internals>/**"]
		}
	]
}
```

Now simply clicking the Run 'Debug' icon brings the debugger to life

change to `Debug console`
