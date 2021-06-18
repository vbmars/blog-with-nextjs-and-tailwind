import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>娄底科技假项目申报指南</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4 ">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  // console.log(allPosts)
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        describ:data.describ,
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, describ,content }) {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in ">
      <div >
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div>{describ}</div>
    </div>
  );
}
