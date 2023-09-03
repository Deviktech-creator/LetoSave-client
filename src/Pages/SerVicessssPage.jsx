import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Badge, Divider, Stack } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ServiceManagmentPage from "./ServiceManagmentPage";
import { Link } from "react-router-dom";
import LogoutModal from "../Components/LogoutModal";
import { useAuth } from "../contexts/AuthContext";

const drawerWidth = 280;

const SerVicessssPage = () => {
  const { currentUser } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [open, setOpen] = useState(window.innerWidth >= 960);
  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 960);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutClose = () => {
    setShowLogoutModal(false);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
  };

  return (
    <div style={{ display: "contents" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          marginLeft: open ? drawerWidth : 0,
          width: `calc(100% - ${open ? drawerWidth : 0}px)`,
        }}
        style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2, ...(open && {}) }}
            style={{ width: "1.5em", height: "2em" }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            className="d-none d-lg-block"
          >
            Service Management
          </Typography>

          <Stack
            spacing={4}
            direction="row"
            sx={{ color: "action.active", marginLeft: "auto" }}
          >
            <Link className="nav-link" to="/user/Support/Chart-Management">
              <Badge color="secondary" badgeContent={0}>
                <MailIcon
                  sx={{ fontSize: 23, color: "#FF7070" }}
                  style={{ marginTop: "10px" }}
                />
              </Badge>
            </Link>
            <Link to="/user/Notification">
              <Badge color="secondary" showZero>
                <NotificationsRoundedIcon
                  sx={{ fontSize: 25 }}
                  className="mt-2"
                />
              </Badge>
            </Link>
            <Badge color="secondary" showZero>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Link
                to="/user/Profile"
                className="ms-3"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h6 className="admin-name">{currentUser && currentUser.hospitalName}</h6>
                <p className="Adin">Admin</p>
              </Link>{" "}
            </Badge>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: 0,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            bgcolor: "#064FB8",
            color: "white",
            width: drawerWidth,
          },
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#0749A8", paddingTop: "13px" }}
        >
          <img
            src="/images/Group 329.png"
            alt=""
            style={{ width: "35px", height: "35px" }}
          ></img>
          <h1
            className="fw-bold ms-2"
            style={{ fontSize: "1.8em", color: "white", letterSpacing: "3px" }}
          >
            LetoSave
          </h1>
        </div>
        <Divider />
        <List>
          <ListItem>
            <img src="/images/dashboard.png" className="me-3" alt=""></img>
            <Link className="nav-link" to="/">
              <ListItemText primary="Dashboard" />
            </Link>
          </ListItem>
          <ListItem>
            <img src="/images/patient.png" className="me-3" alt=""></img>
            <Link className="nav-link" to="/user/patient-Management">
              <ListItemText primary="Patient Management" />
            </Link>
          </ListItem>

          <ListItem>
            <img src="/images/Icon.png" className="me-3" alt=""></img>
            <Link className="nav-link" to="/user/Deposite-Management">
              <ListItemText primary="Deposits Management" />
            </Link>
          </ListItem>
          <ListItem>
            <img
              src="/images/customer-service.png"
              className="me-3"
              alt=""
            ></img>
            <Link className="nav-link" to="/user/service-Management">
              <ListItemText primary="Service Management" />
            </Link>
          </ListItem>
          <ListItem>
            <img src="/images/Layer_x0020_1.png" className="me-3" alt=""></img>
            <Link className="nav-link" to="/user/Support/Chart-Management">
              <ListItemText primary="Support / Chart" />
            </Link>
          </ListItem>
          <ListItem>
            <img src="/images/report.png" className="me-3" alt=""></img>
            <Link className="nav-link" to="/user/Reports-Management">
              <ListItemText primary="Reports" />
            </Link>
          </ListItem>
          <ListItem className="cursor-pointer">
            <img src="/images/logout.png" className="me-3" alt=""></img>

            <ListItemText primary="Logout" onClick={handleLogoutClick} />
          </ListItem>
        </List>
      </Drawer>

      <main
        style={{
          flexGrow: 1,
          marginLeft: open ? drawerWidth : 0,
          backgroundColor: "wheate",
        }}
      >
        <ServiceManagmentPage />
        <LogoutModal
          show={showLogoutModal}
          onClose={handleLogoutClose}
          onLogout={handleLogoutConfirm}
        />
      </main>
    </div>
  );
};

export default SerVicessssPage;
