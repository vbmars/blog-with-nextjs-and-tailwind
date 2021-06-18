import Link from 'next/link';
import '../styles/globals.css';
import {SpeakerphoneIcon, XIcon} from '@heroicons/react/outline';
import {useRouter} from 'next/router';
function MyApp({ Component, pageProps }) {
  const router=useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    console.log(' clicked')
    router.push('contact')
  }
  return (
    <div className="mx-auto my-8 w-9/12">
      <header>
        <h1 className="text-6xl font-bold text-center text-blue-700">娄底科技假项目指南</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a className="">项目列表</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>申报流程</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
      <bottom className="bg-indigo-600 rounded">
      <div className="bg-indigo-600 rounded mt-4">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">欢迎转发微信群</span>
              <span className="hidden md:inline">转发截图发送邮件至11864718@qq.com可领取现金红包.</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="./contact"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              给我留言
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleClick}>
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <h4 className="my-4 text-2xl  text-center"></h4>
      </div>
      </bottom>
    </div>
  );
}

export default MyApp;
