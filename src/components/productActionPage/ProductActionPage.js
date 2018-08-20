import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addProductItem, getProductItem, updateProductItem } from '../../actions';

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProductItem: (product) => {
            dispatch(addProductItem(product));
        },
        onEditProductItem: (id) => {
            dispatch(getProductItem(id))
        },
        onUpdateProductItem: (product) => {
            dispatch(updateProductItem(product))
        }

    }
}

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            status: false
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.onEditProductItem(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.itemEditing) {
            const item = nextProps.itemEditing;
            this.setState({
                id: item.id,
                name: item.name,
                price: item.price,
                status: item.status
            });
        }
    }

    onChange = (evt) => {
        let target = evt.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (evt) => {
        evt.preventDefault();
        let { id, name, price, status } = this.state;
        let { history } = this.props;
        let product = { id, name, price, status };
        if (id) {
            console.log('updating');
            this.props.onUpdateProductItem(product);
        } else {
            this.props.onAddProductItem(product);
        }
        history.goBack();
    }

    render() {
        const { name, price, status } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Product name: </label>
                        <input
                            type="text"
                            className="form-control"
                            name='name'
                            value={name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name='price'
                            value={price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name='status'
                                value={status}
                                checked={status}
                                onChange={this.onChange}
                            />
                            Remainder
                        </label>
                    </div>
                    <Link to={'/products'} className='btn btn-danger mr-10'>Back</Link>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);