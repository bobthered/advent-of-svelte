<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { Button, Header, Icon, Nav } from '$components';
	import { Bars2, XMark } from '$icons';
	import { theme } from '$stores';
	import '../app.pcss';

	// props (internal)
	const nav: { isOpen?: boolean | undefined; toggle?: () => boolean } = {};
</script>

<div class="flex max-h-[100dvh] min-h-[100dvh] flex-col lg:flex-row">
	<Header class="order-2 lg:order-none">
		<Button
			class={twMerge($theme.buttonIcon, $theme.buttonTransparent, 'z-[2] lg:hidden')}
			on:click={nav.toggle}
		>
			<Icon src={nav?.isOpen ? XMark : Bars2} />
		</Button>
		<Nav bind:isOpen={nav.isOpen} bind:toggle={nav.toggle} />
	</Header>
	<main class="flex flex-grow flex-col overflow-auto">
		<slot />
	</main>
</div>
