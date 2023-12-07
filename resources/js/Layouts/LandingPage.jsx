import { Link } from "@inertiajs/react"
import { Button, DarkThemeToggle, Flowbite, Footer, Navbar, } from "flowbite-react"
import Logo from '../../../public/logo.png';
import LogoFooter from '../../../public/logo-footer.png';

export default function LandingPage({children}){
    return (
        <Flowbite>
                <Navbar  >
                    <Navbar.Brand href="https://flowbite-react.com">
                        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Rifjan Jundila</span> */}
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <DarkThemeToggle/>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active>
                        Home
                        </Navbar.Link>
                        <Navbar.Link href="#">Project</Navbar.Link>
                        <Navbar.Link href="#">Artikel</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
                <main>
                    {children}
                </main>
                <Footer container  className="rounded-none">
                    <div className="w-full text-center">
                        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                        <Footer.Brand
                            className="w-fit h-10"
                            // href="https://flowbite.com"
                            src={LogoFooter}
                            // alt="Flowbite Logo"
                            name="Rifjan"
                            // name="Rifjan"
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="#">About</Footer.Link>
                            <Footer.Link href="#">Project</Footer.Link>
                            <Footer.Link href="#">Artikel</Footer.Link>
                            <Footer.Link href="#">Contact</Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <Footer.Divider />
                        <Footer.Copyright href="#" by="Rifjan Jundila" year={2022} />
                    </div>
                </Footer>
        </Flowbite>
    )
}
