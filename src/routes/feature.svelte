<script>
	export let title;
	export let description;
	export let ctaText;
	export let ctaLink;
	export let imageSrc;
	export let imageAlt;
</script>

<section>
	<div
		class="pointer-events-none absolute inset-0 h-full w-full blur-3xl"
		style="background:linear-gradient(202.72deg, rgba(237, 78, 139, 0.1) 14.76%, rgba(152, 103, 240, 0.09) 34.37%, rgba(152, 103, 240, 0) 86.62%, rgba(0, 0, 255, 0.1) 100%)"
	></div>
	<div class="z-10 m-auto flex max-w-7xl items-center gap-8 px-6 py-20 max-md:flex-col lg:px-12">
		<div class="flex basis-3/5 flex-col gap-3 md:gap-6">
			<h2 class="text-2xl font-bold text-white xl:text-4xl">{title}</h2>
			<p class="text-pretty text-base text-gray-300 xl:text-xl">{description}</p>
			<slot />
			<div class="flex pt-4">
				<a href={ctaLink} class="btn">{ctaText}</a>
			</div>
		</div>
		<div class="flex max-w-xl justify-end">
			<img src={imageSrc} alt={imageAlt} class="max-w-3xl max-xl:w-full" />
		</div>
	</div>
</section>
