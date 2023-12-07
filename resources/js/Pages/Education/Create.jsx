import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, useForm } from "@inertiajs/react"
import { Breadcrumb, Button, Datepicker } from "flowbite-react"
import { UilApps,} from '@iconscout/react-unicons'
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import InputError from "@/Components/InputError"
import { useState } from "react"
import { Editor } from '@tinymce/tinymce-react';


export default function Create ({auth,session}) {
    const [editorContent, setEditorContent] = useState();
    const { data, setData,post, errors,processing  } = useForm({
        title: "",
        kabupaten: "",
        deskripsi: "",
        tanggal_selesai: "",
    });
    const handleChangeDeskripsi = (event, editor) => {
        setEditorContent(editor.getContent());
        setData('deskripsi',editor.getContent());
    }

    const handleChangeTanggal = (event)=> {
        const dateObj = new Date(event);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');  // karena getMonth() dimulai dari 0
        const day = dateObj.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setData('tanggal_selesai',formattedDate);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('education.store'));
    }
    return (
        <Authenticated
            user={auth.user}
            session={session}
        >
            <Head title="Tambah Education" />
             <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Tambah Education
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href={route('dashboard')} icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={route('education.index')}>Education</Breadcrumb.Item>
                            <Breadcrumb.Item>Tambah Education</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="p-4 sm:ml-64">
                <div className='p-4 bg-gray-50 dark:bg-gray-800'>
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="Title" value="Title" />

                        <TextInput
                            id="title"
                            className="mt-1 block w-full"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            isFocused
                            autoComplete="title"
                            placeholder="Masukkan title"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>
                    <div>
                        <InputLabel htmlFor="Nama Kabupaten" value="Nama Kabupaten" />

                        <TextInput
                            id="kabupaten"
                            className="mt-1 block w-full"
                            value={data.kabupaten}
                            onChange={(e) => setData('kabupaten', e.target.value)}
                            isFocused
                            autoComplete="kabupaten"
                            placeholder="Masukkan Kabupaten"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            Tanggal Selesai
                        </label>
                        <Datepicker onSelectedDateChanged={handleChangeTanggal} autoHide={true}/>
                        <InputError
                            message={errors.tanggal_selesai}
                            className="mb-2"
                        />

                    </div>
                    <div>
                        <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Deskripsi
                        </label>
                        <Editor
                            apiKey='w84msamaxbrwez0hi24n333qpvlodzbppx6u1euiyye5qgzm'
                            onEditorChange={handleChangeDeskripsi}
                            // initialValue={editorContent}
                            init={{
                                plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                toolbar: 'codesample | undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                tinycomments_mode: 'embedded',
                                tinycomments_author: 'Author name',
                                // mergetags_list: [
                                //     { value: 'First.Name', title: 'First Name' },
                                //     { value: 'Email', title: 'Email' },
                                // ],
                                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                            }}
                        />
                        <InputError className="mt-2" message={errors.deskripsi} />

                    </div>
                    <div className="flex justify-end pt-6 mt-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <Button color="blue" type="submit"  disabled={processing}>Submit</Button>
                        <Button color="gray" type="reset">
                            Reset
                        </Button>
                    </div>
                </form>
                </div>
            </div>
        </Authenticated>
    )
}
