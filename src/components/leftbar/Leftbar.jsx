import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import GroupIcon from "@mui/icons-material/Group";
import HearingIcon from "@mui/icons-material/Hearing";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import MenuLink from "../menuLink/MenuLink";
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeIcon />} text="Homepage" />
        <MenuLink icon={<ListIcon />} text="Lists" />
        <MenuLink icon={<ShoppingBasketIcon />} text="Products" />
        <MenuLink icon={<GroupIcon />} text="Groups" />
        <MenuLink icon={<FileCopyIcon />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualIcon />} text="Photos" />
        <MenuLink icon={<MovieCreationIcon />} text="Videos" />
        <MenuLink icon={<ScheduleIcon />} text="Schedule" />
        <MenuLink icon={<HearingIcon />} text="Wishlist" />
        <MenuLink icon={<SettingsIcon />} text="Settings" />
        <MenuLink icon={<ExitToAppIcon />} text="Logout" />
      </div>
    </div>
  );
}
