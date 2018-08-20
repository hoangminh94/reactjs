import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductItem extends Component {

    onDeleteItem = (id) => () => {
        if (confirm('Do you want to delets this item ?')) { //eslint-disable-line
            this.props.onDeleteItem(id);
        }
    }

    render() {
        const { index, product } = this.props;
        let statusName = product.status ? 'Con hang' : 'het hang';
        let statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/edit/${product.id}`} className="btn btn-success mr-10">Edit</Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteItem(product.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;