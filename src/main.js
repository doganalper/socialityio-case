import { createApp } from 'vue'
import App from './App.vue'
import './style/tailwind.css';
import FontAwesomeIcon from '@/utils/icons.js'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
