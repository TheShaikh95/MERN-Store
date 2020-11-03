import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    const  [products, setproducts] = useState([])
    return (
        <>
        <h1>Latest products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
            ))}
        </Row>
        </>
    )
}

export default HomeScreen
