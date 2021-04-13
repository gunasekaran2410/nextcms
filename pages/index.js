


import { useRouter } from 'next/router'
import Layout from './Layout';
import Home from './Home'
import Head from "next/head"
export default function Main() {
  const router = useRouter()

  return <div>
      <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
    <Layout>
   <Home/>
    </Layout>
  </div>
}