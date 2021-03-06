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
import VehicleModelListList from './VehicleModelListList';

/**
* The VehicleModelList model module.
* @module model/VehicleModelList
* @version 1.0.0
*/
export default class VehicleModelList {
    /**
    * Constructs a new <code>VehicleModelList</code>.
    * @alias module:model/VehicleModelList
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleModelList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleModelList} obj Optional instance to populate.
    * @return {module:model/VehicleModelList} The populated <code>VehicleModelList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleModelList();
                        
            
            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], [VehicleModelListList]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('count_per_page')) {
                obj['count_per_page'] = ApiClient.convertToType(data['count_per_page'], 'Number');
            }
            if (data.hasOwnProperty('page_count')) {
                obj['page_count'] = ApiClient.convertToType(data['page_count'], 'Number');
            }
            if (data.hasOwnProperty('name_page_parameter')) {
                obj['name_page_parameter'] = ApiClient.convertToType(data['name_page_parameter'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/VehicleModelListList>} list
    */
    list = undefined;
    /**
    * @member {Number} count
    */
    count = undefined;
    /**
    * @member {Number} count_per_page
    */
    count_per_page = undefined;
    /**
    * @member {Number} page_count
    */
    page_count = undefined;
    /**
    * @member {String} name_page_parameter
    */
    name_page_parameter = undefined;




}
