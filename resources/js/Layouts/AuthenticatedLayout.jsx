import { useState } from 'react';
import Logo from '../../../public/logo.png';
import SidebarNav from '@/Components/SidebarNav';
import { DarkThemeToggle, Dropdown, Flowbite } from 'flowbite-react';

export default function Authenticated({ user, header, children, session }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    return (
        <Flowbite>

        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                />
                            </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                            <img
                                src={Logo}
                                className="h-8 me-3"
                                alt="FlowBite Logo"
                            />

                            </a>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <DarkThemeToggle />
                            </div>
                            <div className="flex items-center ms-3">
                                <div>
                                <Dropdown className='cursor-pointer' label="" dismissOnClick={false} renderTrigger={() =>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo"
                                        />

                                }>
                                    <Dropdown.Item>
                                        <div className="px-2 py-3" role="none">
                                            <p className="text-sm text-gray-900 dark:text-white" role="none">
                                                {user.name}
                                            </p>
                                            <p
                                                className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                                role="none"
                                            >
                                            {user.email}
                                            </p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <a
                                            href={route('profile.edit')}
                                            className="block  py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem"
                                            >
                                            Settings
                                        </a>
                                    </Dropdown.Item>
                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                </Dropdown>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <SidebarNav/>
            <div className="p-4 pt-20 sm:ml-64">
                {session.success && (
                    <div
                        className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                        role="alert"
                        >
                        <svg
                            className="flex-shrink-0 inline w-4 h-4 mr-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Berhasil!</span> {session.success}
                        </div>
                    </div>

                )}
                {session.error && (
                    <div
                        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                    >
                        <span className="font-medium">Danger alert!</span> {session.error}.
                    </div>

                )}
            </div>
            <main>{children}</main>
        </div>
        </Flowbite>
    );
}
