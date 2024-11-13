import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa6";
import { useContext } from 'react';
import { MyContext } from '../../App';

const ProductItem = (props) => {

  const context= useContext(MyContext);

  const viewProductDetails=(id)=>{
    context.setisOpenProductModal(true);
  }

  return (
   <>
   <div className={`ProductItem ${props.itemView}`}>
            <div className="imgWrapper">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="Product" className="w-100"/>
                        
                        <span className="badge badge-primary">28%</span>

                        <div className="actions">
                              <Button onClick={()=>viewProductDetails(1)}><AiOutlineFullscreen/></Button>
                              <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                        </div>

            </div>

            <div className="info">
                          <h4>Werther's Original Caramal Hard Candies </h4>
                          <span className="text-success d-block">In Stock</span>
                          <Rating className="mt-2 mb-2" name="read-only" value={3} readOnly size="small" precision={0.5}/>
                        
                         <div className="d-flex">
                          <span className="oldPrice">$20.00</span>
                          <span className="netPrice text-danger ml-2">$15 .00</span>
                        </div> 

            </div>
    </div>
     
    
   </>
  );
}

export default ProductItem;
