<script setup lang="ts">
const slots = useSlots();

const slotContent = computed(() => `${slots.default?.()[0].children}`);

const { copy, copied } = useClipboard();
</script>

<template>
	<code>
		<span>
			<Icon name="ic:round-chevron-right" class="chevron" />
			<slot />
		</span>

		<button @click="copy(slotContent)">
			<Icon
				:name="copied ? 'mdi:check-bold' : 'material-symbols:content-copy'"
				:class="{ copied }"
			/>
		</button>
	</code>
</template>

<style lang="scss" scoped>
code {
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--bg-bloc);
	border-radius: 0.5rem;
	border: 1px solid theme(grey, 70);
	font-size: 0.75rem;

	@include tablet-portrait-up {
		padding-inline: 0.5rem 2rem;
		font-size: 0.9rem;
	}
}

.chevron {
	height: 1.2rem;
	width: auto;
	color: lightgreen;
	margin-right: 0.5rem;
	transform: scaleY(0.9);
}

button {
	padding: 0.75rem;
	margin: -0.75rem;
	border-radius: 999px;
	display: inline-flex;

	svg.copied {
		color: lightgreen;
	}

	&:hover {
		background-color: var(--bg-button-hover);
	}
}
</style>
