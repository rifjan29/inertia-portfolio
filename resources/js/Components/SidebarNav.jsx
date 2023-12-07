import { UilApps,
    UilAngleRight ,
    UilAngleUp,
    UilFolder,
    UilGraduationCap,
    UilBracketsCurly,
    UilMonitor,
    UilClipboardAlt
} from '@iconscout/react-unicons'
import { Link, usePage } from '@inertiajs/react';
import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';

export default function SidebarNav ()  {
    const { url, } = usePage()
    return (
        <Sidebar id="logo-sidebar" aria-label="Sidebar with multi-level dropdown example" className='fixed top-14 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <li>
                        <Link
                            href={route('dashboard')}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <UilApps className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ms-3">Dashboard</span>
                        </Link>
                    </li>

                    <Sidebar.Collapse
                        icon={UilFolder }
                        label="Master Data"
                        renderChevronIcon={(theme, open) => {
                        const IconComponent = open ? UilAngleUp : UilAngleRight;
                        return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                        }}
                    >
                            <li>
                                <Link href={route('kategori-artikel.index')} className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                    Kategori Artikel
                                </Link>
                            </li>
                            <li>
                                <Link href={route('stack.index')} className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                    Stack
                                </Link>

                            </li>
                            <li>
                                <Link href={route('tags.index')} className='flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                    Tags
                                </Link>
                            </li>


                    </Sidebar.Collapse>
                    <li>
                        <Link
                            href={route('experience.index')}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <UilMonitor className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ms-3">Experiance</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('education.index')}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <UilGraduationCap className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ms-3">Education</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('project.index')}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <UilBracketsCurly className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ms-3">Project</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('dashboard')}
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <UilClipboardAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ms-3">Artikel</span>
                        </Link>
                    </li>

                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
