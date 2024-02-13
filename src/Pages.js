import { Route, Routes } from "react-router-dom"

export const RouterRoute = () => {
  
  return (
  <Routes>
    <Route path="/" element={<UserPage />} />
    <Route path="/" element={<LoginPage />} />
    <Route path="/" element={<Person1Page />} />
    <Route path="/" element={<AdminPage />} />
  </Routes>
  )
};

export const LoginPage = () => {
  return <p>Login page</p>
}
export const AdminPage = () => {
  return <p>Admin page</p>
}
export const UserPage = () => {
  return <p>User page</p>
}
export const Person1Page = () => {
  return <p>person page</p>
}

