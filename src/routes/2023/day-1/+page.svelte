<script lang="ts">
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import { twMerge } from 'tailwind-merge';
	import { Button, Challenge, Icon, Table, Tbody, Td, Th, Thead, Tr } from '$components';
	import { Minus, Plus } from 'sveltewind/components/icons';
	import { theme } from 'sveltewind/stores';

	// props (external)
	export let data;

	// props (internal)
	const example = `[
	{ "name": "Emma", "tally": 32 },
	{ "name": "Ethan", "tally": 14 },
	{ "name": "Isabella", "tally": 70 },
	{ "name": "Jayden", "tally": -16 },
	{ "name": "Isabella", "tally": -59 },
	{ "name": "Noah", "tally": 19 },
	{ "name": "Mia", "tally": -37 },
	{ "name": "Will", "tally": -20 },
	{ "name": "Sam", "tally": -91 },
	{ "name": "Brittney", "tally": -98 }
	...
]`;
</script>

<Challenge number={1} title="Naughty or Nice">
	<p>
		The Elves have been tirelessly creating presents all year round. They’re right on schedule, but
		today they’ve run into a big problem; the ancient system for tracking who’s been naughty or nice
		is out of commission. With the hundreds of thousands of letters from children piling up
		alongside their records of good and bad deeds, the Elves are in dire need of a modern solution.
	</p>

	<p>
		Your mission is to build a system for the elves, enabling them to input names and tally each
		childs deeds to keep track of whether they’re good or bad. You could even categorise these
		automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their
		record-keeping and have a backup of all the current data in JSON format. You’ll need to import
		this data into your newly developed system.
	</p>

	<p>Here is an example of what the Elves have stored:</p>
	<Highlight code={example} language={typescript} />
	<Table slot="solution">
		<Thead>
			<Th>Name</Th>
			<Th>Tally</Th>
			<Th>Naughty or Nice</Th>
			<Th>Actions</Th>
		</Thead>
		<Tbody>
			{#each data.data as { name, tally }}
				{@const naughtyOrNice = tally >= 0 ? 'Nice' : 'Naughty'}
				<Tr>
					<Td>{name}</Td>
					<Td>{tally}</Td>
					<Td>{naughtyOrNice}</Td>
					<Td class="py-[.375rem]">
						<div class="flex space-x-2">
							<Button
								class={twMerge($theme.buttonIcon, $theme.buttonSmall, $theme.buttonError)}
								on:click={() => (tally = tally - 1)}
							>
								<Icon class="h-[1.25rem] w-[1.25rem]" src={Minus} />
							</Button>
							<Button
								class={twMerge($theme.buttonIcon, $theme.buttonSmall, $theme.buttonSuccess)}
								on:click={() => (tally = tally + 1)}
							>
								<Icon class="h-[1.25rem] w-[1.25rem]" src={Plus} />
							</Button>
						</div>
					</Td>
				</Tr>
			{/each}
		</Tbody>
	</Table>
</Challenge>
