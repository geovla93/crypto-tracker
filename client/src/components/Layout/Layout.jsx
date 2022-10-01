import cn from 'classnames';

import Header from '../Header';
import Seo from '../Seo';

function Layout({ children, className, title, description }) {
  const rootClassName = cn(className, 'min-h-calc(100vh-3rem) pt-8');

  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <main className={rootClassName}>{children}</main>
    </>
  );
}

export default Layout;
