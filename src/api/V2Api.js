/**
 * Gkeep API
 * Gkeep API
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import AlertList from '../model/AlertList';
import FleetStatus from '../model/FleetStatus';
import LastAlertList from '../model/LastAlertList';
import UserProfile from '../model/UserProfile';
import VehicleDailyStats from '../model/VehicleDailyStats';
import VehicleList from '../model/VehicleList';
import VehicleStatus from '../model/VehicleStatus';

/**
* V2 service.
* @module api/V2Api
* @version 0.0.1
*/
export default class V2Api {

    /**
    * Constructs a new V2Api. 
    * @alias module:api/V2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getAlerts operation.
     * @callback module:api/V2Api~getAlertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlertList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alerts
     * @param {Object} opts Optional parameters
     * @param {module:api/V2Api~getAlertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlertList}
     */
    getAlerts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter[created][date_start]': opts['filterCreatedDateStart'],
        'filter[created][date_end]': opts['filterCreatedDateEnd'],
        'filter[code_special]': opts['filterCodeSpecial']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = AlertList;

      return this.apiClient.callApi(
        '/api/v2/alerts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getFletLastInfos operation.
     * @callback module:api/V2Api~getFletLastInfosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FleetStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get fleet last-infos
     * @param {module:api/V2Api~getFletLastInfosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FleetStatus}
     */
    getFletLastInfos(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FleetStatus;

      return this.apiClient.callApi(
        '/api/v2/fleet/last-infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLastAlerts operation.
     * @callback module:api/V2Api~getLastAlertsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LastAlertList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get last alerts
     * @param {module:api/V2Api~getLastAlertsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LastAlertList}
     */
    getLastAlerts(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LastAlertList;

      return this.apiClient.callApi(
        '/api/v2/alerts/last', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getUserProfile operation.
     * @callback module:api/V2Api~getUserProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user-profiles
     * @param {module:api/V2Api~getUserProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserProfile}
     */
    getUserProfile(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserProfile;

      return this.apiClient.callApi(
        '/api/v2/user-profiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVehicles operation.
     * @callback module:api/V2Api~getVehiclesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vehicles
     * @param {module:api/V2Api~getVehiclesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VehicleList}
     */
    getVehicles(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = VehicleList;

      return this.apiClient.callApi(
        '/api/v2/vehicles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVehiclesDailyStats operation.
     * @callback module:api/V2Api~getVehiclesDailyStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleDailyStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vehicles daily
     * @param {module:api/V2Api~getVehiclesDailyStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VehicleDailyStats}
     */
    getVehiclesDailyStats(vehicleId, callback) {
      let postBody = null;

      let pathParams = {
        'vehicleId': vehicleId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VehicleDailyStats;

      return this.apiClient.callApi(
        '/api/v2/vehicles/{vehicleId}/daily', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVehiclesLatestStats operation.
     * @callback module:api/V2Api~getVehiclesLatestStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VehicleStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vehicles last-infos
     * @param {module:api/V2Api~getVehiclesLatestStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VehicleStatus}
     */
    getVehiclesLatestStats(vehicleId, callback) {
      let postBody = null;

      let pathParams = {
        'vehicleId': vehicleId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = VehicleStatus;

      return this.apiClient.callApi(
        '/api/v2/vehicles/{vehicleId}/last-infos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
