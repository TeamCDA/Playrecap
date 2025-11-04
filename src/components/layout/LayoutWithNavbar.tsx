import { Outlet } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";


const LayoutWithNavbar = () => {
  return (
        <>
      <CustomNavbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutWithNavbar