<script>
	import Feature from './feature.svelte';
</script>

<main class="flex h-full items-center justify-center bg-surface-900">
	<Feature
		title="Optimize Your Cloud Spend with Granular Cost Management"
		description="Gain complete visibility and control over your Kubernetes costs with our comprehensive cost management features. Our platform provides you with the tools you need to:"
		ctaText="Book a free demo"
		ctaLink="#"
		imageSrc="/cost-management-image.png"
		imageAlt=" Cost Management Feature"
	><slot>
		<ul class="flex flex-col gap-2 text-gray-300 md:gap-3">
			<li>Track and analyze your Kubernetes spending</li>
			<li>Identify and eliminate cost inefficiencies</li>
			<li>Set and enforce cost budgets</li>
			<li>Allocate costs to specific teams or projects</li>
			<li>Forecast future cloud expenses</li>
		</ul></slot></Feature
	>
</main>
