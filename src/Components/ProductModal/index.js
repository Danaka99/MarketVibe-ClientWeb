import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import { useContext } from 'react';
import QuantityBox from '../QuantityBox';
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';

const ProductModal = (props) => {

    const context = useContext(MyContext);

    return (
        <Dialog 
            open={true}
            className='productModal'
            onClose={() => context.setisOpenProductModal(false)}>
            <Button onClick={() => context.setisOpenProductModal(false)} className='close_'>
                <IoClose />
            </Button>
            <h4 className='mb-1 font-weight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                    <span>Brand:</span>
                    <span className='ml-2'><b>Welch's</b></span>
                </div>
                <Rating name='read-only' value={5} size='small' precision={0.5} readOnly />
            </div>
            <hr/>
            <div className='row mt-2 productDetailsModal'>
                <div className='col-md-5'>
                    <ProductZoom />
                </div>

                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='oldPrice lg mr-2'>
                                $9.45
                        </span>
                        <span className='netPrice text-danger lg'>
                                $5.00
                        </span>
                    </div>
                    <span className='badge bg-success'>
                                IN STOCK 
                    </span>
                    <p className='mt-3'>
                        Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.
                    </p>

                    <div className='d-flex info align-items-center'>
                        <QuantityBox />
                        <Button className='btn-blue btn-lg btn-big btn-round ml-3'>
                            Add to Cart
                        </Button>
                    </div>
                    <div className='d-flex info align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant="outlined">
                            <FaRegHeart/>&nbsp;&nbsp;ADD TO WISHLIST
                        </Button>
                        <Button className='btn-round btn-sml ml-3' variant="outlined">
                            <MdOutlineCompareArrows/>&nbsp;&nbsp;COMPARE
                        </Button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default ProductModal;
