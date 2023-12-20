<script>
	import { Nav } from 'sveltewind/components';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	import { A, Card, NavItem, Overlay } from '$components';

	// props (external)
	export const close = () => (isOpen = false);
	export let isOpen = false;
	export const open = () => (isOpen = true);
	export const toggle = () => (isOpen = !isOpen);

	// props (internal)
	const dayCount = 1;

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
		<Card class="flex-grow space-y-3 rounded-none p-0">
			<NavItem href="/">Home</NavItem>
			<div class="flex flex-col">
				<div class="px-6 py-3 font-semibold">2023</div>
				{#each [...Array(dayCount)] as _, i}
					{@const href = `/2023/day-${i + 1}`}
					<NavItem {href}>Day {i + 1}</NavItem>
				{/each}
			</div>
		</Card>
	</slot>
</Nav>
