// Layouts
import HeaderOnly from '~/layouts/HeaderOnly';

// Pages
import Home from '~/pages/Home';
import LearningPaths from '~/pages/LearningPaths';
import Courses from '~/pages/Courses';
import Blog from '~/pages/Blog';
import Auth from '~/pages/Auth';
import Profile from '~/pages/Profile';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/learning-paths', component: LearningPaths },
    { path: '/courses', component: Courses },
    { path: '/blog', component: Blog },
    { path: '/auth', component: Auth, layout: null },
    { path: '/profile', component: Profile, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
