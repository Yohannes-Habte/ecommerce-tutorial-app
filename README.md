# ecommerce-tutorial-app

ecommerce-tutorial-app/
│
├── public/
│   ├── index.html              
│   ├── favicon.ico             
│   └── assets/                 
│       ├── images/          
│       ├── icons/              
│       └── fonts/              
│
├── src/
│   ├── api/                    # API calls (fetch/axios)
│   │   ├── productApi.js
│   │   ├── userApi.js
│   │   ├── orderApi.js
│   │   ├── adminApi.js
│   │   ├── paymentApi.js
│   │   └── supplierApi.js
│   │
│   ├── redux/                  # Redux setup
│   │   ├── actions/
│   │   │   ├── cartActions.js
│   │   │   ├── productActions.js
│   │   │   ├── userActions.js
│   │   │   ├── adminActions.js
│   │   │   ├── wishlistActions.js
│   │   │   └── categoryActions.js
│   │   │
│   │   ├── reducers/
│   │   │   ├── cartReducer.js
│   │   │   ├── productReducer.js
│   │   │   ├── userReducer.js
│   │   │   ├── adminReducer.js
│   │   │   ├── wishlistReducer.js
│   │   │   └── categoryReducer.js
│   │   │
│   │   ├── store.js
│   │   └── rootReducer.js
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── LoaderSpinner.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   └── SearchBar.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   └── product/
│   │       ├── ProductCard.jsx
│   │       ├── ProductList.jsx
│   │       └── ProductFilter.jsx
│   │
│   ├── forms/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── CheckoutForm.jsx
│   │   ├── ProductForm.jsx
│   │   ├── UserProfileForm.jsx
│   │   ├── ContactForm.jsx
│   │   ├── PaymentForm.jsx
│   │   ├── ForgotPasswordForm.jsx       
│   │   └── ResetPasswordForm.jsx        
│   │
│   ├── context/
│   │   └── AuthContext.js
│   │
│   ├── hooks/
│   │   ├── useCart.js
│   │   ├── useFetch.js
│   │   ├── useAuth.js
│   │   └── useWishlist.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Product/
│   │   │   ├── ProductDetails.jsx
│   │   │   └── ProductDetails.css
│   │   ├── Cart/
│   │   │   ├── Cart.jsx
│   │   │   └── Cart.css
│   │   ├── Checkout/
│   │   │   ├── Checkout.jsx
│   │   │   └── Checkout.css
│   │   ├── Payment/
│   │   │   ├── Payment.jsx
│   │   │   └── Payment.css
│   │   ├── User/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── ForgotPassword.jsx         
│   │   │   └── ResetPassword.jsx          
│   │   ├── Orders/
│   │   │   ├── OrderList.jsx
│   │   │   └── OrderDetails.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── FAQs/
│   │   │   ├── FAQs.jsx
│   │   │   └── FAQs.css
│   │   ├── Wishlist/
│   │   │   ├── Wishlist.jsx
│   │   │   └── Wishlist.css
│   │   ├── Supplier/
│   │   │   ├── SupplierList.jsx
│   │   │   └── Supplier.css
│   │   ├── Success/
│   │   │   ├── Success.jsx                
│   │   │   └── Success.css
│   │   └── Admin/
│   │       ├── Dashboard/
│   │       │   ├── Dashboard.jsx
│   │       │   └── Dashboard.css
│   │       ├── Products/
│   │       │   ├── AdminProductList.jsx
│   │       │   ├── AdminProductFormPage.jsx
│   │       │   └── ProductManagement.css
│   │       ├── Orders/
│   │       │   ├── AdminOrderList.jsx
│   │       │   └── OrderManagement.css
│   │       └── Users/
│   │           ├── AdminUserList.jsx
│   │           └── UserManagement.css
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── styles/
│   │   ├── _variables.css
│   │   ├── _reset.css
│   │   └── global.css
│   │
│   ├── utils/
│   │   ├── formatPrice.js
│   │   ├── validateEmail.js
│   │   ├── localStorage.js
│   │   └── searchUtils.js
│   │
│   ├── index.js
│   └── App.jsx
│
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json



