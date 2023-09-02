
// export default SupportChartnewPage
// import React from 'react'

// const SerVicessssPage = () => {
//   return (
//     <>
      
//     </>
//   )
// }

// export default SerVicessssPage
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import MailIcon from '@mui/icons-material/Mail';
import Boxes from "../Components/Dashboardhome/Boxes"
import { Avatar, Badge, Divider, Stack } from '@mui/material';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Logo from "../Components/Assets/Icons/Group 329.png"
import iconnoone from "../Components/Assets/Icons/dashboard.png"
import Patient from "../Components/Assets/Icons/patient.png"
import Customer from "../Components/Assets/Icons/customer-service.png"
import Ellips from "../Components/Assets/Icons/Icon.png"
import Layer from "../Components/Assets/Icons/Layer_x0020_1.png"
import report from "../Components/Assets/Icons/report.png"
import logout from "../Components/Assets/Icons/logout.png"
import Table from "../Components/Dashboardhome/Table"
import PatientManagementPage from './PatientManagementPage';
import PateintDetail from '../Components/PatientManagementComponents/PateintDetail';
import DepositManagment from './DepositManagment';
import ServiceManagmentPage from './ServiceManagmentPage';
import ServiceManagmentAdd from '../Components/ServiceManagmentAdd';
import NotificationCenter from './user/NotificationCenter';
import Reports from './Reports';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';







const drawerWidth = 280;


const SupportChartnewPage = () => {
    const { currentUser } = useAuth();
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <div style={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ marginLeft: open ? drawerWidth : 0, width: `calc(100% - ${open ? drawerWidth : 0}px)` }} style={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2, ...(open && {}) }}
                        style={{ width: '1.5em', height: '2em' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>


                    <Stack spacing={4} direction="row" sx={{ color: 'action.active', marginLeft: 'auto' }}>
                        <Badge color="secondary" badgeContent={0}>
                            <MailIcon sx={{ fontSize: 23, color: '#FF7070' }} style={{ marginTop: "10px" }} />
                        </Badge>
                        <Badge color="secondary" showZero>
                            <NotificationsRoundedIcon sx={{ fontSize: 25, }} className='mt-2' />
                        </Badge>
                        <Badge color="secondary" showZero>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <a href="!#" className='ms-3' style={{ textDecoration: "none", color: "black" }}>{currentUser.hospitalName}<p className='Adin'>Admin</p></a>
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


                    '& .MuiDrawer-paper': {
                        bgcolor: "#064FB8",
                        color: "white",
                        width: drawerWidth,

                    },
                }}

            >
                <div className='d-flex justify-content-center' style={{ backgroundColor: "#0749A8", paddingTop: "13px" }}>
                    <img src={Logo} alt='' style={{ width: '35px', height: "35px" }}></img>
                    <h1 className='fw-bold ms-2' style={{ fontSize: "1.8em", color: "white", letterSpacing: '3px' }}>
                        LetoSave
                    </h1>
                </div>
                <Divider />
                <List >
                        {/* {['Dashboard', 'Patient Management', 'Deposits Management', 'Service Management', 'Support / Chart', 'Reports', 'Logout'].map((text, index) => ( */}
                        <ListItem>
                            <img src={iconnoone} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/">
                                <ListItemText primary='Dashboard' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={Patient} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/user/patient-Management">
                                <ListItemText primary='Patient Management' />
                            </Link>
                        </ListItem>

                        <ListItem>
                            <img src={Ellips} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/user/Deposite-Management">
                                <ListItemText primary='Deposits Management' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={Customer} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/user/service-Management">
                            <ListItemText primary='Service Management' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={Layer} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/user/Support/Chart-Management">
                            <ListItemText primary='Support / Chart' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={report} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/user/Reports-Management">
                            <ListItemText primary='Reports' />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <img src={logout} className='me-3' alt=''></img>
                            <Link className="nav-link" to="/user/Reports-Management">
                            <ListItemText primary='Logout' />
                            </Link>
                        </ListItem>
                        {/* ))} */}

                    </List>


            </Drawer>

            <main style={{ flexGrow: 1, marginLeft: open ? drawerWidth : 0, backgroundColor: 'wheate' }}>

                {/* <Boxes />
                <Table /> */}
                {/* <PatientManagementPage/> */}
                {/* <PateintDetail/> */}
                {/* <DepositManagment/> */}
                {/* <ServiceManagmentPage/> */}
                {/* <ServiceManagmentAdd/> */}
                {/* <NotificationCenter/> */}
                {/* <Reports/> */}
            </main>
        </div>
    );
};

export default SupportChartnewPage;
