import { useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function Show({post}){
    const { delete: destroy } = useForm();
    const route = useRoute();


    function submit(e){
        e.preventDefault();
        /*destroy(`/posts/${post.id}`);*/
        destroy(route('posts.destroy', post));
    }

    return (
        <>
            <div key={post.id} className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Создан: </span>
                    <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
                <p className="font-medium">{post.body}</p>

                <div>
                    <form className="delete" onSubmit={submit}>
                        <button>Удалить</button>
                    </form>
                </div>
            </div>
        </>
    )
}
