import * as Types from '../constains/type';
import callApi from '../apis';

export const fetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}

export const fetchProductRequest = () => {
    return (dispatch) => {
        callApi('products', 'GET', null)
            .then(response => {
                dispatch(fetchProduct(response.data))
            })
    }
}

export const addProductItem = (product) => {
    return (dispatch) => {
        callApi('/products', 'POST', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(response => {
            dispatch({
                type: Types.ADD_PRODUCT,
                product: response.data
            })
        });
    }
}

export const getEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const getProductItem = (id) => {
    return dispatch => {
        callApi(`/products/${id}`, 'GET', null)
            .then(response => {
                dispatch(getEditProduct(response.data));
            })
    }
}

export const updateProductItem = (product) => {
    return dispatch => {
        callApi(`/products/${product.id}`, 'PUT', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(response => {
            console.log('res', response);
            dispatch({
                type: Types.UPDATE_PRODUCT,
                product: response.data
            })
        })
    }
}

export const deleteProductItem = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'DELETE', null)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: Types.DELETE_PRODUCT,
                        id: id
                    })
                }
            })
    }
}