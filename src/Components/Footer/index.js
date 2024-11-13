import { IoShirtOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="topInfo row">
                <div className="col d-flex align-items-center">
                    <span>
                        <IoShirtOutline/>
                    </span>
                    <span className="ml-2">
                        Everyday fresh products
                    </span>
                </div>
                <div className="col d-flex align-items-center">
                    <span>
                        <TbTruckDelivery/>
                    </span>
                    <span className="ml-2">
                        Free delivery for order over $70
                    </span>
                </div>
                <div className="col d-flex align-items-center">
                    <span>
                        <TbRosetteDiscount/>
                    </span>
                    <span className="ml-2">
                        Daily Mega discounts
                    </span>
                </div>
                <div className="col d-flex align-items-center">
                    <span>
                        <BiHappyHeartEyes/>
                    </span>
                    <span className="ml-2">
                        Best price on the market
                    </span>
                </div>
            </div>

            <div className="row mt-5 linksWrap">
                <div className="col">
                    <h5>COMPANY</h5>
                    <ul>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Delivery Information</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Terms & Conditions</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                        <li><Link to="#">Support Center</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>ACCOUNT</h5>
                    <ul>
                        <li><Link to="#">Sign In</Link></li>
                        <li><Link to="#">View Cart</Link></li>
                        <li><Link to="#">My Wishlist</Link></li>
                        <li><Link to="#">Track My Order</Link></li>
                        <li><Link to="#">Help Ticket</Link></li>
                        <li><Link to="#">Shipping Details</Link></li>
                        <li><Link to="#">Compare products</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>

                    </ul>
                </div>

                <div className="col">
                    <h5>CORPORATE</h5>
                    <ul>
                        <li><Link to="#">Become a Vendor</Link></li>
                        <li><Link to="#">Affiliate Program</Link></li>
                        <li><Link to="#">Farm Business</Link></li>
                        <li><Link to="#">Farm Careers</Link></li>
                        <li><Link to="#">Our Suppliers</Link></li>
                        <li><Link to="#">Accessibility</Link></li>
                        <li><Link to="#">Promotions</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>POPULAR</h5>
                    <ul>
                        <li><Link to="#">Milk & Flavoured Milk</Link></li>
                        <li><Link to="#">Butter and Margarine</Link></li>
                        <li><Link to="#">Eggs Substitutes</Link></li>
                        <li><Link to="#">Marmalades</Link></li>
                        <li><Link to="#">Sour Cream and Dips</Link></li>
                        <li><Link to="#">Tea & Kombucha</Link></li>
                        <li><Link to="#">Cheese</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                        <li><Link to="#">Other</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>POPULAR</h5>
                    <ul>
                        <li><Link to="#">Milk & Flavoured Milk</Link></li>
                        <li><Link to="#">Butter and Margarine</Link></li>
                        <li><Link to="#">Eggs Substitutes</Link></li>
                    </ul>
                    <h5>POPULAR</h5>
                    <ul>
                        <li><Link to="#">Marmalades</Link></li>
                        <li><Link to="#">Sour Cream and Dips</Link></li>
                        <li><Link to="#">Tea & Kombucha</Link></li>
                        <li><Link to="#">Cheese</Link></li>
                        <li><Link to="#">Other</Link></li>
                    </ul>
                </div>
            </div>

            <div className="copyright mt-3 pt-3 pb-3 d-flex align-items-center">
              <p className="mb-0">© Copyright 2024. All rights reserved</p>
                <ul className="list list-inline ml-auto mb-0 d-flex align-items-center">
                    <li className="list-inline-item">
                        <Link><FaFacebook/></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link><FaInstagram/></Link>
                    </li>
                    <li className="list-inline-item">
                        <Link><IoLogoWhatsapp/></Link>
                    </li>
                </ul>
            </div>


        </div>
    </footer>
  );
}

export default Footer;
