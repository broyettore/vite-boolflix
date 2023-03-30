import { createApp } from 'vue';
import './assets/style/main.scss';
import "@fontsource/roboto";
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fullStar, emptyStar)

createApp(App).mount('#app')
