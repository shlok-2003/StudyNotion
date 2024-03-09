import { NavLink } from 'react-router-dom';
import CompanyIcon from '/icon.svg';

import { Box, Wrapper } from '@components/common/containers';
import { Typography } from '@components/common/typography';
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

import { linkProps } from '@/routes';
import { mobileSidebarLink } from '@/data/dashboard-link';

type MenuProps = {
    data: linkProps[];
    name: string;
    children?: React.ReactNode;
};

const linkStyleSimple =
    'transition-all duration-100 ease-in-out hover:font-semibold hover:text-blue-700';
const linkStyleActive = `font-bold text-blue-700`;

const MobileSubMenu = ({ data, name, children }: MenuProps) => {
    return (
        <>
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className="gap-2 data-[state=open]:bg-white">
                    {children}
                    <Wrapper>{name}</Wrapper>
                </DropdownMenuSubTrigger>

                <DropdownMenuSubContent className="max-w-20 divide-y divide-slate-100">
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

export const DashboardBar = () => {
    // const { user } = useSelector((state) => state.profile);

    const user = {
        name: 'John Doe',
        image: `https://api.dicebear.com/7.x/open-peeps/svg`,
    };

    return (
        <header className="bg-rich-black-900 sticky top-0 border-b border-solid border-slate-600 px-4 py-2 sm:px-8 lg:px-12">
            <nav className="flex items-center justify-between">
                <Box className="flex items-center gap-2">
                    <img
                        src={CompanyIcon}
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

                <Box className="mr-3 flex gap-2 sm:gap-5 lg:gap-8">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="overflow-hidden rounded-full">
                            <Box className="aspect-square h-10 select-none object-contain">
                                <img
                                    src={user.image}
                                    className="aspect-square h-full w-full object-cover"
                                />
                            </Box>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-44">
                            <DropdownMenuGroup>
                                {mobileSidebarLink.map((link, index) => {
                                    const Icon = link?.icon || 'span';
                                    if (link?.children === undefined) {
                                        return (
                                            <Box key={index}>
                                                <DropdownMenuItem className="flex items-center gap-2">
                                                    <Icon className="aspect-square h-5" />
                                                    <NavLink
                                                        to={link.path}
                                                        className={({
                                                            isActive,
                                                        }) =>
                                                            isActive
                                                                ? `${linkStyleActive}`
                                                                : `${linkStyleSimple}`
                                                        }
                                                    >
                                                        {link.name}
                                                    </NavLink>
                                                </DropdownMenuItem>
                                                {index !==
                                                    mobileSidebarLink.length -
                                                        1 && (
                                                    <DropdownMenuSeparator />
                                                )}
                                            </Box>
                                        );
                                    } else {
                                        return (
                                            <MobileSubMenu
                                                key={index}
                                                name={link.name}
                                                data={link?.children || []}
                                            >
                                                <Icon className="aspect-square h-5" />
                                            </MobileSubMenu>
                                        );
                                    }
                                })}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Box>
            </nav>
        </header>
    );
};

export default DashboardBar;
