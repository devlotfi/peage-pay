import { faHome, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarDropdown } from "@peage-pay-web/auth";
import { AdminDashboardLayout, MenuItem } from "@peage-pay-web/ui";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AdminDashboardLayout>
      <AdminDashboardLayout.Sidebar>
        <AdminDashboardLayout.Sidebar.Main title="General admin">
          <NavbarDropdown></NavbarDropdown>
          <MenuItem
            onClick={() => navigate("/dashboard")}
            variant={
              location.pathname === "/dashboard" ? "primary" : "base-200"
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Home</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/dashboard/base-user/list")}
            variant={
              location.pathname === "/dashboard/base-user/list"
                ? "primary"
                : "base-200"
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Global user list</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/dashboard/toll-admin/list")}
            variant={
              location.pathname === "/dashboard/toll-admin/list"
                ? "primary"
                : "base-200"
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUserGear}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Toll admin list</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/dashboard/gate-admin/list")}
            variant={
              location.pathname === "/dashboard/gate-admin/list"
                ? "primary"
                : "base-200"
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUserGear}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Gate admin list</MenuItem.Text>
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/dashboard/moderator/list")}
            variant={
              location.pathname === "/dashboard/moderator/list"
                ? "primary"
                : "base-200"
            }
            className="w-full mb-[0.5rem]"
          >
            <MenuItem.Icon>
              <FontAwesomeIcon icon={faUserGear}></FontAwesomeIcon>
            </MenuItem.Icon>
            <MenuItem.Text>Moderator list</MenuItem.Text>
          </MenuItem>
        </AdminDashboardLayout.Sidebar.Main>
        <AdminDashboardLayout.Sidebar.Overlay></AdminDashboardLayout.Sidebar.Overlay>
      </AdminDashboardLayout.Sidebar>
      <AdminDashboardLayout.Main>
        <AdminDashboardLayout.Navbar>
          <AdminDashboardLayout.Navbar.LeftContent></AdminDashboardLayout.Navbar.LeftContent>
          <AdminDashboardLayout.Navbar.RightContent></AdminDashboardLayout.Navbar.RightContent>
        </AdminDashboardLayout.Navbar>
        <AdminDashboardLayout.Content className="p-[1rem]">
          <Outlet></Outlet>
        </AdminDashboardLayout.Content>
      </AdminDashboardLayout.Main>
    </AdminDashboardLayout>
  );
};

export default DashboardLayout;
