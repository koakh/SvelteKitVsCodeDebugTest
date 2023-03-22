<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

  debugger;
  $: (console.log(`data: [${JSON.stringify(data, undefined, 2)}]`));
</script>

<h1>{data.message}</h1>