import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, useForm, usePage } from "@inertiajs/react"
import { Breadcrumb, Button, Datepicker } from "flowbite-react"
import { UilApps,} from '@iconscout/react-unicons'
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import InputError from "@/Components/InputError"
import { useState } from "react"
import { Editor } from '@tinymce/tinymce-react';
import Select from 'react-select'
import ImagePreview from '../../../../../public/blank-image.svg'

export default function Create ({auth,session}) {
    const { Stack } = usePage().props;
    const { data, setData,post, errors,processing  } = useForm({
        title: "",
        url: "",
        stack: [],
        deskripsi: "",
        gambar: null,
    });
    const [editorContent, setEditorContent] = useState();
    const [selectedImage, setSelectedImage] = useState();

    const handleChangeDeskripsi = (event, editor) => {
        setEditorContent(editor.getContent());
        setData('deskripsi',editor.getContent());
    }
    // image change
    const imageChange = (e) => {
        setData("gambar", e.target.files[0]);
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0])
        }
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('project.store'));
    }
    return (
        <Authenticated
            user={auth.user}
            session={session}
        >
            <Head title="Tambah Project" />
             <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Tambah Project
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href={route('dashboard')} icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={route('project.index')}>Projects</Breadcrumb.Item>
                            <Breadcrumb.Item>Tambah Project</Breadcrumb.Item>
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
                        <InputLabel htmlFor="URL" value="URL" />

                        <TextInput
                            id="url"
                            className="mt-1 block w-full"
                            value={data.url}
                            onChange={(e) => setData('url', e.target.value)}
                            isFocused
                            autoComplete="url"
                            placeholder="Masukkan url"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>
                    <div>
                        <InputLabel htmlFor="Tech Stack" value="Tech Stack" />
                        <Select
                            isMulti
                            name="stack"
                            options={Stack}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(selectedOptions) => {
                                // Convert the selected options into an array of values
                                const selectedValues = selectedOptions.map(option => option.value);
                                setData("stack", selectedValues);
                            }}

                        ></Select>
                        <InputError
                            message={errors.stack}
                            className="mb-2"
                        />
                    </div>
                    <div>
                        <figure className="max-w-lg">
                            <img
                                className="h-auto w-1/2 rounded-lg"
                                src={selectedImage == null ? ImagePreview : URL.createObjectURL(selectedImage)}
                                alt="image description"
                            />
                            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                                Image caption
                            </figcaption>
                        </figure>
                        <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="user_avatar"
                            >
                            Upload Gambar
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="user_avatar_help"
                            id="gambar"
                            type="file"
                            name='gambar'
                            accept=".png, .jpg, .jpeg"
                            onChange={imageChange}
                        />
                            <div
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="user_avatar_help"
                            >
                            Upload Gambar dengan format png, svg
                            </div>
                        <InputError
                            message={errors.gambar}
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
