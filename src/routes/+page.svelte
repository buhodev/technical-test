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
		imageAlt="Cost Management Feature"
		><slot>
			<ul class="flex flex-col gap-2 text-gray-300 md:gap-3">
				<li class="relative pl-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="absolute left-0 top-0.5 size-5 text-secondary-400"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg> Track and analyze your Kubernetes spending
				</li>
				<li class="relative pl-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="absolute left-0 top-0.5 size-5 text-secondary-400"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg> Identify and eliminate cost inefficiencies
				</li>
				<li class="relative pl-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="absolute left-0 top-0.5 size-5 text-secondary-400"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg> Set and enforce cost budgets
				</li>
				<li class="relative pl-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="absolute left-0 top-0.5 size-5 text-secondary-400"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg> Allocate costs to specific teams or projects
				</li>
				<li class="relative pl-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="absolute left-0 top-0.5 size-5 text-secondary-400"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg> Forecast future cloud expenses
				</li>
			</ul></slot
		></Feature
	>
</main>
