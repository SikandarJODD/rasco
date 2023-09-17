<script>
	import Jeans from '$lib/photos/jeans/the flame warrior/hades1.png';
	import Jackets from '$lib/photos/jeans/madusa/jacket.jpeg';
	import Accessories from '$lib/photos/jeans/warrier skull/accessoriess.jpeg';
	import { productsInfo } from '$lib';
	let productStuff = [
		{
			title: 'Jeans',
			img: Jeans,
			align: 'object-bottom'
		},
		{
			title: 'Jackets',
			img: Jackets,
			align: 'object-center'
		}
		// {
		// 	title: 'Accessories',
		// 	img: Accessories,
		// 	align: 'object-top'
		// }
	];
</script>

<div class=" py-6 sm:py-8 lg:py-12 md:w-[80%]">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<!-- text - start -->
		<div class="mb-6 md:mb-12">
			<h2 class="mb-4 text-center text-3xl font-bold text-gray-900 md:mb-6 lg:text-5xl">
				Styles & Collections
			</h2>
			<!-- <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p> -->
		</div>
		<!-- text - end -->

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8">
			<!-- image - start -->
			{#each productStuff as item}
				<a
					href="/"
					class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96 shadow-gray-500"
				>
					<img
						src={item.img}
						loading="lazy"
						alt={item.title}
						class="absolute inset-0 h-full w-full object-cover {item.align} transition duration-300 group-hover:scale-150"
					/>

					<div
						class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
					/>

					<span
						class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-800 px-2 py-1 text-xs text-white backdrop-blur md:px-3 md:text-sm"
						>{item.title}</span
					>
				</a>
			{/each}
			<!-- image - end -->
		</div>
	</div>
</div>
