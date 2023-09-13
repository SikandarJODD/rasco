<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import BgImg from '$lib/photos/testimonial/bg.png';
	let hero = {
		img: BgImg,
		title: 'Live Today, <br/> Build Your Style',
		subtext: 'Live in your own way, and make your own style.',
		btn1: 'Download',
		btn2: 'Write Your Today'
	};
</script>

<div class="bg-gray-900 relative">
	<div class="relative h-[480px] isolate">
		<img
			src={hero.img}
			alt="Background"
			class="absolute inset-0 -z-10 h-full w-full object-cover opacity-90 sm:opacity-80 md:contrast-125"
		/>
		<div class="mx-auto md:mx-32 max-w-lg py-20 sm:py-10 lg:pt-44">
			<div
				class="text-center md:text-left md:border-white md:border md:p-4  md:bg-gray-800/30 py-10 md:backdrop-blur-sm rounded-lg shadow-xl"
			>
				<h1
					class="text-4xl font-bold tracking-tight text-white drop-shadow-lg shadow-gray-600 sm:text-6xl"
				>
					{@html hero.title}
				</h1>
				<p class="mt-3 text-lg leading-8 text-gray-200">
					{hero.subtext}
				</p>
				<div
					class="mt-3 flex items-center justify-center md:justify-start md:gap-x-6 flex-wrap gap-3"
				>
					<Button size="lg" variant="outline" class="bg-transparent text-white">Buy Now</Button>
				</div>
			</div>
		</div>
	</div>
</div>
