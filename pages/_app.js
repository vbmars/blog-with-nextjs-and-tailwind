import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-6xl font-bold text-center">娄底科技局假项目指南</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>它是谁</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
      <bottom>
      <h4 className="text-2xl  text-center">欢迎转发微信群，转发的截图发送邮件至11864718@qq.com有礼品反馈</h4>
      </bottom>
    </div>
  );
}

export default MyApp;
