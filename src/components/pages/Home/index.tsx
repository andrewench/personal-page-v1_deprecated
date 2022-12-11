import { BaseLayout } from '@components:global';

export const Home = () => {
  return (
    <div>
      <BaseLayout
        title="andrewench | Personal Page"
        meta={{
          keywords: 'andrewench, react, frontend, next, tailwind, typescript',
          description: 'Home page',
          author: 'andrewench',
        }}
      >
        123
      </BaseLayout>
    </div>
  );
};
