import React from 'react';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import ProductListPage from './pages/productList/ProductListPage';
import ProductActionPage from './components/productActionPage/ProductActionPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    }, {
        path: '/products',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/product/edit/:id',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;