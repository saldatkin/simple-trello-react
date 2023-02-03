import { NavbarItemType } from "../types/types";

export const navbarItems: NavbarItemType[] = [
  {
    id: 1,
    name: "Logo",
    route:'',
  },
  {
    id: 2,
    name: "Add task",
    route:'/add',
  },
  {
    id: 3,
    name: "Tasks",
    route:'/tasks',
  },
  {
    id: 4,
    name: "Home",
    route:'/home',
  },
];

export const statuses: string[] = [
  "todo",
  "in progress",
  "code review",
  "done"
]

export const initialStrings = {
  name:'',
  description: '',
  status: ''
}

