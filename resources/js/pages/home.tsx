import { Link, usePage } from '@inertiajs/react';
import Pagination from '@/components/pagination';
import { useRoute } from 'ziggy-js';
import { useState } from 'react';

export default function Home({ posts }) {
    const route = useRoute();

    const { flash } = usePage().props

    const [ flashMsg, setFlashMsg ] = useState(flash.message);

    setTimeout(()=> {
        setFlashMsg(null)
    }, 2000);

    return (
      <>
        <h1 className="title">Привет</h1>
          { flashMsg && (
              <div className="absolute top-24 right-6 bd-rose-500 p-2 rounded-md shadow-lg text-sm text-white bg-danger">
                  {flashMsg}
              </div>
          )}
          <div>
              {posts.data.map(post => (
                  <div key={post.id} className="p-4 border-b">
                      <div className="text-sm text-slate-600">
                          <span>Создан: </span>
                          <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                      </div>
                      <p className="font-medium">{post.body}</p>


                      {/*<Link href={`/posts/${post.id}`}>
                          Подробнее...
                      </Link>*/}
                      <Link href={route('posts.show', post)}>
                          Подробнее...
                      </Link>
                  </div>
                  ))}
          </div>

          <Pagination links={posts.links} />

          <Link preserveScroll href="/" className="title block mt-[1000px]">
              {new Date().toLocaleTimeString()}
          </Link>

      </>
    );
}
