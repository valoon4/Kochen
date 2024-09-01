import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import { loadPostBySlug } from '../../utils/Controller';
import PostView from '../../displayers/PostView';
import Head from 'next/head';
import { PostResponse } from '../../interfaces/InterfaceCollection';
import { NavigationManager } from '@/utils/NavigationManager';

export const getServerSideProps: GetServerSideProps = async (context) => {

  const slug = context.params?.slug as string;
  const post: PostResponse = await loadPostBySlug(slug);

  return {
    props: { post },
  };
};

const MenuItem: NextPage<{ post: PostResponse }> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="simplecontainer">
        <h1>Detailansicht</h1>

        <NavigationManager />
        <PostView post={post} />
        <Link href="/">
          <p className="backbutton" >Home</p>
        </Link>
      </div>
    </>
  );
};

export default MenuItem;