<script setup lang="ts">
import { FeatureSet } from "~/stores/useFeatures";

defineProps<{
	feature: FeatureSet;
}>();
</script>

<template>
	<article>
		<div class="icons">
			<span v-for="{ name, label } in feature.icons" :key="name" class="icon">
				<Icon :name="name" />
				{{ label }}
			</span>
		</div>
		<h2>{{ feature.title }}</h2>
		<p>{{ feature.description }}</p>
	</article>
</template>

<style lang="scss" scoped>
article {
	max-width: 42ch;
	position: relative;
	border-radius: 1rem;
	padding: 2rem;
	background: linear-gradient(to bottom, rgba(46, 46, 56, 0.25), rgba(46, 46, 56, 0.15));

	&::before {
		content: "";
		position: absolute;
		border-radius: inherit;
		inset: 0;
		padding: 1px;
		background: linear-gradient(to bottom, rgba(white, 12%), rgba(black, 20%));
		-webkit-mask: linear-gradient(white 0 0) content-box, linear-gradient(white 0 0);
		mask-composite: exclude;
		pointer-events: none;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--font-color-strong);
		margin-block: 1rem 0.5rem;
	}

	animation: fadeIn 300ms ease-out both;

	@include motion-no-preference {
		animation-name: slideIn;
	}

	@for $i from 1 to 7 {
		&:nth-child(#{$i}) {
			animation-delay: ($i - 1) * 50ms;
		}
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
}

@keyframes slideIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
}

.icons {
	display: flex;
	gap: 1rem;
}

.icon {
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.75rem;
	color: var(--font-color-light);
	line-height: 1;

	svg {
		width: 2rem;
		height: auto;
	}
}
</style>
