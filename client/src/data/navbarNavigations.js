const navbarNavigations = [{
  title: 'Home',
  child: [{
    title: 'Super Store',
    url: '/home-1'
  }, {
    title: 'Grocery',
    url: '/home-2'
  }, {
    title: 'Shop v3',
    url: '/home-3'
  }, {
    title: 'Shop v4',
    url: '/home-4'
  }]
}, {
  title: 'Pages',
  child: [{
    title: 'Sale Page',
    child: [{
      title: 'Version 1',
      url: '/sale-page-1'
    }, {
      title: 'Version 2',
      url: '/sale-page-2'
    }]
  }, {
    title: 'Vendor',
    child: [{
      title: 'All vendors',
      url: '/shops'
    }, {
      title: 'Vendor store',
      url: '/shop/34324'
    }]
  }, {
    title: 'Shop',
    child: [{
      title: 'Search product',
      url: '/product/search/mobile phone'
    }, {
      title: 'Single product',
      url: '/product/34324321'
    }, {
      title: 'Cart',
      url: '/cart'
    }, {
      title: 'Checkout',
      url: '/checkout'
    }, {
      title: 'Alternative Checkout',
      url: '/checkout-alternative'
    }, {
      title: 'Order confirmation',
      url: '/order-confirmation'
    }]
  }]
}, {
  title: 'User Account',
  child: [{
    title: 'Orders',
    child: [{
      title: 'Order List',
      url: '/orders'
    }, {
      title: 'Order Details',
      url: '/orders/5452423'
    }]
  }, {
    title: 'Profile',
    child: [{
      title: 'View Profile',
      url: '/profile'
    }, {
      title: 'Edit Profile',
      url: '/profile/edit'
    }]
  }, {
    title: 'Address',
    child: [{
      title: 'Address List',
      url: '/address'
    }, {
      title: 'Add Address',
      url: '/address/512474'
    }]
  }, {
    title: 'Support tickets',
    child: [{
      title: 'All tickets',
      url: '/support-tickets'
    }, {
      title: 'Ticket details',
      url: '/support-tickets/512474'
    }]
  }, {
    title: 'Wishlist',
    url: '/wish-list'
  }]
}, {
  title: 'Vendor Account',
  child: [{
    title: 'Dashboard',
    url: '/vendor/dashboard'
  }, {
    title: 'Products',
    child: [{
      title: 'All products',
      url: '/vendor/products'
    }, {
      title: 'Add/Edit product',
      url: '/vendor/products/248104'
    }]
  }, {
    title: 'Orders',
    child: [{
      title: 'All orders',
      url: '/vendor/orders'
    }, {
      title: 'Order details',
      url: '/vendor/orders/248104'
    }]
  }, {
    title: 'Profile',
    url: '/vendor/account-settings'
  }]
}, {
  title: 'Back to Demos',
  url: '/'
}];
export default navbarNavigations;