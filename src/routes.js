import App from './App.vue';
import About from './components/About.vue';

// @todo - fix simple routing

const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = { template: App }
const AboutComponent = { template: About }

const routes = {
  '/': HomeComponent,
  '/about': AboutComponent
}

export default routes