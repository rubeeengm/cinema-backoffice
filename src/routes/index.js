import pageDefault from './../components/pages/Default';
import cinemaIndex from './../components/pages/cinemas/Index';
import orderIndex  from './../components/pages/Orders';

export default [
	{ path: '/', name: 'Index', component: pageDefault }
	, { path: '/cinemas', name: 'CinemaIndex', component: cinemaIndex }
	, { path: '/orders', name: 'OrderIndex', component: orderIndex }
];
