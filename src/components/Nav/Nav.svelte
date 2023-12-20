<script>
	import { Nav } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { A, Card, Overlay } from '$components';

	// props (external)
	export const close = () => (isOpen = false);
	export let isOpen = false;
	export const open = () => (isOpen = true);
	export const toggle = () => (isOpen = !isOpen);

	// props (internal)
	const dayCount = 0;

	// props (dyanmic)
	$: classes = twMerge(
		'fixed right-0 top-0 max-h-[100dvh] min-h-[100dvh] transition duration-200 min-w-[calc(100dvw_-_1.5rem)]',
		isOpen ? 'translate-x-0' : 'translate-x-full',
		'lg:relative lg:top-auto lg:right-auto lg:min-w-0 lg:translate-x-0'
	);
</script>

<Overlay
	class={isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}
	on:click={close}
/>
<Nav class={classes}>
	<slot>
		<Card class="flex-grow rounded-none p-0">
			{#each [...Array(dayCount)] as _, i}
				<A
					class={twMerge('px-6 py-2 shadow-[] transition duration-200 hover:bg-primary-500/10')}
					href="/2023/{i + 1}">Day {i + 1}</A
				>
			{/each}
		</Card>
	</slot>
</Nav>
