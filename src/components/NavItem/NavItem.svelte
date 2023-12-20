<script>
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	import { A } from '$components';

	// props (external)
	export let href = '';
</script>

<A
	class={twMerge(
		'whitespace-nowrap px-6 py-2 shadow-[] transition duration-200 hover:bg-primary-500/10',
		$page.url.pathname === href
			? 'shadow-[inset_2px_0_#ff3e00] hover:shadow-[inset_2px_0_#ff3e00]'
			: 'shadow-[inset]'
	)}
	{href}
>
	<slot />
</A>
