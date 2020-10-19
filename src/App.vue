<template>
	<div id="app">
		<section class="hero is-success is-fullheight">
			<app-header></app-header>

			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title">Title</h1>
					<h2 class="subtitle">Subtitle</h2>
				</div>
			</div>

			<app-footer></app-footer>
		</section>
	</div>
</template>

<script>
	import AppHeader from "./components/AppHeader.vue";
	import AppFooter from "./components/AppFooter.vue"

	export default {
		name: "App",
		components: {
			AppHeader
			, AppFooter
		}
	};
</script>

<style>
	body {
		background: #eee;
	}
</style>
