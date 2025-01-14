import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);

  return (
    <div >
      <Head >
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main > 
        <div className="border-2 border-gray-200 my-4 rounded-xl">
        <div className="border-b-2 border-gray-200 mb-4 r ">
          <h2 className="text-3xl font-bold mx-12 text-center my-6">{title}</h2>
          <div className="text-gray-600 text-md mx-16">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div>
        </div>
        <div className="prose mx-auto px-4">{hydratedContent}</div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      describ:data.describ,
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
