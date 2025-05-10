import { Link } from '@inertiajs/react';

export default function Layout({ children }){
    return (
      <>
          <header>
              <nav className='container'>
                  <Link href="/" className="nav-link">Главная</Link>
                  <Link href="/posts/create" className="nav-link">Создать</Link>
              </nav>
          </header>
          <main className="container">
          {children}
          </main>
      </>
    );
}
