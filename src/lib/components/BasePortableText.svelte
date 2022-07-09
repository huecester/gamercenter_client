<script lang="ts">
	import PortableTextImage from './PortableTextImage.svelte';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { PortableText } from '@portabletext/svelte';

	export let value: InputValue | undefined;
</script>

<PortableText
	{value}
	components={{
		types: {
			image: PortableTextImage,
		},
	}}
/>