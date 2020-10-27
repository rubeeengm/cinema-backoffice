<template>
	<div id="app">
		<section class="hero is-success is-fullheight">
			<app-header></app-header>

			<div class="hero-body">
				<div class="container">
					<router-view></router-view>
				</div>
			</div>

			<app-footer></app-footer>
		</section>
	</div>
</template>

<script>
	import AppHeader from "./components/AppHeader.vue";
	import AppFooter from "./components/AppFooter.vue";

	export default {
		name: "App"
		, components: {
			AppHeader
			, AppFooter
		}
	};
</script>

<style>
	body {
		background: #FF5A5F;
	}
</style>
