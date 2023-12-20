import { theme } from 'sveltewind/stores';
import { sveltewind } from 'sveltewind/themes';

theme.set(sveltewind);

theme.set({
	button: 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-primary-500/30',
	buttonIcon: 'px-3',
	buttonTransparent:
		'bg-transparent hover:bg-transparent focus:bg-transparent shadow-[inset] text-current'
});

export { theme };
