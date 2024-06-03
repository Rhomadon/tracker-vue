import { createRouter, createWebHistory } from 'vue-router'
import LiveTrackingView from '@/views/LiveTrackingView.vue'
import DashboardsVehiclesView from '@/views/DashboardsVehiclesView.vue'
import DashboardsDriversView from '@/views/DashboardsDriversView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'live-tracking',
      component: LiveTrackingView
    },
    {
      path: '/dashboards/drivers',
      name: 'dashboards-drivers',
      component: DashboardsDriversView
    },
    {
      path: '/dashboards/vehicles',
      name: 'dashboards-vehicles',
      component: DashboardsVehiclesView
    }
  ]
})

export default router
