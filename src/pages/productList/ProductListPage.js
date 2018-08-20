import React, { Component } from 'react';
import ProductList from '../../components/productList/ProductList';
import ProductItem from '../../components/productItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductRequest, deleteProductItem } from '../../actions/index';

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProducts: () => {
            dispatch(fetchProductRequest())
        },
        onDeleteProductItem: (id) => {
            dispatch(deleteProductItem(id))
        }
    }
}

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDeleteItem = (id) => {
        this.props.onDeleteProductItem(id);
    }

    // findIndex = (arr, id) => {
    //     let result = -1;
    //     arr.forEach((element, index) => {
    //         if (element.id === id) {
    //             result = index;
    //         }
    //     });
    //     return result;
    // }

    showItem = (products) => {
        let content = null;
        if (products.length > 0) {
            content = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDeleteItem={this.onDeleteItem}
                />
            })
        }
        return content
    }

    render() {
        const { products } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to={'/product/add'} className="btn btn-info mb-10">Add Product</Link>
                <ProductList>
                    {this.showItem(products)}
                </ProductList>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);