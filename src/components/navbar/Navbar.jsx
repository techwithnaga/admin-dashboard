import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>
      <div className="rightMenu">
        <div className="item">
          <LanguageOutlinedIcon />
          <span>English</span>
        </div>
        <div className="item">
          <DarkModeOutlinedIcon />
        </div>
        <div className="item">
          <FullscreenExitOutlinedIcon />
        </div>

        <div className="item">
          <NotificationsNoneOutlinedIcon />
          <div className="counter">1</div>
        </div>

        <div className="item">
          <ChatBubbleOutlineOutlinedIcon />
          <div className="counter">1</div>
        </div>
        <div className="item">
          <ListOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
