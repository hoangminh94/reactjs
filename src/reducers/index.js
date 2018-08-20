import { combineReducers } from 'redux';
import products from './product';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    products, itemEditing
});

export default appReducers;
