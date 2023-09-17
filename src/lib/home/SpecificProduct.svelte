<script>
	import { fade } from 'svelte/transition';
	import { scale } from 'svelte/transition';
	export let productNo;
	import { productsInfo } from '$lib';
	import Button from '$lib/components/ui/button/button.svelte';
	export let pdata = $productsInfo[productNo];

	let select_img = 0;
	let selectSize = 2;

	let code = setInterval(() => {
		select_img++;
		if (select_img > $productsInfo[productNo].imgs.length - 1) {
			select_img = 0;
		}
	}, 3000);
</script>

<div class="bg-white py-6 sm:py-8 lg:py-5">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- images - start -->
			<div class="grid gap-4 lg:grid-cols-5">
				<div class="order-last flex gap-4 lg:order-none lg:flex-col">
					{#each pdata.imgs as item, i}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->

						<div
							class=" p-1 overflow-hidden rounded-lg bg-gray-100 {i === select_img
								? 'ring-1 ring-gray-700 '
								: ''} "
							on:click={() => {
								select_img = i;
								clearInterval(code);
							}}
						>
							<img
								src={item}
								alt="Product"
								class="h-28 md:h-[131px] w-full object-cover object-center rounded-lg"
							/>
						</div>
					{/each}
				</div>

				<div class="relative max-h-[37.4rem] overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
					{#key select_img}
						<img
							in:scale
							src={pdata.imgs[select_img]}
							alt="Product"
							class="h-80 md:h-full w-full object-cover object-center"
						/>
					{/key}

					<span
						class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white"
						>sale</span
					>
				</div>
			</div>
			<!-- images - end -->

			<!-- content - start -->
			<div class="md:py-8">
				<!-- name - start -->
				<div class="mb-2 md:mb-3">
					<span class="mb-0.5 inline-block text-gray-500">{pdata.brandName}</span>
					<h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
						{pdata.productName}
					</h2>
				</div>
				<!-- name - end -->

				<!-- rating - start -->
				<div class="mb-6 flex items-center gap-3 md:mb-10">
					<div class="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
						<span class="text-sm">{pdata.rating}</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
					</div>

					<span class="text-sm text-gray-500 transition duration-100"
						>{pdata.ratingCount} ratings</span
					>
				</div>
				<!-- rating - end -->

				<!-- size - start -->
				<div class="mb-8 md:mb-10">
					<span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base"
						>Size</span
					>

					<div class="flex flex-wrap gap-3">
						{#each pdata.sizes as item, i}
							<button
								on:click={() => (selectSize = i)}
								type="button"
								class="{selectSize === i
									? 'bg-indigo-500 text-white'
									: 'bg-white hover:bg-gray-100 text-gray-800 active:bg-gray-200'} flex h-8 w-12 items-center justify-center rounded-md border text-center text-sm font-semibold transition duration-100 outline-none"
								>{item}</button
							>
						{/each}
					</div>
				</div>
				<!-- size - end -->

				<!-- price - start -->
				<!-- use dollar : $ -->
				<div class="mb-4">
					<div class="flex items-end gap-2">
						<span class="text-xl font-bold text-gray-800 md:text-2xl">₹{pdata.price}.00</span>
						<span class="mb-0.5 text-red-500 line-through">₹{pdata.priceOld}.00</span>
					</div>

					<span class="text-sm text-gray-500">incl. VAT plus shipping</span>
				</div>
				<!-- price - end -->

				<!-- shipping notice - start -->
				<div class="mb-6 flex items-center gap-2 text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
						/>
					</svg>

					<span class="text-sm">2-4 day shipping</span>
				</div>
				<!-- shipping notice - end -->

				<!-- buttons - start -->
				<div class="flex gap-2.5">
					<!-- <a
						href="/"
						class="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
						>Add to Cart</a
					> -->

					<!-- <a
						href="/"
						class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
						>Buy Now</a
					> -->
					<Button size="lg" variant="outline" class="border-2 border-slate-900">Add to Cart</Button>
					<Button size="lg">Buy Now</Button>
				</div>
				<!-- buttons - end -->
			</div>
			<!-- content - end -->
		</div>
	</div>
</div>
