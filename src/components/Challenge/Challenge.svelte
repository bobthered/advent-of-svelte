<script lang="ts">
	import { Button, H1, Radio } from '$components';

	// props (external)
	export let number: Number = 1;
	export let title: String = 'Title';

	// props (internal)
	let tab: 'challenge' | 'solution' = 'challenge';
</script>

<div class="flex flex-col space-y-3 p-6">
	<H1 class="text-[1.5rem] lg:text-[2.25rem]">Day {number} - {title}</H1>
	{#if tab === 'challenge'}
		<div class="flex flex-col items-start space-y-3">
			<slot />
			<Button on:click={() => (tab = 'solution')}>View Solution</Button>
		</div>
	{/if}
	{#if tab === 'solution'}
		<div class="flex flex-col items-start space-y-3">
			<slot name="solution" />
			<Button on:click={() => (tab = 'challenge')}>View Challenge</Button>
		</div>
	{/if}
</div>
