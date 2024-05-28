import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SampleComponent from './components/SampleComponent.vue'

createApp(App).component('SampleComponent', SampleComponent).mount('#app')
