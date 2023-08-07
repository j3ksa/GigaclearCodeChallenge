import { Layout } from 'src/components/layout';
import { Post } from "src/types";
import { BlogPost } from 'src/components/organisms';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR, { Fetcher } from 'swr';
import { Loading } from "@/atoms/loading/Loading";

interface PostData {
  posts: Post[]
}

const fetcher: Fetcher<PostData, string> = async (url) => {
  try {
    const res = await fetch(url)
    return res.json()
  } catch (error) {
    console.error('res.json returned with error:' + error)
  }
}

export default function Blog() {
  const { query } = useRouter()
  const blogId = Number(query.id)

  const { data } = useSWR('http://localhost:3000/api/getPostData', fetcher);
  
  if (!data) return <Loading/>

  return (
    <Layout>
      <Head>
        <title>Blog post</title>
      </Head>
      <BlogPost data={data.posts[blogId - 1]}/>
    </Layout>
  )
}
