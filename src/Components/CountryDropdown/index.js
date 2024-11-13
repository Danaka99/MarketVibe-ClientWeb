import React, { useContext, useEffect, useState } from 'react';  // useState is imported along with other hooks
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoSearch, IoClose } from "react-icons/io5";  // Combined import for icons
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);  // Renamed with camelCase `setIsOpenModal`
  const [selectedTab, setSelectedTab] = useState(null);  // Proper camelCase for state setters
  const [countryList, setCountryList] = useState([]);   // Renamed setCountryList to match camelCase convention
  const [filteredCountryList, setFilteredCountryList] = useState([]);  // NEW: Separate filtered state list

  const context = useContext(MyContext);

  const selectCountry = (index,country) => {
    setSelectedTab(index);  // Sets selected tab
    setIsOpenModal(false);  // Closes the modal
    context.setselectedCountry(country)
  };

  useEffect(() => {
    if (context?.countryList) {    // Checks if context.countryList is available
      setCountryList(context.countryList);
      setFilteredCountryList(context.countryList);  // NEW: Separate filtered list to maintain original
    }
  }, [context]);

  const filterCountryList = (e) => {
    const keyword = e.target.value.toLowerCase();  // Converts input to lowercase

    if (keyword === '') {
      setFilteredCountryList(countryList);  // Resets filtered list if input is cleared
    } else {
      const filteredList = countryList.filter((item) => 
        item.country.toLowerCase().includes(keyword)  // Filters by country name
      );
      setFilteredCountryList(filteredList);  // Updates filteredCountryList
    }
  };

  return (
    <>
      <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
        <div className='info d-flex flex-column'>
          <span className='lable'>Your Location</span>
          <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location'}</span>
        </div>
        <span className='ml-auto'><FaAngleDown/></span>
      </Button>

      <Dialog 
        open={isOpenModal} 
        onClose={() => setIsOpenModal(false)} 
        className='locationModal' 
        TransitionComponent={Transition}
      >
        <h4>Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setIsOpenModal(false)}><IoClose/></Button>
        <div className="headerSearch w-100">
          <input type='text' placeholder="Search your area..." onChange={filterCountryList}/>  {/* NEW: Filters by separate state */}
          <Button><IoSearch/></Button>
        </div>
        <ul className='countryList mt-3'>
          {
            filteredCountryList?.length !== 0 ? (  // NEW: Iterates over filtered list
              filteredCountryList.map((item, index) => (
                <li key={index}>
                  <Button onClick={() => selectCountry(index,item.country)} className={`${selectedTab === index ? 'active' : ''}`}>
                    {item.country}
                  </Button>
                </li>
              ))
            ) : (
              <li>No countries found</li>  // NEW: Displays message when no results are found
            )
          }
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
