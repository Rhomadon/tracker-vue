<template>
	<nav id="sidebar" class="sidebar-wrapper">
		<div class="sidebar-brand">
			<div class="logo"></div>
		</div>
		<div class="sidebar-content">
			<div class="sidebar-menu">
				<ul>
					<li :class="{ active: isRouteActive('/') }">
						<RouterLink to="/" exact>
							<i class="icon-videocam"></i>
							<span class="menu-text">Live Tracking</span>
						</RouterLink>
					</li>
					<li class="sidebar-dropdown">
						<RouterLink to="">
							<i class="icon-settings_input_svideo"></i>
							<span class="menu-text">Dashboards</span>
						</RouterLink>
						<div class="sidebar-submenu">
							<ul>
								<li :class="{ active: isRouteActive('/dashboards/drivers') }">
									<RouterLink to="/dashboards/drivers">Drivers</RouterLink>
								</li>
								<li :class="{ active: isRouteActive('/dashboards/vehicles') }">
									<RouterLink to="/dashboards/vehicles">Vehicles</RouterLink>
								</li>
							</ul>
						</div>
					</li>
					<li class="sidebar-dropdown">
						<RouterLink to="">
							<i class="icon-settings_input_svideo"></i>
							<span class="menu-text">System Management</span>
						</RouterLink>
						<div class="sidebar-submenu">
							<ul>
								<li :class="{ active: isRouteActive('/system-management/drivers') }">
									<RouterLink to="/system-management/drivers">Drivers Management</RouterLink>
								</li>
								<li :class="{ active: isRouteActive('/system-management/vehicles') }">
									<RouterLink to="/system-management/vehicles">Vehicles Management</RouterLink>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

function isRouteActive(route) {
	const currentRoute = useRoute()
	return currentRoute.path === route
}
</script>
