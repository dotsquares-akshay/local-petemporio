import React from "react";

function Megamenu() {
  return (
<nav className="flex items-center space-x-6 relative">
      <a href="#" className="py-3 hover:text-orange-600 font-medium">Home</a>
      <a href="#" className="py-3 hover:text-orange-600 font-medium">About</a>

   
      <div className="relative group">
        <button className="py-3 font-medium hover:text-orange-600 flex items-center">
          Services
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white border shadow-md rounded-md w-40 z-20">
          <ul className="py-2 text-sm">
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Marketing</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Design</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sales</a></li>
          </ul>
        </div>
      </div>

      
      <div className="group big-nav">
        <button className="py-3 font-medium hover:text-orange-600 flex items-center">
          Products
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </button>

     
        <div
          className="absolute left-0 top-full w-full bg-white shadow-xl border-t hidden group-hover:flex z-20 transition-all duration-300">
          
          
          <div className="w-1/4 bg-gray-50 border-r">
            <ul className="flex flex-col">
              <li className="group/category hover:bg-white hover:shadow-inner">
                <a href="#" className="block px-4 py-3 font-semibold hover:text-orange-600">Category 1</a>
         
                <div
                  className="absolute left-1/4 top-0 w-3/4 bg-white px-6 py-6 hidden group-hover/category:grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 1.1</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 1</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 2</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 3</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 1.2</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 4</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 5</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 6</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 1.3</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 7</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 8</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 9</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="group/category hover:bg-white hover:shadow-inner">
                <a href="#" className="block px-4 py-3 font-semibold hover:text-orange-600">Category 2</a>
                <div
                  className="absolute left-1/4 top-0 w-3/4 bg-white px-6 py-6 hidden group-hover/category:grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 2.1</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 1</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 2</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 3</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 2.2</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 4</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 5</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 6</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 2.3</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 7</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 8</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 9</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="group/category hover:bg-white hover:shadow-inner">
                <a href="#" className="block px-4 py-3 font-semibold hover:text-orange-600">Category 3</a>
                <div
                  className="absolute left-1/4 top-0 w-3/4 bg-white px-6 py-6 hidden group-hover/category:grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 3.1</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 1</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 2</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 3</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 3.2</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 4</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 5</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 6</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold border-b pb-1 mb-2">Sub Category 3.3</h4>
                    <ul className="space-y-1 text-sm">
                      <li><a href="#" className="hover:text-orange-600">Product 7</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 8</a></li>
                      <li><a href="#" className="hover:text-orange-600">Product 9</a></li>
                    </ul>
                  </div>
                </div>
              </li>

              <li><a href="#" className="block px-4 py-3 font-semibold hover:text-orange-600">Category 4</a></li>
            </ul>
          </div>
        </div>
      </div>

      <a href="#" className="py-3 hover:text-orange-600 font-medium">Contact</a>
    </nav>

  );
}

export default Megamenu;
