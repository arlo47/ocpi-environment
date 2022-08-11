/**
 * The capabilities of an EVSE.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#143-capability-enum
 */
const OcpiCapabilities = ['CHARGING_PROFILE_CAPABLE', 'CREDIT_CARD_PAYABLE', 'RESERVABLE_RFID_READER'];

/**
 * Categories of energy sources.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_energysourcecategory_enum
 */
const OcpiEnergySourceCategory = [
  'NUCLEAR',
  'GENERAL_FOSSIL',
  'COAL',
  'GAS',
  'GENERAL_GREEN',
  'SOLAR',
  'WIND',
  'WATER',
];
/**
 * Categories of environmental impact values.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_environmentalimpactcategory_enum
 */
const EnvironmentalImpactCategory = ['NUCLEAR_WASTE', 'CARBON_DIOXIDE'];

/**
 * The socket or plug standard of the charging point.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#145-connectortype-enum
 */
const OcpiConnectorType = [
  'SOCKET',
  'CABLE',
  'CHADEMO',
  'DOMESTIC_A',
  'DOMESTIC_B',
  'DOMESTIC_C',
  'DOMESTIC_D',
  'DOMESTIC_E',
  'DOMESTIC_F',
  'DOMESTIC_G',
  'DOMESTIC_I',
  'DOMESTIC_J',
  'DOMESTIC_K',
  'DOMESTIC_L',
  'IEC_60309_2_single_16',
  'IEC_62196_T1_COMBO',
  'IEC_62196_T2',
  'IEC_62196_T2_COMBO',
  'IEC_62196_T3A',
  'IEC_62196_T3C',
  'TESLA_R',
  'TESLA_S',
];

/**
 * This value, if provided, represents the restriction to the parking spot for different purposes.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#1417-parkingrestriction-enum
 */
const OcpiParkingRestriction = ['EV_ONLY', 'PLUGGED', 'DISABLED', 'CUSTOMERS', 'MOTORCYCLES'];

/**
 * The category of an image to obtain the correct usage in a user presentation.
 * The category has to be set accordingly to the image content in order to guarantee
 * the right usage.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1416-imagecategory-enum
 */
const OcpiImageCategory = ['CHARGER', 'ENTRANCE', 'LOCATION', 'NETWORK', 'OPERATOR', 'OTHER', 'OWNER'];

/**
 * Reflects the general type of the charge point’s location. May be used for user information.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1418-parkingtype-enum
 */
const OcpiParkingType = ['ALONG_MOTORWAY', 'PARKING_GARAGE', 'PARKING_LOT', 'ON_DRIVEWAY', 'ON_STREET', 'UNDERGROUND_GARAGE'];

/**
 * Lists facilities at charging location.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#1412-facility-enum
 */
const OcpiFacility = [
  'HOTEL',
  'RESTAURANT',
  'CAFE',
  'MALL',
  'SUPERMARKET',
  'SPORT',
  'RECREATION_AREA',
  'NATURE',
  'MUSEUM',
  'BIKE_SHARING',
  'BUS_STOP',
  'TAXI_STAND',
  'TRAM_STOP',
  'METRO_STATION',
  'TRAIN_STATION',
  'AIRPORT',
  'PARKING_LOT',
  'CARPOOL_PARKING',
  'FUEL_STATION',
  'WIFI',
];

/**
 * The status of an EVSE.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1422-status-enum
 */
const OcpiEvseStatus = [
  'AVAILABLE',
  'BLOCKED',
  'CHARGING',
  'INOPERATIVE',
  'PLANNED',
  'REMOVED',
  'RESERVED',
  'UNKNOWN',
];

interface OcpiDisplayText {
  language: string;
  text: string;
}

/**
 * Key-value pairs (enum + percentage) of energy sources. All given values
 * of all categories should add up to 100 percent.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_energysource_class
 */
interface OcpiEnergySource {
  source: typeof OcpiEnergySourceCategory[];
  percentage: number;
}

/**
 * Amount of waste produced/emitted per kWh.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_environmentalimpact_class
 */
interface OcpiEnvironmentalImpact {
  category: typeof EnvironmentalImpactCategory[];
  amount: number;
}

/**
 * This type is used to specify the energy mix and environmental impact
 * of the supplied energy at a location or in a tariff.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_energymix_class
 */
interface OcpiEnergyMix {
  is_green_energy: boolean;
  energy_sources?: OcpiEnergySource
  environ_impact?: OcpiEnvironmentalImpact
  supplier_name?: string;
  energy_product_name?: string;
}

/**
 * This class references an image related to an EVSE in terms of a file name or url. According
 * to the roaming connection between one EVSE Operator and one or more Navigation Service Providers,
 * the hosting or file exchange of image payload data has to be defined. The exchange of this
 * content data is out of scope of OCPI. However, the recommended setup is a public available web
 * server hosted and updated by the EVSE Operator. Per charge point an unlimited number of images
 * of each type is allowed. Recommended are at least two images where one is a network or provider
 * logo and the second is a station photo. If two images of the same type are defined, not only one
 * should be selected but both should be displayed together.
 *
 * Photo Dimensions: The recommended dimensions for all photos is a minimum width of 800 pixels
 * and a minimum height of 600 pixels. Thumbnail should always have the same orientation as the
 * original photo with a size of 200 by 200 pixels.
 *
 * Logo Dimensions: The recommended dimensions for logos are exactly 512 pixels in width height.
 * Thumbnail representations of logos should be exactly 128 pixels in width and height. If not
 * squared, thumbnails should have the same orientation as the original.
 *
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1415-image-class
 */
 interface OcpiImage {
  url: string;
  thumbnail?: string;
  category: typeof OcpiImageCategory;
  type: string;
  width: number;
  height: number;
}

/**
 * Defines the set of values that identify a token to which a Location might be published.
 * At least one of the following fields SHALL be set: uid, visual_number, or group_id.
 * When uid is set, type SHALL also be set.
 * When visual_number is set, issuer SHALL also be set.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_publish_token_class
 */
interface PublishTokenType {
  uid: string;
  type: string;
  visual_number: string;
  issuer: string;
  group_id: string;
}

/**
 * Associated business details.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#142-businessdetails-class
 */
interface OcpiBusinessDetails {
  name: string;
  website: string;
  logo: OcpiImage;
}

/**
 * This class defines an additional geo location that is relevant for the Charge Point.
 * The geodetic system to be used is WGS 84.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#141-additionalgeolocation-class
 */
interface OcpiAdditionalGeoLocation {
  latitude: string;
  longitude: string;
  name: OcpiDisplayText;
}

/**
 * Specifies one exceptional period for opening or access hours.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1411-exceptionalperiod-class
 */
interface OcpiExceptionalPeriod {
  period_begin: Date;
  period_end: Date;
}

/**
 * This class defines the geo location of the Charge Point. The geodetic system to be used
 * is WGS 84.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1413-geolocation-class
 */
interface OcpiGeoLocation {
  latitude: string;
  longitude: string;
}

/**
 * Regular recurring operation or access hours.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1421-regularhours-class
 */
interface OcpiRegularHour {
  weekday: number;
  period_begin: string;
  period_end: string;
}

/**
 * Opening and access hours of the location.
 * @link https://github.com/ocpi/ocpi/blob/release-2.2.1-bugfixes/mod_locations.asciidoc#1414-hours-class
 */
interface OcpiHours {
  regular_hours: OcpiRegularHour[];
  twentyfourseven: boolean;
  exceptional_openings: OcpiExceptionalPeriod;
  exceptional_closings: OcpiExceptionalPeriod;
}

/**
 * A Connector is the socket or cable and plug available for the EV to use.
 * A single EVSE may provide multiple Connectors but only one of them can be
 * in use at the same time. A Connector always belongs to an EVSE object.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_connector_object
 */
interface OcpiConnector {
  id: string;
  standard: typeof OcpiConnectorType;
  format: string;
  power_type: string;
  max_voltage: number;
  max_amerage: number;
  max_electric_power?: number;
  tariff_ids?: string[];
  terms_and_conditions?: string;
  last_updated: Date;
}

/**
 * The EVSE object describes the part that controls the power supply to a
 * single EV in a single session. It always belongs to a Location object.
 * The object only contains directions to get from the location itself to
 * the EVSE (i.e. floor, physical_reference or directions).
 * When the directional properties of an EVSE are insufficient to reach the
 * EVSE from the Location point, then it typically indicates that the EVSE
 * should be put in a different Location object (sometimes with the same address
 * but with different coordinates/directions).
 *
 * An EVSE object has a list of Connectors which can not be used simultaneously:
 * only one connector per EVSE can be used at the time.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_evse_object
 */
interface OcpiEvse {
  uid: string;
  evse_id?: string;
  status: typeof OcpiEvseStatus;
  status_schedule?: typeof OcpiEvseStatus[];
  capabilities?: typeof OcpiCapabilities[];
  connectors: OcpiConnector[];
  floor_level?: string;
  coordinates?: OcpiGeoLocation;
  physical_reference?: string;
  directions?: OcpiDisplayText;
  parking_restrictions?: typeof OcpiParkingRestriction[];
  images?: OcpiImage[];
  last_updated: Date;
}

/**
 * The Location object describes the location and its properties where a
 * group of EVSEs that belong together are installed. Typically, the Location
 * object is the exact location of the group of EVSEs, but it can also be the
 * entrance of a parking garage which contains these EVSEs. The exact way to
 * reach each EVSE can be further specified by its own properties.
 *
 * Locations may be shown in apps or on websites etc. when the flag: publish is
 * set to true. Locations that have this flag set to false SHALL not be shown in
 * an app or on a website etc. unless it is to the owner of a Token in the
 * publish_allowed_to list. Even parties like NSP or eMSP that do not 'own' this
 * Token MAY show this location on an app or website, but only to the owner of that
 * Token. If the user of their app/website has provided information about his/her
 * Token, And that information matches all the fields of one of the PublishToken
 * tokens in the list, then they are allowed to show this location to their user.
 *
 * It is not allowed in OCPI to use a Token that is not 'owned' by the eMSP itself
 * to start a charging session.
 * @link https://github.com/ocpi/ocpi/blob/develop-2.2.1/mod_locations.asciidoc#mod_locations_location_object
 */
interface OcpiLocation {
  country_code: string;
  party_id: string;
  id: string;
  publish: boolean;
  publish_allowed_to?: PublishTokenType;
  name?: string;
  address: string;
  city: string;
  postal_code?: string;
  state?: string;
  coordinates: OcpiGeoLocation;
  related_locations?: OcpiAdditionalGeoLocation;
  parking_type: typeof OcpiParkingType;
  evses?: OcpiEvse[];
  directions?: OcpiDisplayText;
  operator?: OcpiBusinessDetails;
  suboperator?: OcpiBusinessDetails;
  owner?: OcpiBusinessDetails;
  facilities?: typeof OcpiFacility[];
  time_zone: string;
  opening_times?: OcpiHours;
  charging_when_closed?: boolean;
  images?: OcpiImage[];
  energy_mix?: OcpiEnergyMix;
  last_updated: Date;
}
