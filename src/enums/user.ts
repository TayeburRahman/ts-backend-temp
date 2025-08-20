/* eslint-disable no-unused-vars */
export enum ENUM_USER_ROLE {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  CUSTOMERS = 'CUSTOMERS',
  AGENT = 'AGENT',
}

export enum ENUM_SOCKET_EVENT {
  CONNECT = "connection",
  NOTIFICATION = "notification",
  NEW_NOTIFICATION = "new-notification",
  SEEN_NOTIFICATION = "seen-notification",
  MESSAGE_NEW = "new-message",
  MESSAGE_GETALL = "message",
  CONVERSION = "conversion",
  PARTNER_LOCATION = "partner-location",

};