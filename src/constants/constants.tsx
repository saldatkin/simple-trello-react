import { NavbarItemType } from "../types/types";

export const NAVBAR_ITEMS: NavbarItemType[] = [
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
];

export const STATUSES: string[] = [
  "todo",
  "in progress",
  "code review",
  "done"
]

export const INITIAL_STRINGS = {
  name:'',
  description: '',
  status: ''
}

