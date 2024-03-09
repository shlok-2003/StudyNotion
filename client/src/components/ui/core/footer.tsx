import Logo from '/assets/Logo/Logo-Full-Light.png';
import { FaLinkedin, FaTwitter, FaInstagram } from '@/icons'

import { Box } from '@components/common/containers';
import { Typography } from '@components/common/typography';

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 py-12 text-white">
                <Box className="container mx-auto">
                    <Box className="grid grid-cols-4 gap-8 max-sm:grid-cols-1">
                        <Box className="w-full">
                            <Typography variant="h5" className="mb-4">
                                About
                            </Typography>
                            <ul>
                                <li>
                                    <a
                                        href="/about"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </Box>
                        <Box className="w-full">
                            <Typography variant="h5" className="mb-4">
                                Get Help
                            </Typography>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Payments
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Courses
                                    </a>
                                </li>
                            </ul>
                        </Box>
                        <Box className="w-full">
                            <Typography variant="h5" className="mb-4">
                                Contact Us
                            </Typography>
                            <ul>
                                <li>
                                    <a
                                        href="mailto:shlokprajapati2003@gmail.com?body=Feel free to ask any question"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Gmail
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:9999999999"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Helpline No
                                    </a>
                                </li>
                            </ul>
                        </Box>
                        <Box className="w-full">
                            <Typography variant="h5" className="mb-4">
                                Follow Us
                            </Typography>
                            <Box className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    className="social-link"
                                >
                                    <FaLinkedin className="mx-auto mt-3 scale-125 text-white hover:text-blue-500" />
                                </a>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    className="social-link"
                                >
                                    <FaTwitter className="mx-auto mt-3 scale-125 text-white hover:text-blue-600" />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="social-link"
                                >
                                    <FaInstagram className="mx-auto mt-3 scale-125 text-white hover:text-pink-500" />
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="mt-8 flex select-none flex-col items-center justify-center gap-4 sm:flex-row">
                    <p className="my-2 flex items-center gap-1 text-2xl text-white">
                        &copy; <span className="text-sm">copyright</span>
                    </p>
                    <Box>
                        <img
                            src={Logo}
                            alt="company logo"
                            className="h-10 rounded-xl border-2 border-white p-2"
                            loading="lazy"
                        />
                    </Box>
                </Box>
            </footer>
        </>
    );
}
