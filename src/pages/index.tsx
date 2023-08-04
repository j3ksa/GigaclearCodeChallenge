import { Layout } from "../components/layout";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { HomePage } from "src/types";
import { PostList } from "src/components/organisms";
import Head from "next/head";

export default function Home({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <Layout>
      <Head>
        <title>Gigaclear news</title>
      </Head>
      <PostList data={repo}/>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  repo: HomePage
}> = async () => {
  const res = await fetch('http://localhost:3000/api/getHomePageData')
  const repo = await res.json()
  return { props: { repo } }
}