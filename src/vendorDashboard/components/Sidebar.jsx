import React from "react";
import { FaBuilding, FaBoxOpen, FaThList, FaUser } from "react-icons/fa";

const SideBar = ({
    showFirmHandler,
    showProductHandler,
    showAllProductsHandler,
    showFirmTitle
}) => {
    return (
        <div className="sideBarSection">
            <ul>
                {showFirmTitle && (
                    <li onClick={showFirmHandler}>
                        <FaBuilding /> Add Firm
                    </li>
                )}
                <li onClick={showProductHandler}>
                    <FaBoxOpen /> Add Product
                </li>
                <li onClick={showAllProductsHandler}>
                    <FaThList /> All Products
                </li>
                <li>
                    <FaUser /> User Details
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
