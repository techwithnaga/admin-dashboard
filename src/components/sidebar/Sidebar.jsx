import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="top">
        <h2 className="title">Naga Admin</h2>
      </div>
      <hr />
      <div className="mid">
        <ul>
          <p className="title">MAIN</p>
          <ul>
            <li>
              <DashboardIcon className="icon"></DashboardIcon>Dashboard
            </li>
          </ul>
        </ul>

        <ul>
          <p className="title">LISTS</p>
          <li onClick={() => navigate("/users")}>
            <GroupOutlinedIcon className="icon" />
            Users
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            Products
          </li>
          <li>
            <BorderColorIcon className="icon" />
            Orders
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            Delivery
          </li>
        </ul>

        <ul>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            Stats
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            Notifications
          </li>
        </ul>

        <ul>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            System Health
          </li>
          <li>
            <BookOutlinedIcon className="icon" />
            Logs
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            Settings
          </li>
        </ul>

        <ul>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            Profile
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            Logout
          </li>
        </ul>
      </div>
      <div className="bottom"> Color Options </div>
    </div>
  );
};

export default Sidebar;
