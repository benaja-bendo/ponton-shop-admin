import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideButtonNavMenu from '../buttons/SideButtonNavMenu';
// import Swal from 'sweetalert2';
// import SideButtonNavMenu from '../../components/admin/buttons/SideButtonNavMenu';

const Sidebar = () => {

    const navigate = useNavigate()
    // const LogoutSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post("http://localhost:8000/api/v1/logout").then((response) => {
    //         console.log(response)
    //         if (response.status === 200) {
    //             localStorage.removeItem('access_token');
    //             localStorage.removeItem('auth_name');

    //             // Swal.fire({
    //             //     icon: 'success',
    //             //     text: 'Déconnexion réussi avec success !',
    //             // });
    //             navigate("/")
    //         }
    //     }).catch((erreurs) => {
    //         console.log(erreurs)
    //     })
    // }

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Accueil</div>
                    <Link className="nav-link" to="/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/admin/profile">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-user"></i></div>
                        profile
                    </Link>
                    <div className="sb-sidenav-menu-heading">Roles et permissions</div>
                    <Link className="nav-link" to="/admin/Listes/roles">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-user-shield"></i></div>
                        Roles
                    </Link>
                    <Link className="nav-link" to="/admin/Listes/permissions">
                        <div className="sb-nav-link-icon"><i className="fa-solid fa-shield-check"></i></div>
                        permissions
                    </Link>
                    <div className="sb-sidenav-menu-heading">products</div>
                    {/* <SideButtonNavMenu title={"categories Produits"} type={"category"} name={"categoryProduct"} path={"product"} /> */}
                    {/* <SideButtonNavMenu title={"sous catégories produit"} type={"sub-category"} name={"SubcategoryProduct"} path={"product"} /> */}
                    {/* <SideButtonNavMenu title={"produits"} name={"product"} type={""} path={"product"} /> */}

                    <div className="sb-sidenav-menu-heading">shops</div>

                    {/* <SideButtonNavMenu title={"categories"} type={"category"} name={"categoryShop"} path={"shop"} /> */}
                    {/* <SideButtonNavMenu title={"shops"} name={"shop"} type={""} path={"shop"} /> */}
                    {/* <div className="sb-sidenav-menu-heading">Interface</div>
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                        data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        Layouts
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="layout-static.html">Static Navigation</Link>
                            <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                        </nav>
                    </div>
                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                        aria-expanded="false" aria-controls="collapsePages">
                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                        Pages
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                        data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                                data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                aria-controls="pagesCollapseAuth">
                                Authentication
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                data-bs-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="login.html">Login</Link>
                                    <Link className="nav-link" to="register.html">Register</Link>
                                    <Link className="nav-link" to="password.html">Forgot Password</Link>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                                data-bs-target="#pagesCollapseError" aria-expanded="false"
                                aria-controls="pagesCollapseError">
                                Error
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                                data-bs-parent="#sidenavAccordionPages">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="401.html">401 Page</Link>
                                    <Link className="nav-link" to="404.html">404 Page</Link>
                                    <Link className="nav-link" to="500.html">500 Page</Link>
                                </nav>
                            </div>
                        </nav>
                    </div>
                    <div className="sb-sidenav-menu-heading">Addons</div>
                    <Link className="nav-link" to="charts.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                        Charts
                    </Link>
                    <Link className="nav-link" to="tables.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                        Tables
                    </Link> */}
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {/* <div className="btn btn-danger" onClick={LogoutSubmit}>Déconnexion</div> */}
            </div>
        </nav>
    );
};

export default Sidebar;