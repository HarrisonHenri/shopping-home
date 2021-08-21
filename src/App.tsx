import {Suspense} from 'react';
import Header from 'core/Header';
import ProductList from 'core/ProductList';
import Checkout from 'core/Checkout';

const App = () => (
  <Suspense fallback="Loading...">
    <body className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <Header />
            <ProductList />
          </div>
          <div style={{backgroundColor:'#f6f6f6'}} className="w-1/4 px-8 py-10">
            <Checkout />
          </div>
        </div>
      </div>
    </body>
  </Suspense>
);

export default App