import { NextPage } from 'next';

import { Home } from '@/components/pages';

import type { IGithubApiResponse } from '@/types';

import { fetchGithubUserByLogin } from '@/utils';

const HomePage: NextPage<{ user: IGithubApiResponse }> = ({ user }) => {
  return <Home user={user} />;
};

export const getStaticProps = async () => {
  const data: Awaited<Promise<IGithubApiResponse>> =
    await fetchGithubUserByLogin('andrewench');

  return {
    props: {
      user: data,
    },
    revalidate: 30,
  };
};

export default HomePage;
