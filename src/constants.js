import { AdminPage, LoginPage, Person1Page, UserPage } from "./Pages";

export const constants = [
  {
    subDomain: "www",
    app: LoginPage,
    main: true,
  },
  {
    subDomain: "admin",
    app: AdminPage,
    main: false,
  },
  {
    subDomain: "user",
    app: UserPage,
    main: false,
  },
  {
    subDomain: "person",
    app: Person1Page,
    main: false,
  },
];