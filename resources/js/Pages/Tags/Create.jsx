import Authenticated from "@/Layouts/AuthenticatedLayout"
import { Head, useForm } from "@inertiajs/react"
import { Breadcrumb, Button } from "flowbite-react"
import { UilApps,} from '@iconscout/react-unicons'
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import InputError from "@/Components/InputError"


export default function Create ({auth,session}) {
    const { data, setData,post, errors,processing  } = useForm({
        name: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tags.store'));
    }
    return (
        <Authenticated
            user={auth.user}
            session={session}
        >
            <Head title="Tambah Tags" />
             <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Tambah Tags
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href={route('dashboard')} icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={route('kategori-artikel.index')}>Tags</Breadcrumb.Item>
                            <Breadcrumb.Item>Tambah Tags</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

            <div className="p-4 sm:ml-64">
                <div className='p-4 bg-gray-50 dark:bg-gray-800'>
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel htmlFor="Nama Tags" value="Nama Tags" />

                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            isFocused
                            autoComplete="name"
                            placeholder="Masukkan name"
                        />

                        <InputError className="mt-2" message={errors.name} />
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
