import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);

theme.set({
	button: 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-500/30',
	buttonError: 'bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:ring-red-500/30',
	buttonIcon: 'aspect-square',
	buttonSmall: 'px-2 py-1',
	buttonSuccess: 'bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:ring-green-500/30',
	buttonTransparent:
		'bg-transparent hover:bg-transparent focus:bg-transparent shadow-[inset] text-current',
	tr: 'dark:even:bg-[rgba(255,255,255,.05)] hover:bg-primary-500/10 hover:even:bg-primary-500/10'
});

export { theme };
