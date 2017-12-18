import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import NewPayment from './components/Order/NewOrder';
import OrderList from './containers/OrderList';


const App = () => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        <a className="navbar-brand" href="#">Silencec - POS project</a>
                    </div>
                    {/*<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">*/}
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Create New Order <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">View Orders</a></li>
                        </ul>
                    {/*</div>*/}
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                        <NewPayment />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OrderList />
                    </div>
                </div>

                <footer>
                    <small>
                        made by <a href="https://www.linkedin.com/in/nmpegetis">Nikolas Begetis</a>
                    </small>
                </footer>
            </div>
        </div>
    );
};

export default App;
