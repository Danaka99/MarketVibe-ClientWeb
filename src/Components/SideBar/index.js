import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export const SideBar = () => {

    const [value, setValue]=useState([100,60000]);

    return (
        <>
        <div className="sidebar">
            <div className="sticky">
            <div className="filterBox">
                <h6>PRODUCT CATEGORIES</h6>
                <div className='scroll'>
                     <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Women" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Kids" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Women" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Kids" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Men" />
                        </li>
                     </ul>
                </div>
            </div>
            <div className="filterBox">
                <h6>FILTER BY PRICE</h6>

            <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5}/>
            <div className="d-flex pt-2 pb-2 priceRange">
                <span>Form: <strong className='text-dark'>Rs:{value[0]}</strong></span>
                <span className='ml-auto'>Form: <strong className='text-dark'>Rs:{value[1]}</strong></span>
            </div>

            </div>
            
            <div className="filterBox">
            <h6>PRODUCT STOCK</h6>
                <div className='scroll'>
                     <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="In Stock" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="On Sale" />
                        </li>
                     </ul>
                </div>
            </div>

             <div className="filterBox">
            <h6>BRANDS</h6>
                <div className='scroll'>
                     <ul>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Prada" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Luis viton" />
                        </li>
                        <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="Gucci" />
                        </li>
                         <li>
                            <FormControlLabel className='w-100' control={<Checkbox/>} label="chanel" />
                        </li>
                     </ul>
                </div>
            </div>

            <br/>

            
            <Link to="#">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className="w-100" alt=""/>
            </Link>
            
        </div>
        </div>
        </>
    )
}

export default SideBar;
