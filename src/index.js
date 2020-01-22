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

import ApiClient from './ApiClient';
import AlertList from './model/AlertList';
import AlertListCode from './model/AlertListCode';
import AlertListDesc from './model/AlertListDesc';
import AlertListDriver from './model/AlertListDriver';
import AlertListLevel from './model/AlertListLevel';
import AlertListList from './model/AlertListList';
import AlertListVehicle from './model/AlertListVehicle';
import AlertListVehicleOwner from './model/AlertListVehicleOwner';
import AuthorizedUser from './model/AuthorizedUser';
import FleetStatus from './model/FleetStatus';
import LastAlertList from './model/LastAlertList';
import LastAlertListInner from './model/LastAlertListInner';
import UserCredentials from './model/UserCredentials';
import UserProfile from './model/UserProfile';
import UserProfileGeoLocalizationSettings from './model/UserProfileGeoLocalizationSettings';
import UserProfileGroups from './model/UserProfileGroups';
import UserProfileLang from './model/UserProfileLang';
import VehicleDailyStats from './model/VehicleDailyStats';
import VehicleList from './model/VehicleList';
import VehicleListDesc from './model/VehicleListDesc';
import VehicleListGroups from './model/VehicleListGroups';
import VehicleListList from './model/VehicleListList';
import VehicleListSensor from './model/VehicleListSensor';
import VehicleStatus from './model/VehicleStatus';
import VehicleStatusTank from './model/VehicleStatusTank';
import VehicleStatusTankTankType from './model/VehicleStatusTankTankType';
import VehicleStatusTanks from './model/VehicleStatusTanks';
import VehicleStatusVehicle from './model/VehicleStatusVehicle';
import VehicleStatusVehicleDriver from './model/VehicleStatusVehicleDriver';
import UserAuthorizationApi from './api/UserAuthorizationApi';
import V2Api from './api/V2Api';

/**
* Gkeep_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GkeepApi = require('index'); // See note below*.
* var xxxSvc = new GkeepApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GkeepApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GkeepApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GkeepApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AlertList model constructor.
     * @property {module:model/AlertList}
     */
    AlertList,

    /**
     * The AlertListCode model constructor.
     * @property {module:model/AlertListCode}
     */
    AlertListCode,

    /**
     * The AlertListDesc model constructor.
     * @property {module:model/AlertListDesc}
     */
    AlertListDesc,

    /**
     * The AlertListDriver model constructor.
     * @property {module:model/AlertListDriver}
     */
    AlertListDriver,

    /**
     * The AlertListLevel model constructor.
     * @property {module:model/AlertListLevel}
     */
    AlertListLevel,

    /**
     * The AlertListList model constructor.
     * @property {module:model/AlertListList}
     */
    AlertListList,

    /**
     * The AlertListVehicle model constructor.
     * @property {module:model/AlertListVehicle}
     */
    AlertListVehicle,

    /**
     * The AlertListVehicleOwner model constructor.
     * @property {module:model/AlertListVehicleOwner}
     */
    AlertListVehicleOwner,

    /**
     * The AuthorizedUser model constructor.
     * @property {module:model/AuthorizedUser}
     */
    AuthorizedUser,

    /**
     * The FleetStatus model constructor.
     * @property {module:model/FleetStatus}
     */
    FleetStatus,

    /**
     * The LastAlertList model constructor.
     * @property {module:model/LastAlertList}
     */
    LastAlertList,

    /**
     * The LastAlertListInner model constructor.
     * @property {module:model/LastAlertListInner}
     */
    LastAlertListInner,

    /**
     * The UserCredentials model constructor.
     * @property {module:model/UserCredentials}
     */
    UserCredentials,

    /**
     * The UserProfile model constructor.
     * @property {module:model/UserProfile}
     */
    UserProfile,

    /**
     * The UserProfileGeoLocalizationSettings model constructor.
     * @property {module:model/UserProfileGeoLocalizationSettings}
     */
    UserProfileGeoLocalizationSettings,

    /**
     * The UserProfileGroups model constructor.
     * @property {module:model/UserProfileGroups}
     */
    UserProfileGroups,

    /**
     * The UserProfileLang model constructor.
     * @property {module:model/UserProfileLang}
     */
    UserProfileLang,

    /**
     * The VehicleDailyStats model constructor.
     * @property {module:model/VehicleDailyStats}
     */
    VehicleDailyStats,

    /**
     * The VehicleList model constructor.
     * @property {module:model/VehicleList}
     */
    VehicleList,

    /**
     * The VehicleListDesc model constructor.
     * @property {module:model/VehicleListDesc}
     */
    VehicleListDesc,

    /**
     * The VehicleListGroups model constructor.
     * @property {module:model/VehicleListGroups}
     */
    VehicleListGroups,

    /**
     * The VehicleListList model constructor.
     * @property {module:model/VehicleListList}
     */
    VehicleListList,

    /**
     * The VehicleListSensor model constructor.
     * @property {module:model/VehicleListSensor}
     */
    VehicleListSensor,

    /**
     * The VehicleStatus model constructor.
     * @property {module:model/VehicleStatus}
     */
    VehicleStatus,

    /**
     * The VehicleStatusTank model constructor.
     * @property {module:model/VehicleStatusTank}
     */
    VehicleStatusTank,

    /**
     * The VehicleStatusTankTankType model constructor.
     * @property {module:model/VehicleStatusTankTankType}
     */
    VehicleStatusTankTankType,

    /**
     * The VehicleStatusTanks model constructor.
     * @property {module:model/VehicleStatusTanks}
     */
    VehicleStatusTanks,

    /**
     * The VehicleStatusVehicle model constructor.
     * @property {module:model/VehicleStatusVehicle}
     */
    VehicleStatusVehicle,

    /**
     * The VehicleStatusVehicleDriver model constructor.
     * @property {module:model/VehicleStatusVehicleDriver}
     */
    VehicleStatusVehicleDriver,

    /**
    * The UserAuthorizationApi service constructor.
    * @property {module:api/UserAuthorizationApi}
    */
    UserAuthorizationApi,

    /**
    * The V2Api service constructor.
    * @property {module:api/V2Api}
    */
    V2Api
};
