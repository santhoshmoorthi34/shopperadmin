import React from 'react'
import './sidebar.css'
import add_product_icon from "../Admin_Assets/Product_Cart.svg";
import add_productlist_icon from "../Admin_Assets/Product_list_icon.svg";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>


<Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebaritem">
          <img src={add_product_icon} alt="" />
        
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebaritem">
    
          <img src={add_productlist_icon} alt="" />
          <p>ListProduct</p>
        </div>
      </Link>

      
    </div>
  )
}

export default Sidebar
