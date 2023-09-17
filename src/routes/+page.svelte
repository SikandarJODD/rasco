<script>
	import FeaturesProducts from './../lib/home/FeaturesProducts.svelte';
	import Features from '$lib/home/Features.svelte';
	import Hero from '$lib/home/Hero.svelte';
</script>

<Hero />
<div class="md:px-28 bg-white md:bg-[#e5fdfe] border-b border-slate-800 flex justify-center">
	<Features />
</div>
<FeaturesProducts />
