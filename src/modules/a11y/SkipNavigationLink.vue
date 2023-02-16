<script setup lang="ts"></script>

<template>
	<a id="skip-navigation-link" href="#main-content" class="p">
		{{ $t("nav.skipNavigation") }}
	</a>
</template>

<style lang="scss" scoped>
a {
	@include keyboard-focus;
	position: absolute;
	top: 5px;
	left: 5px;
	z-index: 1;
	border-radius: 0.2em;
	padding: 0.4em 0.8em;

	&:not(:focus-visible) {
		opacity: 0;
		left: -9999px;
		top: -9999px;
	}
}
</style>
