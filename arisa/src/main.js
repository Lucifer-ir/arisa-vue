import { createApp } from 'vue'
import App from './App.vue'
import Saidbar from './pages/Saidbar.vue'
import Dashboard from './pages/Dashboard.vue'
import './styles/main.css'

createApp(App).mount('#app')
createApp(Saidbar).mount('#saidbar')
createApp(Dashboard).mount('#dashboard')
