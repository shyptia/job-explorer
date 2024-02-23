type Route = 'jobs' | 'liked' | 'create-profile';

export const routes: Route[] = ['jobs', 'liked', 'create-profile'];

export const routesLabels: Record<Route, string> = {
  jobs: 'Jobs',
  liked: 'Liked jobs',
  "create-profile": 'Create profile'
};

export const routesPathnames: Record<Route, string> = {
  jobs: '/jobs',
  liked: '/liked',
  "create-profile": '/create-profile'
};
