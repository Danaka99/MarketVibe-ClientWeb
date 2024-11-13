import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from "../CountryDropdown";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import Searchbox from './Searchbox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {

  const context = useContext(MyContext);
   
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>Covid 19</b> epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                  <Link to={'/'}><img src={Logo} alt='Logo ' /></Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part2 '>

                {
                  context.countryList.length!==0 && <CountryDropdown/>
                }
                  <Searchbox/>

                  <div className="part3 d-flex align-items-center ml-auto">
                    {
                      context.isLogin!==true? <Link to="/signin"><Button className='btn-blue btn-round mr-3'>Sign In</Button></Link> :
                      <Button className='circle mr-3'><FiUser/></Button>
                    }
                      
                      <div className="ml-auto cartTab d-flex align-items-center">
                      <span className="price">$3.29</span>
                      <Button className='circle ml-2'><BsCart /></Button>
                      <span className="count d-flex align-items-center justify-content-center">1</span>
                      </div>
                  </div>
                  
              </div>
            </div>
          </div>
        </header>

        <Navigation/>

      </div>
    </>
  );
}

export default Header;
