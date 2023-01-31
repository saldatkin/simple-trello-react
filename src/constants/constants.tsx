import { NavbarItemType, TaskType } from "../types/types";

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
/*
export const tasks: TaskType[] = [
  {
    name: "Add icon",
    status: 'todo',
    description: "need to add icon to the navbar"
  },
  {
    name: "adjust picture", 
    status: 'todo',
    description: "remove extra paddings and correct positioning"
  },
  {
    name: "change font",
    status: 'todo',
    description: "change font on login page to Arial"
  },
  {
    name: "add footer",
    status: 'in progress',
    description: "need to add footer with social media links and google map"
  },
  {
    name: "add item to sidebar",
    status: 'todo',
    description: "add additional item 'about' to the menu sidebar"
  },
  {
    name: "change visibility",
    status: 'in progress',
    description: "display button only if user logged in"
  },
  {
    name: "fill with text",
    status: 'todo',
    description: "add history of company inside about section"
  },
  {
    name: "change font",
    status: 'todo',
    description: "change font on login page to Arial"
  },
  {
    name: "add footer",
    status: 'in progress',
    description: "need to add footer with social media links and google map"
  },
  {
    name: "add item to sidebar",
    status: 'todo',
    description: "add additional item 'about' to the menu sidebar"
  },
  {
    name: "change visibility",
    status: 'in progress',
    description: "display button only if user logged in"
  },
  {
    name: "fill with text",
    status: 'todo',
    description: "add history of company inside about section"
  },
]
*/
export const statuses: string[] = [
  "todo",
  "in progress",
  "code review",
  "done"
]

