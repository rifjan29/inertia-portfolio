import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Breadcrumb } from 'flowbite-react';
import { UilApps,
    UilCopy,
    UilGraduationCap,
    UilBracketsCurly,
    UilMonitor,
    UilClipboardAlt,
    UilArrow
} from '@iconscout/react-unicons'

export default function Dashboard({ auth,session,kategori,stack,experience }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            session={session}
        >
            <Head title="Dashboard" />
            <div className="p-4 sm:ml-64">
                <div className='p-4 flex justify-between items-center'>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Dashboard
                        </h5>
                    </div>
                    <div>
                        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
                            <Breadcrumb.Item href="#" icon={UilApps}>
                                Dashboard
                            </Breadcrumb.Item>
                            {/* <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item> */}
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="p-4 py-5  sm:ml-64">
                    <div className="p-4">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center p-5 justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 grayscale dark:grayscale-0 hover:grayscale-0">
                                <div className="flex flex-shrink-0 items-center justify-center bg-pink-200 h-16 w-16 rounded">
                                    <div
                                        className="w-6 h-6 fill-current text-pink-700"

                                        >
                                        <UilCopy/>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Kategori Artikel</span>
                                    </div>
                                    <h1 className="text-2xl font-extrabold dark:text-gray-300">{kategori}</h1>
                                </div>
                            </div>
                            <div className="flex items-center p-5 justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 grayscale dark:grayscale-0 hover:grayscale-0">
                                <div className="flex flex-shrink-0 items-center justify-center bg-blue-200 h-16 w-16 rounded">
                                    <div
                                        className="w-6 h-6 fill-current text-blue-700"

                                        >
                                        <UilArrow/>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Stack</span>
                                    </div>
                                    <h1 className="text-2xl font-extrabold dark:text-gray-300">{stack}</h1>
                                </div>
                            </div>
                            <div className="flex items-center p-5 justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 grayscale dark:grayscale-0 hover:grayscale-0">
                                <div className="flex flex-shrink-0 items-center justify-center bg-indigo-200 h-16 w-16 rounded">
                                    <div
                                        className="w-6 h-6 fill-current text-indigo-700"

                                        >
                                        <UilMonitor/>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Experience</span>
                                    </div>
                                    <h1 className="text-2xl font-extrabold dark:text-gray-300">{experience}</h1>
                                </div>
                            </div>
                            <div className="flex items-center p-5 justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 grayscale dark:grayscale-0 hover:grayscale-0">
                                <div className="flex flex-shrink-0 items-center justify-center bg-emerald-200 h-16 w-16 rounded">
                                    <div
                                        className="w-6 h-6 fill-current text-emerald-700"

                                        >
                                        <UilGraduationCap/>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Education</span>
                                    </div>
                                    <h1 className="text-2xl font-extrabold dark:text-gray-300">20</h1>
                                </div>
                            </div>
                            <div className="flex items-center p-5 justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 grayscale dark:grayscale-0 hover:grayscale-0">
                                <div className="flex flex-shrink-0 items-center justify-center bg-yellow-200 h-16 w-16 rounded">
                                    <div
                                        className="w-6 h-6 fill-current text-yellow-700"

                                        >
                                        <UilBracketsCurly/>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Project</span>
                                    </div>
                                    <h1 className="text-2xl font-extrabold dark:text-gray-300">20</h1>
                                </div>
                            </div>
                            <div className="flex items-center p-5 justify-center h-24 rounded bg-gray-50 dark:bg-gray-800 grayscale dark:grayscale-0 hover:grayscale-0">
                                <div className="flex flex-shrink-0 items-center justify-center bg-orange-200 h-16 w-16 rounded">
                                    <div
                                        className="w-6 h-6 fill-current text-orange-700"

                                        >
                                        <UilClipboardAlt/>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col ml-4">
                                    <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">Artikel</span>
                                    </div>
                                    <h1 className="text-2xl font-extrabold dark:text-gray-300">20</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

        </AuthenticatedLayout>
    );
}
