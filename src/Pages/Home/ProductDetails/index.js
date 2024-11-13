
import ProductZoom from "../../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../../Components/QuantityBox";
import Button from '@mui/material/Button';
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {

  const [activeSize, setActiveSize]= useState(null);
  const [activeTabs, setActiveTabs]= useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  }

  return (
    <>
     <section className="productDetails section">
        <div className="container">
          
          <div className="row">

            <div className="col-md-4 pl-5 pr-5">
              <ProductZoom/>
            </div>

            <div className="col-md-7 pl-5">
              <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                <ul className="list list-inline d-flex align-items-center">
                  <li className="list list-inline">
                      <div className="d-flex align-items-center">
                        <span className="text-light">Brands</span>
                        <span className='ml-2'><b>Welch's</b></span>
                      </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="d-flex align-items-center ml-2">
                      <Rating name="read-only" value={2.6} precision={0.5} size="small"readOnly />

                      <span className="text-light cursor ml-2">
                            1 Review
                      </span>

                    </div>
                  </li>

                </ul>

                <div className="d-flex info mt-3">
                  <span class="oldPrice">$20.00</span>
                  <span class="netPrice text-danger ml-2">$14.00</span>
                </div>
                <span className="badge badge-success">IN STOCK</span>
                <p className="mt-2">Our products are the premier source for organic living and natural health. We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health. We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health. We offer a wide variety of high-quality and healthy lifestyle.</p>
              
              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <button className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>
                      50g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>
                      100g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>
                      250g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>
                      500g
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>
                      1KG
                    </button>
                  </li>
                </ul>
              </div>

              
              <div className="d-flex align-items-center mt-3">
                <QuantityBox/>
                <Button className="btn-blue btn-lg btn-big btn-round">
                <BsFillCartFill/> &nbsp;  Add To Cart</Button>

                <Tooltip title="Add to Wishlist" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                <FaRegHeart/></Button>
                </Tooltip>

                <Tooltip title="Add to Compare" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                <MdCompareArrows /></Button>
                </Tooltip>
              </div>
            
            </div>


          

        </div>

        <br/>
        <div className="card mt-5 p-5 detailsPageTabs">
          <div className="customTabs">
            <ul className="list-inline-item">
                <li className="list-inline-item" >
                  <Button className={` ${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0)}}>
                    Description
                  </Button>
                </li>
                <li className="list-inline-item" >
                  <Button className={` ${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1)}}>
                    Additional Info
                  </Button>
                </li>
                <li className="list-inline-item" >
                  <Button className={` ${activeTabs === 2 && 'active'}`} onClick={() => 
                    { setActiveTabs(2)
                    }}>
                    Review (3)
                  </Button>
                </li>
            </ul>

            <br/>

            {
              activeTabs === 0 &&
              <div className="tabContent">
                <p>Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.
                        Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.
                        Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.</p>
              </div>
            }

            {
              activeTabs === 1 &&

              <div className="tabContent">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>
                            35"L x 24"W x 37-45"H(front to back wheel)
                          </p>
                        </td>
                      </tr>
                      <tr class="folded-wo-wheels">
                        <th>Folded (W/o wheels)</th>
                        <td>
                          <p>
                            32.5"L x 18.5"W x 16.5"H
                          </p>
                        </td>
                      </tr>
                      <tr class="folded-w-wheels">
                        <th>Folded (W/ wheels)</th>
                        <td>
                          <p>
                            32.5"L x 24"W x 18.5"H
                          </p>
                        </td>
                      </tr>
                      <tr class="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>
                            24
                          </p>
                        </td>
                      </tr>
                      <tr class="weight-wo-wheels">
                        <th>Weight (W/o wheels)</th>
                        <td>
                          <p>
                            20 LBS
                          </p>
                        </td>
                      </tr>
                      <tr class="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>
                            60 LBS
                          </p>
                        </td>
                      </tr>
                      <tr class="width">
                        <th>Width</th>
                        <td>
                          <p>
                            24"
                          </p>
                        </td>
                      </tr>
                      <tr class="handle-height-ground-to-handle">
                        <th>Handle Height (Ground to Handle)</th>
                        <td>
                          <p>
                            37-45"
                          </p>
                        </td>
                      </tr>
                      <tr class="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>
                            12" air / wide track slick tread
                          </p>
                        </td>
                      </tr>
                      <tr class="seat-back-height">
                        <th>Seat Back Height</th>
                        <td>
                          <p>
                            21.5"
                          </p>
                        </td>
                      </tr>
                      <tr class="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>
                            25"
                          </p>
                        </td>
                      </tr>
                      <tr class="pa_color">
                        <th>Color</th>
                        <td>
                          <p>
                            Black, Blue, Red, White
                          </p>
                        </td>
                      </tr>
                      <tr class="pa_size">
                        <th>Size</th>
                        <td>
                          <p>
                            M, S
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            }

            {
              activeTabs === 2 &&

              <div className="tabContent">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Customer Questions & Answers</h3>

                    <br/>

                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                          <div className="rounded-circle">
                            <img src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png" alt=""/>
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">Sienna</span>
                      </div>

                      <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5 className="text-light">December 4, 2024 at 3:12 pm</h5>
                            <div className="ml-auto">
                              <Rating name="half-rating-read"
                              value={4.5}
                              precision={0.5}
                              size="small"
                              readOnly />
                            </div>
                          </div>
                          <p>Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.Our products are the premier source for organic living and natural health.
                        We offer a wide variety of high-quality and healthy lifestyle.</p>
                      </div>

                    </div>

                    <br className="res-hide"/>

                    <br className="res-hide"/>

                    <form className="reviewForm">
                      <h4>Add a review</h4>
                      <div className="form-group">
                        <textarea className="form-control"
                        placeholder="Write a Review"
                        name="review">

                        </textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text"
                            className="form-control"
                            placeholder="Name"
                           name="userName"/>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <Rating name="rating"
                              value={4.5}
                              precision={0.5} />
                          </div>
                        </div>

                      </div>

                      <br/>
                      <div className="form-group">
                        <Button type="submit" className="btn-blue btn-lg btn-big btn-round">
                            Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            } 
          </div>
        </div>

        <br/>

        <RelatedProducts  title="RELATED PRODUCTS"/><br/>
        <RelatedProducts  title="RECENTLY VIEWED PRODUCTS"/>
      </div>
    </section> 
    </>
  );
}

export default ProductDetails;
