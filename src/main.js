import { createApp } from 'vue';
import './assets/style/main.scss';
import "@fontsource/roboto";
import * as bootstrap from 'bootstrap'
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fullStar, emptyStar, faSearch)

createApp(App).mount('#app')
