import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { toast, ToastContainer } from 'react-toastify';
import { getError } from '../utils';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, 
        products: action.payload,
          page: action.payload.page ,
           pages: action.payload.pages,
           loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, pages, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [initialValue, setInitialValue] = useState(0);
  const [limitValue, setLimitValue] = useState(8);
  // const [products, setProducts] = useState([]);
  
 let long = products.length;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products?page=${page}');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data,});
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

  const limit = 8;
    const diff = 8;
    const pageArray = [];
      let diffLimit = long / diff;
      for (let i = 0; i < diffLimit; i++) {
        pageArray.push(i);
      }
      // for loop to loop for the number in with length difflimit
        console.log(pageArray.map(btn => btn + 2) );  
//   const limitHandler = () => {
//     const limit = 8;
//     const diff = 8;
//     const pageArray = [];
//       let diffLimit = long / diff;
//       pageArray.length = diffLimit;
//   }
  
  const prev = () => {
    console.log(initialValue);

    if (initialValue <= 0) {
        setInitialValue(0);
        setLimitValue(8);

    }
    else if (initialValue <= 2){
      setInitialValue(0);
        setLimitValue(8);
    }
    else {
      setInitialValue(initialValue - 8 );
      setLimitValue(limitValue - 8);
    }
      
  }
  const next = () => {
    console.log(initialValue);
    if (limitValue >= long) {
      setInitialValue(long - 8);
      setLimitValue(long);
    } else {
      setInitialValue(initialValue + 8);
          setLimitValue(limitValue + 8);
    }
  }
  const limitHandler = () => {
       
  }
  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <div className='box'></div>
      <div className = "title text-center">
                <h2 className = "position-relative d-inline-block">Featured Collection</h2>
            </div>
      <ul className='category'>
            {categories.map((category) => (
              <li className='liCategory' key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </li>
            ))}
            </ul>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            )).slice(initialValue, limitValue)}
          </Row>
        )}
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn' onClick={prev}>prev</button>
        {pageArray.map(btn => 
          
          <button className='btn' onClick={() => {
             setInitialValue(btn * 8);
        setLimitValue((btn * 8) + 8);
          }}>{btn}</button>
        )}
        <button className='btn' onClick={next}>Next</button>
          </div>
    </div>
  );
}
export default HomeScreen;