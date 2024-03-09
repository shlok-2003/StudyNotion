import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FaChevronUp } from '@/icons';

import { Button } from '@components/common/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@components/common/sheet';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
    ({ className, children, ...props }, ref) => {
        // const Comp = 'aside';

        // const [open, setOpen] = useState(true);

        // const toggleSidebar = () => {
        //     setOpen((prevState) => !prevState);
        // };

        return (
            <Sheet {...props}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
        );
    },
);
export default Sidebar;
