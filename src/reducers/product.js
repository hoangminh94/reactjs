import * as Types from '../constains/type';
const initialState = [];

const findIndex = (arr, id) => {
    let result = -1;
    arr.forEach((element, index) => {
        if (element.id === id) {
            result = index;
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            if (index !== 1) {
                state.splice(index, 1);
            }
            return [...state]
        default:
            return [...state];
    }
}

export default products;
