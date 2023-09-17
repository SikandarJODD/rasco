<script>
	import Jeans from '$lib/photos/jeans/the flame warrior/hades1.png';
	import Jackets from '$lib/photos/jeans/madusa/jacket.jpeg';
	import Accessories from '$lib/photos/jeans/warrier skull/accessoriess.jpeg';
	let productStuff = [
		{
			name: 'Flame Warrior',
			title: 'Jeans',
			img: Jeans,
			align: 'object-bottom',
			price: '3500'
		},
		{
			name: 'Madusa',
			title: 'Jackets',
			img: Jackets,
			align: 'object-top',
			price: '4500'
		},
		{
			name: 'Warrier Skull',
			title: 'Accessories',
			img: Accessories,
			align: 'object-top',
			price: '3500'
		},
		{
			name: 'Madusa',
			title: 'Jackets',
			img: Jackets,
			align: 'object-top',
			price: '4500'
		}
	];
</script>

<div class="bg-white py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<!-- text - start -->
		<div class="mb-10 md:mb-16">
			<h2 class="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-5xl capitalize">
				fashionable Products
			</h2>

			<p class="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg font-mono">
				We provide you with the best quality products at the best prices.
			</p>
		</div>
		<!-- text - end -->

		<div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
			{#each productStuff as item, index}
				<div class="group">
					<div
						class="px-3 py-3 border border-slate-400 rounded-xl hover:border-slate-900 transition-all duration-300 group-hover:shadow-xl shadow-gray-400"
					>
						<a
							href="products/{index}"
							class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
						>
							<img
								src={item.img}
								loading="lazy"
								alt={item.title}
								class="h-full w-full object-cover {item.align} transition duration-200 group-hover:scale-110"
							/>
						</a>

						<div class="flex items-start justify-between gap-2 px-2">
							<div class="flex flex-col">
								<a
									href="#"
									class="text-lg font-bold text-gray-700 transition duration-100 group-hover:text-gray-900 lg:text-xl"
									>{item.name}</a
								>
								<span class="text-gray-500">by RAS</span>
							</div>

							<div class="flex flex-col items-end">
								<span class="font-bold text-gray-600 group-hover:text-blue-600 lg:text-lg"
									>₹{item.price}.00</span
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
