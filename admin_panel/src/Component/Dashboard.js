// // import React, { useState } from "react";
// // import { NavLink, useLocation,Outlet } from 'react-router-dom';

// // import {
// //     CDBSidebar,
// //     CDBSidebarContent,
// //     CDBSidebarFooter,
// //     CDBSidebarHeader,
// //     CDBSidebarMenu,
// //     CDBSidebarMenuItem,
// //   } from 'cdbreact';

// // const Dashboard = () => {
// //     const [activeItem, setActiveItem] = useState("/");
// //     const location = useLocation();

// //     const handleItemClick = (to) => {
// //         setActiveItem(to);
// //       };  
// //   return (
// //     <div>
           
// //         <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
// //       <CDBSidebar textColor="#fff" backgroundColor="#333">
// //         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
// //           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
// //             - {location.pathname}
// //           </a>
// //         </CDBSidebarHeader>

// //         <CDBSidebarContent className="sidebar-content">
// //           <CDBSidebarMenu>
// //             <NavLink to="/register" className={activeItem === "/register" ? "activeClicked" : ""} onClick={() => handleItemClick("/register")}>
// //               <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
// //             </NavLink>
// //             <NavLink to="/employee" className={activeItem === "/employee" ? "activeClicked" : ""} onClick={() => handleItemClick("/employee")}>
// //               <CDBSidebarMenuItem icon="table">Category</CDBSidebarMenuItem>
// //             </NavLink>
// //             <NavLink to="/training" className={activeItem === "/training" ? "activeClicked" : ""} onClick={() => handleItemClick("/training")}>
// //               <CDBSidebarMenuItem icon="chart-line">Donation</CDBSidebarMenuItem>
// //             </NavLink>
// //           </CDBSidebarMenu>
// //         </CDBSidebarContent>

// //         <CDBSidebarFooter style={{ textAlign: 'center' }}>
// //           <div style={{ padding: '20px 5px' }}>
// //             Sidebar Footer
// //           </div>
// //         </CDBSidebarFooter>
// //       </CDBSidebar>

// //       {/* Right-side content changes here */}
// //       <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
// //         <Outlet />
// //       </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default Dashboard
// import React from "react";
// import { NavLink, Outlet, useLocation } from 'react-router-dom';
// import {
//     CDBSidebar,
//     CDBSidebarContent,
//     CDBSidebarFooter,
//     CDBSidebarHeader,
//     CDBSidebarMenu,
//     CDBSidebarMenuItem,
// } from 'cdbreact';

// const Dashboard = () => {
//     const location = useLocation();

//     return (
//         <div style={{ display: 'flex', height: '100vh' }}>
//             <CDBSidebar textColor="#fff" backgroundColor="#333">
//                 <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//                     <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//                         - {location.pathname}
//                     </a>
//                 </CDBSidebarHeader>

//                 <CDBSidebarContent className="sidebar-content">
//                     <CDBSidebarMenu>
//                         <NavLink to="/dashboard/register" className={({ isActive }) => (isActive ? "activeClicked" : "")}>
//                             <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
//                         </NavLink>
//                         <NavLink to="/dashboard/category" className={({ isActive }) => (isActive ? "activeClicked" : "")}>
//                             <CDBSidebarMenuItem icon="table">Category</CDBSidebarMenuItem>
//                         </NavLink>
//                         <NavLink to="/dashboard/donation" className={({ isActive }) => (isActive ? "activeClicked" : "")}>
//                             <CDBSidebarMenuItem icon="chart-line">Donation</CDBSidebarMenuItem>
//                         </NavLink>
//                     </CDBSidebarMenu>
//                 </CDBSidebarContent>

//                 <CDBSidebarFooter style={{ textAlign: 'center' }}>
//                     <div style={{ padding: '20px 5px' }}>
//                         Sidebar Footer
//                     </div>
//                 </CDBSidebarFooter>
//             </CDBSidebar>

//             {/* Right-side content area */}
//             <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
//                 <Outlet />
//             </div>
//         </div>
//     );
// };
// export default Dashboard;
