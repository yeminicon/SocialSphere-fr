import React from 'react'
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { toast, ToastContainer } from 'react-toastify';
import { getError } from '../utils';
import { LinkContainer } from 'react-router-bootstrap';
import './Landing.css';
import Rating from './Rating';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, pages: action.payload.pages, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

const Collection = (props) => {
    const [{ loading, error, pages, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
      });
      const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
      const [categories, setCategories] = useState([]);
      const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);// more understanding on this
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
      // const [products, setProducts] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: 'FETCH_REQUEST' });
          try {
            const result = await axios.get('/api/products');
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message });
          }
    
          // setProducts(result.data);
        };
        fetchData();
        const fetchCategories = async () => {
          try {
            const { data } = await axios.get(`/api/products/categories`);
            setCategories(data);
          } catch (err) {
            toast.error(getError(err));
          }
        };
        fetchCategories();
      }, []);
      const apple = [products.map((product) => (
                        
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">

            <Card >
                <div className = "collection-img position-relative">
                        <Link to={`/product/${product.slug}`}>
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        </Link>
                            {/* <img src={product.image} className = "w-100" /> */}
                            <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                </div>
                <Card.Body>
                    <div className = "text-center">
                        <div className = "rating mt-3">
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                        </div>
                        <p className = "text-capitalize my-1">{product.name}</p>
                        <Card.Text>₦ {product.price}</Card.Text>
                        {/* {product.countInStock === 0 ? (
                            <Button variant="light" disabled>
                                Out of stock
                            </Button>
                            ) : (
                            <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
                            )} */}
                    </div>
                </Card.Body>
            </Card>
         </Col>
       
        
)).slice(0, 4)]
  return (
    <section id = "collection" className = "py-5">
        <div className = "container">
            <div className = "title text-center">
                <h2 className = "position-relative d-inline-block">New Collection</h2>
            </div>
           
            <div className = "row g-0">
                <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                {categories.map((category) => (
                    <button  className = "btn m-2 text-dark" data-filter = "*">
                    <LinkContainer
                    style={{color: 'black'}}
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link >{category}</Nav.Link>
                </LinkContainer>
                </button>
                )).slice(0, 3)}
                </div>
                <div className = "collection-list mt-4 row gx-0 gy-3">
                {/* {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )} */}
        <Row>
            {apple.slice(0, 4)}
        </Row>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection;