<script lang="ts">
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	import { PortableText } from '@portabletext/svelte';
	import PortableTextImage from './PortableTextImage.svelte';

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