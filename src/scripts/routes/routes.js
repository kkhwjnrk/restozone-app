import AboutUs from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Favorite,
  '/tentang-kami': AboutUs,
  '/detail/:id': Detail,
};

export default routes;
