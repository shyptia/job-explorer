type Route = 'jobs' | 'liked-jobs' | 'create-profile';

export const routes: Route[] = ['jobs', 'liked-jobs', 'create-profile'];

export const routesLabels: Record<Route, string> = {
  jobs: 'Jobs',
  "liked-jobs": 'Liked jobs',
  "create-profile": 'Create profile'
};

export const routesPathnames: Record<Route, string> = {
  jobs: '/jobs',
  "liked-jobs": '/liked-jobs',
  "create-profile": '/create-profile'
};
