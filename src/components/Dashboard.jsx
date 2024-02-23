import { Outlet } from "react-router-dom";

function Dashboard(){
        return (
            <>
            <h1>SideBar</h1>
            <Outlet/>
            </>
        );
    }
    export default Dashboard;
