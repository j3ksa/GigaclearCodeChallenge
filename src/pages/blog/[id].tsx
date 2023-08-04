import { Layout } from 'src/components/layout';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Post } from "src/types";
import { BlogPost } from 'src/components/organisms';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Blog({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { query } = useRouter()
    const blogId = Number(query.id)

  return (
    <Layout>
      <Head>
        <title>Blog post</title>
      </Head>
      <BlogPost data={repo.posts[blogId - 1]}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  repo: {
    posts: Post[]
  }
}> = async () => {
  const res = await fetch('http://localhost:3000/api/getPostData')
  const repo = await res.json()
  return { props: { repo } }
}