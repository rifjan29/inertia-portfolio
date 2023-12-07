import LandingPageLayout from "@/Layouts/LandingPage";
import { Head } from "@inertiajs/react";
import { Button, Tooltip, Timeline } from "flowbite-react";
import BG from "../../../public/bg-1.svg";
import Datains from "../../../public/datains.png"
import Rifjan from "../../../public/rifjan.jpg"
import Intermedia from "../../../public/logo_gi.png"
import Binar from "../../../public/logo_binar_purple.svg"
import Dompet from "../../../public/dompet.svg"
import Profile from "../../../public/profile.png";
import Bondowoso from "../../../public/logo-bpbd-bondowoso.png";
import Seven from "../../../public/seven.png";
import Bright from "../../../public/bright.png";
import Stack from "@/Components/Stack";
import { TypeAnimation } from 'react-type-animation';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesConfig from "@/Components/ParticlesConfig";
import { useCallback } from "react";



export default function Welcome(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
    return (
        <LandingPageLayout>
            <Head title="Home"/>
            <section className="bg-white dark:bg-gray-900 h-screen">
                <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={particlesConfig(true)}
                        className='h-full w-full absolute top-10 left-0 -z-1'
                />
                <div className="grid items-center max-w-screen-xl h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                    <div className="mr-auto place-self-center lg:col-span-7 relative">
                        <div className='flex'>
                            <p className='text-2xl mr-2'>👋</p>
                            <h4 className="text-2xl font-medium dark:text-gray-300 mb-4">
                                ٱلسَّلَامُ عَلَيْكُمْ
                            </h4>
                        </div>
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            I'am <span className="text-emerald-500">Rifjan </span> Jundila,  <br />
                            a
                                <TypeAnimation
                                  preRenderFirstString={true}
                                    className="mx-2"
                                    sequence={[
                                        500,
                                        'Fullstack Developer',
                                        1000,
                                        'Ordinary Person',
                                        1000,
                                        'Muslim',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                    repeat={Infinity}
                                    />
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            A Fullstack Developer with 1 years of experience in
                            <strong> web application development</strong>.And also
                            interest to learn more about new technology and
                            <strong> UI/UX Design</strong>
                        </p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-900">
                            Get started
                            <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Download CV
                        </a>
                        <hr className="my-3 bg-gray-100 dark:bg-gray-800"/>
                        <div className="flex items-center py-3 space-x-3">
                            <span
                                href="#"
                                className="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                role="alert"
                            >
                            <span className="text-xs bg-emerald-600 rounded-full text-white px-4 py-1.5 mr-3">
                                Stack
                            </span>{" "}
                                <Stack/>
                            </span>

                        </div>
                        <div className="flex items-center">
                            <span
                                href="#"
                                className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                role="alert"
                            >
                            <span className="text-xs bg-emerald-600 rounded-full text-white px-4 py-1.5 mr-3">
                                Design
                            </span>{" "}
                                <div className="flex gap-3">
                                    <Tooltip content="Figma" placement="bottom" style="light">
                                        <div className="h-6 w-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                                <path
                                                    fill="#0acf83"
                                                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                                                />
                                                <path
                                                    fill="#a259ff"
                                                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                                                />
                                                <path
                                                    fill="#f24e1e"
                                                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                                                />
                                                <path
                                                    fill="#ff7262"
                                                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                                                />
                                                <path
                                                    fill="#1abcfe"
                                                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                                                />
                                            </svg>


                                        </div>
                                    </Tooltip>
                                </div>
                            </span>

                        </div>
                       {/* Daftar Social Media - Fixed di Sebelah Kiri */}
                       <div className="lg:col-start-1 lg:col-span-3 fixed left-48 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex  flex-col items-start space-y-4 p-4 bg-white dark:bg-gray-900">
                            {/* <span className="font-bold">Sosial Media :</span> */}
                            <a href="#" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                                </svg>

                            </a>
                            <a href="#" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 15 15"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                    clipRule="evenodd"
                                />
                                <path d="M3 5.012H0V15h3V5.012Z" />
                                </svg>

                            </a>
                            <a href="#" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clipRule="evenodd"
                                />
                                </svg>

                            </a>
                            <a href="#" className="text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 font-bold">
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                        <div
                            className="
                                        h-[400px]
                                        bg-center
                                        bg-no-repeat
                                        bg-cover
                                        right-24
                                        rounded-3xl"
                            style={{ backgroundImage: `url(${BG})` }}
                        >
                        <img
                            src={Profile}
                            className="
                                left-1/2
                                transform
                                -translate-y-1/4
                                h-[535px]
                                w-50"
                            alt="Profile Image"
                        />
                        </div>
                        {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" className="h-fit"/> */}
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 dark:bg-gray-900">
                <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white uppercase">
                            Contributed
                        </h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the whole collection of open-source web components and elements
                            built with the utility classes from Tailwind
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Datains} alt="" className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />
                        </a>
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Intermedia} alt="" className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />
                        </a>
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Binar} alt="" className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />
                        </a>
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Dompet} alt="" className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />
                        </a>
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Bondowoso} alt="" className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />

                        </a>
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Bright} alt="" className="w-40 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />

                        </a>
                        <a href="#" className="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <img src={Seven} alt="" className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" />

                        </a>

                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Education
                        </h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the whole collection of open-source web components and elements
                            built with the utility classes from Tailwind
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="px-4">
                            <img
                            className="h-1/2 max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                            src={Rifjan}
                            alt=""
                            />
                        </div>

                        <div className="col-span-2">
                        <Timeline>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                <Timeline.Time>Oktober 2023</Timeline.Time>
                                <Timeline.Title>Politeknik Negeri Jember | Kabupaten Jember</Timeline.Title>
                                <Timeline.Time>Teknik Informatika · IPK : 3.73</Timeline.Time>
                                <Timeline.Body>
                                    <ul className="max-w-fit space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                        <li>
                                            Tugas Akhir (Skripsi) mengambil judul PENGEMBANGAN SISTEM INFORMASI PERAMALAN HASIL PRODUKSI TAMBAK UDANG MENGGUNAKAN METODE REGRESI LINIER BERGANDA
                                        </li>
                                        <li>
                                            Aktif di organisasi kampus yaitu BSO HMJTI menjabat di Kepala Divisi Perhubungan merupakan divisi sebagai wadah untuk menyampaikan informasi dan anspirasi mahasiswa Politeknik Negeri Jember Kampus Bondowoso

                                        </li>
                                        <li>
                                            Aktif juga di organisasi eksternal yaitu PKPT IPNU-IPPNU POLIJE sebagai Koordinator Lembaga Media PERS yang merupakan lembaga untuk mengelola segala informasi dari kegiatan PKPT IPNU-IPPNU Politeknik Negeri Jember dan juga konten pada sosial media seperti Instagram, Twitter, Tiktok dll.
                                        </li>
                                    </ul>

                                </Timeline.Body>

                                </Timeline.Content>
                            </Timeline.Item>
                            <Timeline.Item>
                                <Timeline.Point icon={HiCalendar} />
                                <Timeline.Content>
                                <Timeline.Time>March 2022</Timeline.Time>
                                <Timeline.Title>SMKS Nurul Jadid | Paiton Probolinggo</Timeline.Title>
                                <Timeline.Time>Rekayasa Perangkat Lunak</Timeline.Time>
                                <Timeline.Body>
                                    All of the pages and components are first designed in Figma and we keep a parity between the two versions
                                    even as we update the project.
                                </Timeline.Body>
                                </Timeline.Content>
                            </Timeline.Item>

                        </Timeline>

                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Experience
                        </h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the whole collection of open-source web components and elements
                            built with the utility classes from Tailwind
                        </p>
                    </div>
                    <Timeline horizontal>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>Okt 2022 - Jan 2023 · 4 bln</Timeline.Time>
                            <Timeline.Title>WebApps Engineer | PT Global Data Inspirasi</Timeline.Title>
                            <Timeline.Body>
                                <ul className="max-w-fit space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li>
                                        Membantu pengerjaan development di bidang software development untuk mendukung pengembangan produk dan project Datains.
                                    </li>
                                    <li>
                                        Membantu pengerjaan development di bidang software development untuk mendukung pengembangan produk dan project Datains.
                                    </li>
                                </ul>
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>Web Developer | Greensoft</Timeline.Time>
                            <Timeline.Title>Feb 2022 - Mei 2022 · 4 bln</Timeline.Title>
                            <Timeline.Body>
                                Membantu pengerjaan development di bidang software development untuk mendukung pengembangan produk dan project.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point icon={HiCalendar} />
                            <Timeline.Content>
                            <Timeline.Time>Web Developer | PT Global Intermedia</Timeline.Time>
                            <Timeline.Title>Okt 2022 - Jan 2023 · 4 bln</Timeline.Title>
                            <Timeline.Body>
                               Membuat landing page sederhana dan membantu tugas yang diberikan oleh pembimbing lapang.
                            </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    </Timeline>

                </div>
            </section>
            <section className="bg-slate-500 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Projects
                        </h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the whole collection of open-source web components and elements
                            built with the utility classes from Tailwind
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Artikel
                        </h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Explore the whole collection of open-source web components and elements
                            built with the utility classes from Tailwind
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                <svg
                                className="mr-1 w-3 h-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                                Tutorial
                            </span>
                            <span className="text-sm">14 days ago</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">How to quickly deploy a static website</a>
                            </h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Static websites are now used to bootstrap lots of websites and are
                            becoming the basis for a variety of tools that even influence both web
                            designers and developers influence both web designers and developers.
                            </p>
                            <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img
                                className="w-7 h-7 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="Jese Leos avatar"
                                />
                                <span className="font-medium dark:text-white">Jese Leos</span>
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Read more
                                <svg
                                className="ml-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </a>
                            </div>
                        </article>
                    </div>

                </div>
            </section>
        </LandingPageLayout>
    )
}
