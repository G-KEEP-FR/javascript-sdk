/**
 * Gkeep API
 * Gkeep API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The UserGroupListInner model module.
* @module model/UserGroupListInner
* @version 1.0.0
*/
export default class UserGroupListInner {
    /**
    * Constructs a new <code>UserGroupListInner</code>.
    * @alias module:model/UserGroupListInner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UserGroupListInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserGroupListInner} obj Optional instance to populate.
    * @return {module:model/UserGroupListInner} The populated <code>UserGroupListInner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGroupListInner();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('system_name')) {
                obj['system_name'] = ApiClient.convertToType(data['system_name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Array.<String>} roles
    */
    roles = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} system_name
    */
    system_name = undefined;




}