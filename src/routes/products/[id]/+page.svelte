<script>
	import { page } from '$app/stores';
	import SpecificProduct from '$lib/home/SpecificProduct.svelte';
	$: productNo = Number($page.params.id);
</script>

<main>
	<SpecificProduct {productNo} />
</main>
