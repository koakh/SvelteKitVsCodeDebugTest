<script lang="ts">
	export let data;

  $: (console.log(data.message));
</script>

<h1>{data.message}</h1>