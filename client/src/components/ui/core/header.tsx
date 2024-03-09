import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from '@/icons';

import Icon from '/icon.svg';

import { Button } from '@components/common/button';
import { Box, Wrapper } from '@components/common/containers';
import { Typography } from '@components/common/typography';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuContent,
    NavigationMenuTrigger,
} from '@components/common/navigation-menu';
import {
    DropdownMenu,
    DropdownMenuSub,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from '@components/common/dropdown-menu';

import { navLink, linkProps } from '@/routes';

type MenuProps = {
    data: linkProps[];
    name: string;
};

const linkStyleSimple =
    'transition-all duration-100 ease-in-out hover:font-semibold hover:text-blue-700';

const linkStyleActive = `font-bold text-blue-700`;

const MobileSubMenu = ({ data, name }: MenuProps) => {
    return (
        <>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className="data-[state=open]:bg-white">
                    <Wrapper>{name}</Wrapper>
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent className=" max-w-20 divide-y divide-slate-100">
                    {data.map((child, childIndex) => (
                        <DropdownMenuItem
                            key={childIndex}
                            className="rounded-none"
                        >
                            <NavLink
                                to={child.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${linkStyleActive}`
                                        : `${linkStyleSimple}`
                                }
                            >
                                {child.name}
                            </NavLink>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
        </>
    );
};

const MobileMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="px-2 md:hidden">
                <Button variant="outline">
                    <HiOutlineMenuAlt1 className="text-2xl" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-20">
                <DropdownMenuGroup>
                    {navLink.map((link, index) =>
                        link?.children === undefined ? (
                            <Box key={index}>
                                <DropdownMenuItem>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? `${linkStyleActive}`
                                                : `${linkStyleSimple}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </DropdownMenuItem>
                                {index !== navLink.length - 1 && (
                                    <DropdownMenuSeparator />
                                )}
                            </Box>
                        ) : (
                            <MobileSubMenu
                                key={index}
                                name={link.name}
                                data={link.children || []}
                            />
                        ),
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

const DesktopMenu = ({ data, name }: MenuProps) => {
    const List = 'ul';

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-rich-black-900 text-rich-black-5 data-[active]:bg-rich-black-900 data-[state=open]:bg-rich-black-900 hover:bg-rich-black-900 focus:bg-rich-black-900 px-0 text-base font-light">
                        <Box className="text-rich-black-5 cursor-pointer">
                            {name}
                        </Box>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <List className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                            {data.map((child, childIndex) => (
                                <NavLink
                                    key={childIndex}
                                    to={child.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${linkStyleActive}`
                                            : `${linkStyleSimple}`
                                    }
                                >
                                    {child.name}
                                </NavLink>
                            ))}
                        </List>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default function Header() {
    return (
        <header className="bg-rich-black-900 relative border-b border-solid border-slate-600 px-4 py-2 sm:px-8 lg:px-12">
            <nav className="flex items-center justify-between">
                <MobileMenu />
                <Box className="flex items-center gap-2">
                    <img
                        src={Icon}
                        className="aspect-square h-7 select-none sm:h-8"
                        loading="lazy"
                    />
                    <Typography
                        variant="h2"
                        className="select-none border-none pb-0 text-2xl font-semibold text-white max-lg:text-2xl max-md:text-lg"
                    >
                        StudyNotion
                    </Typography>
                </Box>

                {/* This is the main navbar */}
                <Box className="flex items-center max-md:hidden sm:gap-5 lg:gap-8">
                    {navLink?.map((link, index) =>
                        link?.children ? (
                            <DesktopMenu
                                key={index}
                                name={link.name}
                                data={link.children || []}
                            />
                        ) : (
                            <Box
                                key={index}
                                className="text-rich-black-5 cursor-pointer"
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `${linkStyleActive}`
                                            : `${linkStyleSimple}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </Box>
                        ),
                    )}
                </Box>

                <Box className="mr-3 flex gap-2 sm:gap-5 lg:gap-8">
                    <Button className="bg-rich-yellow-50 text-rich-black-900 h-min overflow-hidden p-0 font-extrabold hover:scale-[0.98]">
                        <NavLink
                            to="/login"
                            className="w-full px-3 py-2 md:px-5"
                        >
                            Login
                        </NavLink>
                    </Button>
                </Box>
            </nav>
        </header>
    );
}
