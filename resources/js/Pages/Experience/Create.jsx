import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, useForm } from "@inertiajs/react"
import { Breadcrumb, Button, Datepicker } from "flowbite-react"
import { UilApps,} from '@iconscout/react-unicons'
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import InputError from "@/Components/InputError"
import WysiwygEditor from "@/Components/CKEditorComponent"
import { useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { Editor } from '@tinymce/tinymce-react';


export default function Create ({auth,session}) {
    const [editorContent, setEditorContent] = useState();
    const { data, setData,post, errors,processing  } = useForm({
        title: "",
        perusahaan: "",
        deskripsi: "",
        tanggal_mulai: "",
        tanggal_akhir: "",
    });
    const handleChangeDeskripsi = (event, editor) => {
        setEditorContent(editor.getContent());
        console.log(editor.getContent());
        setData('deskripsi',editor.getContent());
    }

    const handleChangeTanggalMulai = (event)=> {
        const dateObj = new Date(event);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');  // karena getMonth() dimulai dari 0
        const day = dateObj.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setData('tanggal_mulai',formattedDate);

    }
    const handleChangeTanggalAkhir = (event)=> {
        const dateObj = new Date(event);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');  // karena getMonth() dimulai dari 0
        const day = dateObj.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        setData('tanggal_akhir',formattedDate);

    }

    const submit = (e) => {
        e.preventDefault();
        post(route('experience.store'));
    }
    return (
        <Authenticated
            user={auth.user}
            session={session}
        >
            <Head title="Tambah Experience" />
             <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Tambah Experience
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href={route('dashboard')} icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={route('experience.index')}>Experience</Breadcrumb.Item>
                            <Breadcrumb.Item>Tambah Experience</Breadcrumb.Item>
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
                        <InputLabel htmlFor="Nama Perusahaan" value="Nama Perusahaan" />

                        <TextInput
                            id="perusahaan"
                            className="mt-1 block w-full"
                            value={data.perusahaan}
                            onChange={(e) => setData('perusahaan', e.target.value)}
                            isFocused
                            autoComplete="perusahaan"
                            placeholder="Masukkan nama perusahaan"
                        />

                        <InputError className="mt-2" message={errors.perusahaan} />
                    </div>
                    <div>
                        <div className="flex items-center ">
                            <div className="w-1/2">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                    Tanggal Mulai
                                </label>
                                <Datepicker onSelectedDateChanged={handleChangeTanggalMulai} autoHide={true}/>
                                {/* <Datepicker selected={date} onChange={handleTanggal}/> */}
                                <InputError
                                    message={errors.tanggal_mulai}
                                    className="mb-2"
                                />
                            </div>
                            <span className="mx-4 py-4 text-gray-500">Sampai</span>
                            <div className="w-1/2">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                    Tanggal Akhir
                                </label>
                                <Datepicker onSelectedDateChanged={handleChangeTanggalAkhir} autoHide={true}/>
                                {/* <Datepicker selected={date} onChange={handleTanggal}/> */}
                                <InputError
                                    message={errors.tanggal_akhir}
                                    className="mb-2"
                                />
                            </div>
                        </div>
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
