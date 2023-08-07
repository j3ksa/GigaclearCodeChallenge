import { Layout } from "../components/layout";
import { HomePage } from "src/types";
import { PostList } from "src/components/organisms";
import Head from "next/head";
import useSWR, { Fetcher } from 'swr';
import { Loading } from "@/atoms/loading/Loading";

const fetcher: Fetcher<HomePage, string> = async (url) => {
  try {
    const res = await fetch(url)
    return res.json()
  } catch (error) {
    console.error('res.json returned with error:' + error)
  }
}

export default function Home() {

  const { data } = useSWR('http://localhost:3000/api/getHomePageData', fetcher);

  if (!data) return <Loading/>

  return (
    <Layout>
      <Head>
        <title>Gigaclear news</title>
      </Head>
      <PostList data={data}/>
    </Layout>
  )
}