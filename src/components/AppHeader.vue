<template>
	<div class="hero-head">
		<header class="navbar">
			<div class="container">
				<div class="navbar-brand">
					<a href="https://proday.com" class="navbar-item">
						<img src="logo.png" alt="Proday" />
					</a>
				</div>

				<div class="navbar-menu">
					<div class="navbar-end">
						<div class="navbar item">
							<span class="icon">
								<i class="fa fa-user"></i>
							</span>
							<span>Hola, Ruben</span>
						</div>
						
						<span class="navbar-item">
							<button class="button is-danger is-inverted">
								<span class="icon">
									<i class="fa fa-sign-out-alt"></i>
								</span>
								<span>Desconectarse</span>
							</button>
						</span>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		name: "AppHeader"
		, components: {}
	};
</script>
