import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, useForm } from "@inertiajs/react"
import { Breadcrumb, Button } from "flowbite-react"
import { UilApps,} from '@iconscout/react-unicons'
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import InputError from "@/Components/InputError"
import { useState } from "react"
import ImagePreview from '../../../../public/blank-image.svg'


export default function Create ({auth,session}) {
    const { data, setData,post, errors,processing  } = useForm({
        name: "",
    });
    const [selectedImage, setSelectedImage] = useState();
    // image change
    const imageChange = (e) => {
        setData("icon", e.target.files[0]);
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0])
        }
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('stack.store'));
    }
    return (
        <Authenticated
            user={auth.user}
            session={session}
        >
            <Head title="Tambah Stack" />
             <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Tambah Stack
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href={route('dashboard')} icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={route('stack.index')}>Stack</Breadcrumb.Item>
                            <Breadcrumb.Item>Tambah Stack</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="p-4 sm:ml-64">
                <div className='p-4 bg-gray-50 dark:bg-gray-800'>
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="Nama Stack" value="Nama Stack" />

                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            isFocused
                            autoComplete="name"
                            placeholder="Masukkan Stack"
                        />
                        <InputError className="mt-2" message={errors.name} />
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
                            Upload Icon
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="user_avatar_help"
                            id="icon"
                            type="file"
                            name='icon'
                            accept=".png, .jpg, .jpeg"
                            onChange={imageChange}
                        />
                            <div
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="user_avatar_help"
                            >
                            Upload Icon dengan format png, svg
                            </div>
                        <InputError
                            message={errors.icon}
                            className="mb-2"
                        />
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
