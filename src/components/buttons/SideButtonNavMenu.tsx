import React from 'react';
import { Link } from 'react-router-dom';

const SideButtonNavMenu = ({ title, name, path, type }) => {

    var viewNav = "";
    if (type === "category") {
        viewNav =
            <>
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                    data-bs-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    {title}
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
                <div className="collapse" id={`collapse${name}`} aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to={`/admin/Add/category/${path}`}>Ajout {path}</Link>
                        <Link className="nav-link" to={`/admin/Listes/category/${path}`}>Listes {path}</Link>
                    </nav>
                </div>
            </>


    } else if (type === "sub-category") {
        viewNav =
            <>
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                    data-bs-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    {title}
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
                <div className="collapse" id={`collapse${name}`} aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to={`/admin/Add/category/sub/${path}`}>Ajout sous-catégorie {path}</Link>
                        <Link className="nav-link" to={`/admin/Listes/category/sub/${path}`}>Listes sous-catégorie {path}</Link>
                    </nav>
                </div>
            </>


    } else {
        viewNav =
            <>
                <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse"
                    data-bs-target={`#collapse${name}`} aria-expanded="false" aria-controls={`collapse${name}`}>
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    {title}
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </Link>
                <div className="collapse" id={`collapse${name}`} aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to={`/admin/Add/${path}`}>Ajout {path}</Link>
                        <Link className="nav-link" to={`/admin/Listes/${path}`}>Listes {path}</Link>
                    </nav>
                </div>
            </>

    }

    return (
        <>
            {viewNav}
        </>
    );
};

export default SideButtonNavMenu;