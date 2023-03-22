# README

## Add Client Side Breakpoint

`src/routes/+page.svelte`

add breakpoint in line `$: (console.log(data.message));`

```svelte
<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: (console.log(data.message));
</script>

<h1>{data.message}</h1>
```

## Add Server Side Test Page

`src/routes/+page.server.ts`

add breakpoint in line `return { message };`

```ts
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const message = 'hello debugger';
  return { message };
}) satisfies PageServerLoad;
```

## Launch debugger

launch debug configuration with `F5` or click button

## Test Breakpoints

now open url `http://localhost:5173/`

now we should stop in both client side and server side breakpoints

![image](attachments/2023-03-22-00-12-51.png)

![image](attachments/2023-03-22-00-13-15.png)

at last svelte with debugger and source maps working in CCS and SSR