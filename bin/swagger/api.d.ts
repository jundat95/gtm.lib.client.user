/**
 * @gtm/service.user
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { interfaces } from 'inversify';
import * as libclient from '@gtm/lib.client';
export declare class AccountView {
    'balance': number;
    'balanceGold': number;
    'bonus': number;
}
export declare class AttachmentView {
    /**
    * HTML Content-Type: image/png, image/jpeg, image/gif,..  This will be return to browser client to correctly load & show the image
    */
    'media': string;
    /**
    * Image raw/binary Content-Data will be stramming to browser client
    */
    'data': Binary;
}
export declare class Binary {
    'sUBTYPEDEFAULT': number;
    'sUBTYPEFUNCTION': number;
    'sUBTYPEBYTEARRAY': number;
    'sUBTYPEUUIDOLD': number;
    'sUBTYPEUUID': number;
    'sUBTYPEMD5': number;
    'sUBTYPEUSERDEFINED': number;
    'buffer': string;
    'subType': number;
}
export declare class JwtToken {
    /**
    * User's display name
    */
    'name': string;
    'session': string;
    'user': string;
    /**
    * List of roles for quicky checking
    */
    'roles': MapOfBoolean;
    /**
    * List of scope or null is all scope (*)
    */
    'scope': MapOfBoolean;
    /**
    * Valid until
    */
    'expires': number;
}
export declare class LocationView {
    /**
    * longitude
    */
    'x': number;
    /**
    * latitude
    */
    'y': number;
}
export declare class MAvatarView {
    'media': string;
    'data': string;
}
export declare class MFCMView {
    'fcmToken': string;
}
export declare class MFindUserByPhone {
    'user': MUserFindByPhone;
    'status': StatusFindByPhone;
}
export declare class MProfileView {
    'name': string;
    'gender': string;
    'birthday': number;
    'address': string;
    'localtion': LocationView;
    'identityCard': string;
    'phone': string;
    'job': string;
    'bankRate': number;
    'note': string;
    'infos': string;
    'houseHolder': string;
}
export declare class MUserFindByPhone {
    'id': string;
    'name': string;
    'phone': string;
    'birthday': number;
    'email': string;
    'gender': string;
    'houseHolder': any;
}
export declare class MUserView {
    'id': string;
    'name': string;
    'phone': string;
    'email': string;
    'houseHolder': any;
}
export declare class MapOfBoolean extends null<String, boolean> {
}
export declare class MessageDetailView {
    'id': string;
    'userId': string;
    'userName': string;
    'toUserId': string;
    'toUserName': string;
    'content': string;
    'delivered': number;
    'announced': boolean;
    'created': number;
    'updated': number;
}
export declare class MessageDetailViewApp {
    'userId': string;
    'userName': string;
    'messageDetailView': Array<MessageDetailView>;
}
export declare class MessageEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
    'announced': boolean;
}
export declare class MessageView {
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
    'announced': boolean;
}
export declare class MessageViewWithPagination {
    'messages': Array<MessageDetailView>;
    'totalItems': number;
}
export declare class MessageViewWithPaginationAnUserApp {
    'userId': string;
    'userName': string;
    'messages': Array<MessageDetailView>;
}
export declare class MessageViewWithPaginationApp {
    'messages': Array<MessageDetailViewApp>;
}
export declare class ProfileDefault {
    'bankRate': number;
    'job': string;
    'infos': string;
    'note': string;
    'identityCard': string;
    'houseHolder': string;
}
export declare class ProfileView {
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/..
    */
    'provider': string;
    /**
    * Link to [role] table
    */
    'roles': Array<UserRole>;
    /**
    * user account
    */
    'account': UserAccount;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process
    */
    'active': boolean;
    'status': UserStatus;
    /**
    * UTC tick only date without time component
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,..
    */
    'language': string;
    /**
    * male/female
    */
    'gender': string;
    /**
    * +/- UTC time
    */
    'timezone': number;
    /**
    * token FCM
    */
    'fcmToken': string;
    /**
    * profile.default
    */
    'profileDefault': ProfileDefault;
    /**
    * First Login
    */
    'isFirstLogin': boolean;
}
export declare class ProviderSession {
    'name': string;
    'accessToken': string;
    'refreshToken': string;
    'expiresIn': number;
    'tokenType': string;
}
export declare class RoleDetailView {
    'id': string;
    'code': string;
    'scope': string;
    'status': RoleStatus;
    'created': number;
    'updated': number;
}
export declare class RoleStatus {
}
export declare class RoleType {
}
export declare class RoleView {
    /**
    * role code
    */
    'code': string;
    /**
    * role scope
    */
    'scope': string;
    /**
    * role status
    */
    'status': RoleStatus;
}
export declare class RoleViewWithPagination {
    'roles': Array<RoleDetailView>;
    'totalItems': number;
}
export declare class SessionView {
    'id': string;
    'userId': string;
    'code': string;
    'name': string;
    'roles': Array<string>;
    'scope': string;
    'expiresIn': number;
    'provider': ProviderSession;
    'created': number;
    'updated': number;
}
export declare class SessionViewWithPagination {
    'sessions': Array<SessionView>;
    'totalItems': number;
}
export declare class StatusFindByPhone {
}
export declare class UserAccount {
    'balance': number;
    'balanceGold': number;
    'bonus': number;
}
export declare class UserAccountView {
    'balance': number;
    'balanceGold': number;
    'bonus': number;
}
export declare class UserEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/..
    */
    'provider': string;
    /**
    * Link to [role] table
    */
    'roles': Array<UserRole>;
    /**
    * user account
    */
    'account': UserAccount;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process
    */
    'active': boolean;
    'status': UserStatus;
    /**
    * UTC tick only date without time component
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,..
    */
    'language': string;
    /**
    * male/female
    */
    'gender': string;
    /**
    * +/- UTC time
    */
    'timezone': number;
    /**
    * token FCM
    */
    'fcmToken': string;
    /**
    * profile.default
    */
    'profileDefault': ProfileDefault;
    /**
    * First Login
    */
    'isFirstLogin': boolean;
    /**
    * With 3 sub-dcouments:  - user.profiles.google: Google profile (auto created by OAuth2 by Google)  - user.profiles.facebook: FaceBook profile (auto created by OAuth2 by Google)  - user.profiles.app: is an application specific profile, need to define a view: ScProfileView { balance: number; bonus: number; LaiXuatMacDinh: number; .. }
    */
    'profiles': any;
    /**
    * The OAuth2 authentication process should auto  load up the default user avatar at 1st user login
    */
    'avatar': AttachmentView;
}
export declare class UserRole {
    'id': any;
    'code': string;
}
export declare class UserRoleView {
    'userId': string;
    'roleType': RoleType;
}
export declare class UserStatus {
}
export declare class UserUpdateView {
    'name': string;
    'phone': string;
    'birthday': number;
    'email': string;
    'gender': string;
    'status': UserStatus;
    'role': Array<UserRole>;
    'address': string;
}
export declare class UserViewDetails {
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/..
    */
    'provider': string;
    /**
    * Link to [role] table
    */
    'roles': Array<UserRole>;
    'account': AccountView;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process
    */
    'active': boolean;
    'status': UserStatus;
    /**
    * UTC tick only date without time component
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,..
    */
    'language': string;
    /**
    * male/female
    */
    'gender': string;
    /**
    * +/- UTC time
    */
    'timezone': number;
    /**
    * token FCM
    */
    'fcmToken': string;
    /**
    * profile.default
    */
    'profileDefault': ProfileDefault;
    /**
    * First Login
    */
    'isFirstLogin': boolean;
    /**
    * With 3 sub-dcouments:  - user.profiles.google: Google profile (auto created by OAuth2 by Google)  - user.profiles.facebook: FaceBook profile (auto created by OAuth2 by Google)  - user.profiles.app: is an application specific profile, need to define a view: ScProfileView { balance: number; bonus: number; LaiXuatMacDinh: number; .. }
    */
    'profiles': any;
    /**
    * The OAuth2 authentication process should auto  load up the default user avatar at 1st user login
    */
    'avatar': AttachmentView;
    'id': string;
    'created': number;
    'updated': number;
}
export declare class UserViewWithPagination {
    'users': Array<UserViewDetails>;
    'totalItems': number;
}
export declare enum MessageApiApiKeys {
}
export declare class MessageApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Create New Message
     * @param messageView
     */
    createEntity(messageView: MessageView): Promise<libclient.ApiResponse<MessageEntity>>;
    /**
     * Delete Message
     * @param id
     */
    deleteEntity(id: string): Promise<libclient.ApiResponse<any>>;
    /**
     * Get Messages
     * @param from
     * @param to
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(from?: string, to?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number): Promise<libclient.ApiResponse<MessageViewWithPagination>>;
    /**
     * Get Message by Id
     * @param id
     */
    getEntity(id: string): Promise<libclient.ApiResponse<MessageEntity>>;
    /**
     * Get List Messages For App
     * @param sortName
     * @param sortType
     */
    getListMessageForApp(sortName?: string, sortType?: number): Promise<libclient.ApiResponse<MessageViewWithPaginationApp>>;
    /**
     * Get List Messages for current user
     * @param sortName
     * @param sortType
     */
    getListMessageForCurrentUser(sortName?: string, sortType?: number): Promise<libclient.ApiResponse<Array<MessageDetailView>>>;
    /**
     * Get List Messages with an user for App
     * @param userIdToGetMessage
     * @param sortName
     * @param sortType
     */
    getListMessageOfUser(userIdToGetMessage: string, sortName?: string, sortType?: number): Promise<libclient.ApiResponse<MessageViewWithPaginationAnUserApp>>;
    /**
     * Get Messages to notification
     */
    getMessageToNotification(): Promise<libclient.ApiResponse<MessageViewWithPagination>>;
    /**
     * Get Messages to notification update
     */
    getMessageToNotificationUpdate(): Promise<libclient.ApiResponse<MessageViewWithPagination>>;
    /**
     *
     * @param title
     * @param message
     * @param fcm
     * @param userId
     * @param screenID
     */
    testNotifiForMessage(title: string, message: string, fcm: string, userId: string, screenID: string): Promise<libclient.ApiResponse<string>>;
    /**
     *
     * @param title
     * @param message
     * @param fcm
     * @param matchId
     * @param borrowId
     * @param screenID
     */
    testNotifiForOpenScreen(title: string, message: string, fcm: string, matchId: string, borrowId: string, screenID: string): Promise<libclient.ApiResponse<string>>;
    /**
     * Update Message
     * @param id
     * @param messageView
     */
    updateEntity(id: string, messageView: MessageView): Promise<libclient.ApiResponse<MessageEntity>>;
}
export declare enum RoleApiApiKeys {
}
export declare class RoleApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Create New Role
     * @param roleView
     */
    createEntity(roleView?: RoleView): Promise<libclient.ApiResponse<RoleDetailView>>;
    /**
     * Delete Role
     * @param id
     */
    deleteEntity(id: string): Promise<libclient.ApiResponse<string>>;
    /**
     * Get all role entities
     */
    getAllEntities(): Promise<libclient.ApiResponse<Array<RoleDetailView>>>;
    /**
     * Get Roles
     * @param query
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(query?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number): Promise<libclient.ApiResponse<RoleViewWithPagination>>;
    /**
     * Get Role by Id
     * @param id
     */
    getEntity(id: string): Promise<libclient.ApiResponse<RoleDetailView>>;
    /**
     * Update Role
     * @param id
     * @param roleView
     */
    updateEntity(id: string, roleView?: RoleView): Promise<libclient.ApiResponse<RoleDetailView>>;
}
export declare enum SessionApiApiKeys {
}
export declare class SessionApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Check current session info
     */
    getCurrent(): Promise<libclient.ApiResponse<JwtToken>>;
    /**
     * Get sessions with pagination
     * @param userId
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(userId?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number): Promise<libclient.ApiResponse<SessionViewWithPagination>>;
}
export declare enum SystemApiApiKeys {
}
export declare class SystemApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Check loggedin status
     */
    getLoggedin(): Promise<libclient.ApiResponse<boolean>>;
    /**
     * Get current system version info
     */
    getVersion(): Promise<libclient.ApiResponse<string>>;
}
export declare enum UserApiApiKeys {
}
export declare class UserApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string);
    /**
     * Create or update User Role
     * @param userRoleView
     */
    createOrUpdateUserRole(userRoleView: UserRoleView): Promise<libclient.ApiResponse<ProfileView>>;
    /**
     *
     * @param find
     */
    findUser(find: string): Promise<libclient.ApiResponse<Array<MUserView>>>;
    /**
     *
     * @param find
     */
    findUserByPhone(find: string): Promise<libclient.ApiResponse<MFindUserByPhone>>;
    /**
     * Get user by Id
     * @param id
     */
    getById(id: string): Promise<libclient.ApiResponse<MUserView>>;
    /**
     * Get user details by Id
     * @param id
     */
    getDetailViewById(id: string): Promise<libclient.ApiResponse<UserViewDetails>>;
    /**
     * Get users with pagination
     * @param status
     * @param userId
     * @param pageNumber
     * @param itemCount
     * @param sortName
     * @param sortType
     */
    getEntities(status?: string, userId?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number): Promise<libclient.ApiResponse<UserViewWithPagination>>;
    /**
     * getFCMForMobile
     * @param userId
     */
    getFCMForMobile(userId: string): Promise<libclient.ApiResponse<MFCMView>>;
    /**
     * Get lend user for app
     * @param find
     */
    getLenderUserForApp(find: string): Promise<libclient.ApiResponse<Array<MUserView>>>;
    /**
     *
     */
    getProfileCurrent(): Promise<libclient.ApiResponse<ProfileView>>;
    /**
     *
     */
    getProfileCurrentForMobile(): Promise<libclient.ApiResponse<ProfileView>>;
    /**
     * Get user account
     * @param userId
     */
    getUserAccount(userId: string): Promise<libclient.ApiResponse<UserAccount>>;
    /**
     *
     * @param userName
     */
    getUserByName(userName: string): Promise<libclient.ApiResponse<Array<MUserView>>>;
    /**
     * Get all user lite
     */
    getUserLite(): Promise<libclient.ApiResponse<Array<MUserView>>>;
    /**
     * setFCMForMobile
     * @param fcms
     */
    setFCMForMobile(fcms: MFCMView): Promise<libclient.ApiResponse<string>>;
    /**
     * Update user with profiles
     * @param avatar
     */
    updateAvatar(avatar: MAvatarView): Promise<libclient.ApiResponse<UserEntity>>;
    /**
     *
     * @param profileView
     */
    updateProfileCurrent(profileView: ProfileView): Promise<libclient.ApiResponse<ProfileView>>;
    /**
     * Update user account
     * @param userId
     * @param userAccountView
     * @param type
     */
    updateUserAccount(userId: string, userAccountView: UserAccountView, type?: string): Promise<libclient.ApiResponse<UserAccount>>;
    /**
     * Update user details
     * @param userId
     * @param userDetails
     */
    updateUserDetail(userId: string, userDetails: UserUpdateView): Promise<libclient.ApiResponse<UserEntity>>;
    /**
     * Update user with profiles
     * @param profile
     */
    updateUserProfiles(profile: MProfileView): Promise<libclient.ApiResponse<ProfileView>>;
}
export declare function registerIoc(iocContainer: interfaces.Container, basePath: string, token?: string | (() => string)): void;
