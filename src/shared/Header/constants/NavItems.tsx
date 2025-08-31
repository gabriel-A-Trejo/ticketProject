import { NavItem } from "@/shared/types/types";
import { HomePath, TicketsPath } from "./path";
import { LucideLibrary, LucideBook} from "lucide-react";



export const navItems: NavItem[] = [
    {
        title: 'All Tickets',
        icon: <LucideLibrary />,
        href: HomePath()
    },
    {
        title: 'My Tickets',
        icon: <LucideBook />,
        href: TicketsPath()
    }
]

export const closedClassName =
  "text-background opacity-0 transition-all duration-300 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";