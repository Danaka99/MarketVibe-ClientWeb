import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

  const [isOpenSidebarVal,setisOpenSidebarVal]=useState(false);
  return (
    <nav>
        <div className="container">
            <div className="row">
              <div className="col-sm-3 navPart1">
                <div className='catWrapper'>
                    <Button className="allCatTab align-items-center" onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                      <span className='icon1 mr-2'><IoMdMenu/></span>
                      <span class="text">ALL CATEGORIES</span>
                      <span className='icon2 ml-2'><FaAngleDown/></span>
                    </Button>
                    <div className={`sidebarNav ${isOpenSidebarVal===true?'open':''} `}>
                      <ul>
                           <li><Link to="/"><Button>Men<FaAngleRight className='ml-auto'/></Button></Link>
                           <div className='submenu'>
                                  <Link to="/"><Button>clothing</Button></Link>
                                  <Link to="/"><Button>footwear</Button></Link>
                                  <Link to="/"><Button>watches</Button></Link>
                                  <Link to="/"><Button>clothing</Button></Link>
                                  <Link to="/"><Button>footwear</Button></Link>
                                  <Link to="/"><Button>watches</Button></Link> 
                           </div>
                           </li>
                           <li><Link to="/"><Button>Women<FaAngleRight className='ml-auto'/></Button></Link>
                           <div className='submenu'>
                                  <Link to="/"><Button>clothing</Button></Link>
                                  <Link to="/"><Button>footwear</Button></Link>
                                  <Link to="/"><Button>watches</Button></Link>
                                  <Link to="/"><Button>clothing</Button></Link>
                                  <Link to="/"><Button>footwear</Button></Link>
                                  <Link to="/"><Button>watches</Button></Link> 
                           </div>
                           </li>
                           <li><Link to="/"><Button>Beauty</Button></Link></li>
                           <li><Link to="/"><Button>Watches</Button></Link></li>
                           <li><Link to="/"><Button>Kids</Button></Link></li>
                           <li><Link to="/"><Button>Gifts</Button></Link> </li>
                           <li><Link to="/"><Button>Men</Button></Link></li>
                           <li><Link to="/"><Button>Women</Button></Link></li>
                           <li><Link to="/"><Button>Beauty</Button></Link></li>
                           <li><Link to="/"><Button>Watches</Button></Link></li>
                           <li><Link to="/"><Button>Kids</Button></Link></li>
                           <li><Link to="/"><Button>Gifts</Button></Link> </li>
                      </ul>
                    </div>
                </div>
                
              </div>
              <div className='col-sm-9 navPart2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto' >
                    <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                    <li className='list-inline-item'>
                      <Link to="/"><Button> Men </Button></Link>
                      <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                    </li>
                    <li className='list-inline-item'><Link to="/"><Button>Women</Button></Link>
                      <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                    </li>
                    <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link>
                      <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                    </li>
                    <li className='list-inline-item'><Link to="/"><Button>Watches</Button></Link>
                      <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                    </li>
                     <li className='list-inline-item'><Link to="/"><Button>Kids</Button></Link>
                      <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                      </li>
                    <li className='list-inline-item'><Link to="/"><Button>Gifts</Button></Link>
                    <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                      </li>
                    <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link>
                    <div className='submenu shadow'>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link>
                          <Link to="/"><Button>clothing</Button></Link>
                          <Link to="/"><Button>footwear</Button></Link>
                          <Link to="/"><Button>watches</Button></Link> 
                      </div>
                      </li>
                     <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                </ul>
             </div>

            </div>
        </div>
    </nav>
  );
}

export default Navigation;
