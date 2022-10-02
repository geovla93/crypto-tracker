import cn from 'classnames';

import Footer from '../Footer';
import Header from '../Header';
import Seo from '../Seo';

function Layout({ children, className, title, description }) {
  const rootClassName = cn(className, 'min-h-[calc(100vh-7rem)] py-8');

  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <main className={rootClassName}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
