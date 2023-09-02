import React from 'react'
import Dashboard from "../Assets/Icons/dashboard.png"
import Patient from "../Assets/Icons/patient.png"

import Deposit from "../Assets/Icons/Icon.png"

import Servic from "../Assets/Icons/customer-service.png"

import support from "../Assets/Icons/Layer_x0020_1.png"
import Reports from "../Assets/Icons/report.png"
import logout from "../Assets/Icons/logout.png"


const SideBar = () => {

  
  return (
    <>
      <aside id="sidebar" className="sidebar" style={{backgroundColor:'#064FB8'}}>

        <ul className="sidebar-nav" id="sidebar-nav" style={{backgroundColor:"#064FB8"}}>

          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={Dashboard} className='pe-3' alt=''></img>
              <span>Dashboard</span>
            </a>
          </li>
          
          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={Patient} className='pe-3 mt-1' alt=''></img>
              <span>Patient Management</span>
            </a>
          </li>
         
          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={Deposit} className='pe-3 mt-1' alt=''></img>
              <span>Deposits Management</span>
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={Servic} className='pe-3 mt-1' alt=''></img>
              <span>Service Management</span>
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={support} className='pe-3 mt-2' alt=''></img>
              <span>Support / Chart</span>
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={Reports} className='pe-3 mt-1' alt=''></img>
              <span>Reports</span>
            </a>
          </li>
          <li className="nav-item" >
            <a className="nav-link " href="index.html">
              <img src={logout} className='pe-3 mt-2' alt=''></img>
              <span>Logout</span>
            </a>
          </li>


        </ul>

      </aside>

    </>
  )
}

export default SideBar

