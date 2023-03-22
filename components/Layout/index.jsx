import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentUrl = router.pathname;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <div className="w-full min-h-screen bg-slate-100 flex p-10">
        <div className="w-1/3 flex flex-col items-center">
          <Link
            className={classNames(
              currentUrl === '/ourproduct'
                ? 'bg-green-500 h-11 w-[85%] px-10 flex justify-start items-center mb-1 text-white'
                : 'bg-white h-11 w-[85%] px-10 flex justify-start items-center mb-1',
            )}
            href={'/ourproduct'}
          >
            Our Product
          </Link>
          <Link
            href={'/layouti'}
            className={classNames(
              currentUrl === '/layouti'
                ? 'bg-green-500 h-11 w-[85%] px-10 flex justify-start items-center mb-1 text-white'
                : 'bg-white h-11 w-[85%] px-10 flex justify-start items-center mb-1',
            )}
          >
            Layouti Section
          </Link>
          <Link
            href={'/colorfooter'}
            className={classNames(
              currentUrl === '/colorfooter'
                ? 'bg-green-500 h-11 w-[85%] px-10 flex justify-start items-center mb-1 text-white'
                : 'bg-white h-11 w-[85%] px-10 flex justify-start items-center mb-1',
            )}
          >
            Color Footer
          </Link>
        </div>
        <div className="w-2/3 ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
