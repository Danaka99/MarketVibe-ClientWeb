import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../../Components/QuantityBox";
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';
import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
          <h2 className="hd mb-1">
                Your Cart
                    </h2>
                    <p>There are <b className="text-red">3</b> products in your cart</p>
            <div className="row">
              <div className="col-md-9 pr-5">
                

                    <div className="table-responsive">
                      <table className="table table2">
                        <thead>
                          <tr>
                            <th width="35%">Products</th>
                            <th width="15%">Unit Price</th>
                            <th width="20%">Quantity</th>
                            <th width="15%">Subtotal</th>
                            <th width="10%">Remove</th>
                          </tr>
                        </thead>
                      <tbody>
                        <tr>
                          <td width="35%">
                          <Link to="/product/1">
                            <div className="d-flex align-items-center cartItemimgWrapper">
                              <div className="imgWrapper">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-1.jpg" className="w-100" alt=""/>
                              </div>
                              <div className="info px-3">
                                <h6>Seeds of Change Organic Quinoa, Brown</h6>
                                 <Rating name="read-only" value={4.5} precision={0.5} size="small"readOnly />
                              </div>
                            </div>
                           </Link>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="20%">
                            <QuantityBox/>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="10%"><span className="remove"><IoClose/></span></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td width="35%">
                          <Link to="/product/1">
                            <div className="d-flex align-items-center cartItemimgWrapper">
                              <div className="imgWrapper">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-1.jpg" className="w-100" alt=""/>
                              </div>
                              <div className="info px-3">
                                <h6>Seeds of Change Organic Quinoa, Brown</h6>
                                 <Rating name="read-only" value={4.5} precision={0.5} size="small"readOnly />
                              </div>
                            </div>
                           </Link>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="20%">
                            <QuantityBox/>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="10%"><span className="remove"><IoClose/></span></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td width="35%">
                          <Link to="/product/1">
                            <div className="d-flex align-items-center cartItemimgWrapper">
                              <div className="imgWrapper">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-1.jpg" className="w-100" alt=""/>
                              </div>
                              <div className="info px-3">
                                <h6>Seeds of Change Organic Quinoa, Brown</h6>
                                 <Rating name="read-only" value={4.5} precision={0.5} size="small"readOnly />
                              </div>
                            </div>
                           </Link>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="20%">
                            <QuantityBox/>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="10%"><span className="remove"><IoClose/></span></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td width="35%">
                          <Link to="/product/1">
                            <div className="d-flex align-items-center cartItemimgWrapper">
                              <div className="imgWrapper">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-1.jpg" className="w-100" alt=""/>
                              </div>
                              <div className="info px-3">
                                <h6>Seeds of Change Organic Quinoa, Brown</h6>
                                 <Rating name="read-only" value={4.5} precision={0.5} size="small"readOnly />
                              </div>
                            </div>
                           </Link>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="20%">
                            <QuantityBox/>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="10%"><span className="remove"><IoClose/></span></td>
                        </tr>
                      </tbody>
                      <tbody>
                        <tr>
                          <td width="35%">
                          <Link to="/product/1">
                            <div className="d-flex align-items-center cartItemimgWrapper">
                              <div className="imgWrapper">
                                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-1.jpg" className="w-100" alt=""/>
                              </div>
                              <div className="info px-3">
                                <h6>Seeds of Change Organic Quinoa, Brown</h6>
                                 <Rating name="read-only" value={4.5} precision={0.5} size="small"readOnly />
                              </div>
                            </div>
                           </Link>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="20%">
                            <QuantityBox/>
                          </td>
                          <td width="15%">$7.99</td>
                          <td width="10%"><span className="remove"><IoClose/></span></td>
                        </tr>
                      </tbody>
                     </table>
                    </div>
                    
              </div>
              <div className="col md-3">
                  <div className="card border p-3 cartDetails">
                    <h4>Cart Totals</h4>

                    <div className="d-flex align-items-center mb-3">
                      <span>Sub Total</span>
                      <span className="ml-auto text-red font-weight-bold">$12.99</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span>Shipping</span>
                      <span className="ml-auto"><b>free</b></span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span>Estimate For</span>
                      <span className="ml-auto"><b>United Kingdom</b></span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span>Total</span>
                      <span className="ml-auto text-red font-weight-bold">$12.99</span>
                    </div>
                    <Button className="btn-blue bg-red btn-lg btn-big">
                           <IoCartSharp/>&nbsp; Add To Cart
                    </Button>
                  </div>
              </div>
            </div>     
        </div>
      </section>
    </>
  );
}

export default Cart;
