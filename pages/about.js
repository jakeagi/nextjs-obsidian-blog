import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>关于我</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>关于我</h1>
        <p>
          你好！欢迎来到我的博客。这里记录着我对 AI 技术的思考、学习和成长。
        </p>
        <h2 className={utilStyles.headingLg}>联系方式</h2>
        <p>
          如果你有任何问题或想交流，欢迎与我联系。
        </p>
        <ul>
          <li>🟢：thejakeai</li>
          <li>✉️：cj7035302@gmail.com</li>
        </ul>
      </article>
    </Layout>
  );
}
