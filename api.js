// export const API_SERVER_URL = 'http://192.168.1.4:3001'; // backend server URL
export const API_SERVER_URL = 'http://159.65.10.78:3001'; // backend server URL


// GET requests
export const GET_PRODUCT_INFO_URL = '/productResource/getProductByProductID/'; // followed by Product ID
export const GET_SHOPPER_PROFILE_URL = '/customerResource/getShopperProfile/'; // followed by Shopper ID
export const GET_AUTH_TOKEN = '/accountResource/authenticationToken/';
export const GET_RECEIPT_STATUS = '/transactionResource/checkReceiptStatus/';


// POST requests
export const CREATE_SHOPPER_ACCOUNT_URL = '/accountResource/createHasteAccount/'; // register URL
export const LOGIN_URL = '/accountResource/login/';
export const FORGET_PASSWORD_RESET_URL = '/accountResource/forgetPassword/'; //NOTE: PUT request, not POST
export const PASSWORD_RESET_URL = '/accountResource/changeForgottenPassword/'; //NOTE: PUT request, not POST
export const FB_GOOGLE_AUTH_URL = '/accountResource/fbGoogleAuthentication/';
export const BAR_QR_STORE_URL = '/barcodeResource/scanOutletBarcode/';
export const BAR_QR_ITEM_URL = '/barcodeResource/scanItemBarcode/';
export const PROFILE_URL = '/accountResource/profile/'; //NOTE: PUT and POST request
export const PROFILE_PICTURE_URL = '/accountResource/profilePicture/'; //NOTE: PUT and POST request
export const SHOPPER_VERIFIED_TRX_URL = '/transactionResource/getShopperVerifiedTransactions/';
export const SHOPPER_UNVERIFIED_TRX_URL = '/transactionResource/getShopperUnverifiedTransactions/';
export const TRANSACTION_DETAILS_URL = '/transactionResource/retrieveReceiptBySessionID/';
export const CHECKOUT_ITEM_UPDATE_DB = '/cartResource/checkoutItemsAndUpdateDatabase';
export const CREDIT_CART = '/cartResource/creditCard';

export const GET_PAYMENT_METHOD = '/reddotResource/paymentMethod'; // POST and PUT

export const PAYMENT_URL = '/reddotResource/getTokenzationURLFromReddot';
export const CHECK_PAYMENT_URL = '/reddotResource/checkCustomerTokenization';



