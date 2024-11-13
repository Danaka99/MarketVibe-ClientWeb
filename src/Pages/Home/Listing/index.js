import SideBar from "../../../Components/SideBar";
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import ProductItem from "../../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';

const Listing = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const [productView, setProductView]= useState('three');
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <section className="product_Listing_Page">
        <div class="container">
            <div className="productListing d-flex">
                <SideBar/>
                <div className="content_right">
                  <img src="https://cmsimages.shoppersstop.com/MAC_Carousel_Web_ab6c338b91/MAC_Carousel_Web_ab6c338b91.jpg" 
                  className="w-100" alt="" style={{borderRadius:'8px'}}/>

                  <div className="showBy mt-3 mb-3 d-flex align-items-center">
                    <div className="d-flex align-items-center btnWrapper">
                        <Button className={productView==='one' && 'act'} onClick={()=>setProductView('one')}><IoMdMenu /></Button>
                        <Button className={productView==='two' && 'act'}onClick={()=>setProductView('two')}><CgMenuGridR /></Button>
                        <Button className={productView==='three' && 'act'}onClick={()=>setProductView('three')}><TfiLayoutGrid4Alt /></Button>
                    </div>
                    <div className="ml-auto showByFilter">
                        <Button  onClick={handleClick} >Show 10 <FaAngleDown /></Button>
                        <Menu
                            className="w-100 showPerPageDropDown"
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={openDropDown}
                            onClose={handleClose}
                            MenuListProps={{
                              'aria-labelledby': 'basic-button',
                            }}
                          >
                            <MenuItem onClick={handleClose}>10</MenuItem>
                            <MenuItem onClick={handleClose}>20</MenuItem>
                            <MenuItem onClick={handleClose}>30</MenuItem>
                            <MenuItem onClick={handleClose}>40</MenuItem>
                            <MenuItem onClick={handleClose}>50</MenuItem>
                            <MenuItem onClick={handleClose}>60</MenuItem>
                          </Menu>
                    </div>
                  </div>

                  <div className="productListing">
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/> 
                      <ProductItem itemView={productView}/>
                      <ProductItem itemView={productView}/>

                  </div>

                  <div className="d-flex align-items-center justify-content-center mt-5">
                         <Pagination count={10} color="primary" size="large"  />
                  </div>

                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Listing;
