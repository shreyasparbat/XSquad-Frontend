// export const API_SERVER_URL = 'http://192.168.1.4:3001'; // backend server URL
export const API_SERVER_URL = 'http://159.89.195.107:3001'; // backend server URL
// export const API_SERVER_URL = 'localhost:3001'; // local backend server URL


// GET requests
export const GET_PRODUCT_INFO_URL = '/productResource/getProductByProductID/'; // followed by Product ID
export const GET_SHOPPER_PROFILE_URL = '/customerResource/getShopperProfile/'; // followed by Shopper ID
export const GET_AUTH_TOKEN = '/accountResource/authenticationToken/';
export const GET_RECEIPT_STATUS = '/transactionResource/checkReceiptStatus/';


// POST requests
export const CREATE_USER_ACCOUNT = '/accountResource/createAccount/'; // register URL
export const USER_LOGIN = '/accountResource/login/'; //login URL
export const GET_ACTIVITIES = '/activityResource/getActivities/'; //all activities (ID and name)
export const GET_ACTIVITY_BY_ID = '/activityResource/getActivityByID/'; //get specific activity details
export const FIND_SQUAD = '/chatroomResource/findSquad/'; //handle logic for joining a new group
export const LOAD_CHATROOMS = '/chatroomResource/loadChatrooms/'; //load the chatrooms for ChatRoomListScreen.js
export const POST_RSVP = '/activityResource/insertRSVP/';//Add RSVP
export const GET_RSVP = '/activityResource/getRSVP/';//Get RSVP