<script>
	import Feature from './feature.svelte';
	import CheckIcon from './checkIcon.svelte';
</script>

<main class="flex h-full items-center justify-center bg-surface-900">
	<Feature
		title="Optimize Your Cloud Spend with Granular Cost Management"
		description="Gain complete visibility and control over your Kubernetes costs with our comprehensive cost management features. Our platform provides you with the tools you need to:"
		ctaText="Book a free demo"
		ctaLink="#"
		imageSrc="/cost-management-image.png"
		imageAlt="Cost Management Feature"
	><slot>
		<ul class="flex flex-col gap-2 text-gray-300 md:gap-3">
			<li class="pl-8 relative "> <CheckIcon class="absolute left-0 top-0.5 size-5 text-secondary-400"/> Track and analyze your Kubernetes spending</li>
			<li class="pl-8 relative"> <CheckIcon class="absolute left-0 top-0.5 size-5 text-secondary-400"/>  Identify and eliminate cost inefficiencies</li>
			<li class="pl-8 relative"><CheckIcon class="absolute left-0 top-0.5 size-5 text-secondary-400"/>  Set and enforce cost budgets</li>
			<li class="pl-8 relative"><CheckIcon class="absolute left-0 top-0.5 size-5 text-secondary-400"/>  Allocate costs to specific teams or projects</li>
			<li class="pl-8 relative"><CheckIcon class="absolute left-0 top-0.5 size-5 text-secondary-400"/>  Forecast future cloud expenses</li>
		</ul></slot></Feature
	>
</main>