import { useForm } from '@inertiajs/react';

export default function Create(){
    const {  data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e){
        e.preventDefault()
        post("/posts")
    }

    console.log(errors)

    return(
        <>
            <h1 className="title">Создать пост</h1>

            <div className="w-1/2 mx-auto">
                <form action="" onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className={errors.body && 'ring-red-500!'}
                    ></textarea>

                    {errors.body &&  <p className="error">{errors.body}</p>}

                    <button
                        className="primary-btn mt-4"
                        disabled={processing}
                    >Создать пост</button>
                </form>
            </div>
        </>
    )
}
