import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Breadcrumb, Button, Table } from "flowbite-react";
import { UilApps,} from '@iconscout/react-unicons'
import Pagination from "@/Components/Pagination";

export default function List ({ auth,session }) {
    const { Education } = usePage().props;
    const {delete: destroy} = useForm();
    const deleteData = (e) => {
        destroy(route('education.destroy',e));
    }
    return (
        <Authenticated
            user={auth.user}
            session={session}
        >
             <Head title="Education" />
             <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Education
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href={route('dashboard')} icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Education</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:ml-64">
                <div className='p-4 bg-gray-50 dark:bg-gray-800 h-fit'>
                    <div className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4 mb-4">
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <Button color='blue' href={route('education.create')} >
                                <svg
                                    className="h-3.5 w-3.5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    />
                                </svg>
                                <p>Tambah Education</p>
                            </Button>
                        </div>
                    </div>
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Kabupaten</Table.HeadCell>
                            <Table.HeadCell>Tanggal Selesai </Table.HeadCell>
                            <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {Education.data.map((data, index) => (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                    <Table.Cell>{index + Education.from}</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {data.title}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {data.kabupaten}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {new Date(data.tgl_lulus).toLocaleDateString('id-ID',{
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',

                                        })}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <a href={route('education.edit',data.id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                        </a>
                                        <a href="#" onClick={() => {
                                            if (window.confirm('Apakah anda yakin ingin menghapus data ini ?')) deleteData(data.id)
                                        }} className="font-medium ms-3 text-cyan-600 hover:underline dark:text-cyan-500">
                                            Hapus
                                        </a>

                                    </Table.Cell>
                                </Table.Row>
                                )
                            )}

                        </Table.Body>
                    </Table>
                    <div className='flex justify-end'>
                        <Pagination className="mt-6" links={Education.links} />
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
