import React, {Suspense} from 'react';
import Header from 'nav/Header';

const App = () => (
  <Suspense fallback="Loading...">
    <body className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <Header />
          </div>
        </div>
      </div>
    </body>
  </Suspense>
);

export default App