- 2.11 viime fossissa
- 2.11.1 ja 2.11.2
- 2.12 (2.12.1)
- 2.13 (2.13.1 ja 2.13.2)

https://github.com/oskariorg/oskari-documentation/
https://github.com/oskariorg/oskari-documentation-site/



What we will be working on next:
Community:
New website & improving documentation
Instructions for Procurement
Developing Oskari:
Finishing touches for React (map publisher)
Combining own places and datasets for easier maintenance
Maintaining a large number (1000>) of map layers: Improving admin tools and especially reporting tools for Oskari’s admin users
Accessibility of published maps

--------------
2.12 & 2.13



## Mobile mode:
 - GetAppSetup accepts mobile=[boolean] to change bundles based on configuration (https://github.com/oskariorg/oskari-server/pull/995)
 - Changes to both: functionalities to work on smaller screens and added configuration option
 - The main navigation now adds a new button/plugin on map on smaller screens that allows user to hide/show the main navigation, leaving more room for the map.
 - The `FullScreenPlugin` that makes the map full size is not shown on smaller screens because of ^
- The plugins on the map bottom now flow better on smaller screens/layout improvements so UI elements don't overlap
- tooltips work better on smaller screens
- popup placement works better on smaller screens
- map layer legend is now scaled to fit screen (and added a link to open new tab with full legend image)
- metadataflyout doesn't show "Actions" tab on smaller screens as they don't make much sense on mobile experience
- zoombox tool is not shown on smaller screens as most small screens have touch support and removing tools makes other tools easier to find
- measurement/marker tools now hide main navigation on small screens
- Marker form now works better on smaller screens
- Tuned limits when screen is detected as "small"
- Announcements banners now work better on smaller screens
- POC for detecting screen zoom
- For developers there's more tools to work with "mobile support":
    - Oskari.dom
        - showNavigation(bln)
        - isNavigationVisible()
        - getNavigationEl()
    - Oskari.util.mouseExists()

- configuration: https://github.com/oskariorg/sample-configs/blob/master/jetty-9/oskari-server/resources/oskari-ext.properties#L108


# Admins
### Map layer management

For vector sources that now have an user-interface
- filter out features based on feature data
- styling based on feature properties
- styling for hovered feature
- adding hover tooltips (including feature property)
- select a property to be used as an id (helps fixing identifying a feature when the service is generating ids at runtime)
- formatting feature data
    - select which properties to show/hide (even based on end-user language)
    - select order for properties
    - localize and rename properties
    - format property value as link, image, number, phonenumber
    - skip showing property name and show property value as heading
    - skip showing properties without a value
- GFI from WMS-layers can now be formatted from JSON as well

- Admins can now search the layerlisting with layer id and/or technical name
- Layer admin JSON-fields added

https://demo-kartta.paikkatietoikkuna.fi/?zoomLevel=0&coord=545163.0477466037_6966856.93753094&mapLayers=801+100+default,2424+100+Oletustyyli,4090+80+140&uuid=90246d84-3958-fd8c-cb2c-2510cccca1d3&noSavedState=true&showIntro=false

- Added support for optional/external metadata url: https://github.com/oskariorg/oskari-frontend/pull/2594

### Theming
- More components now use theming variables (time series UI, text selection etc)
- Announcements banner works better on dark themes
- Default vector layer style for Oskari instance (now saved to db/sent as part of GetAppSetup instead of hard coded on frontend)

Oskari.app.getTheming().setTheme(
{"color":{"icon":"#FFFFFF","accent":"#0c3c62","primary":"#009fe3","header":{"bg":"#009fe3","icon":"#FFFFFF","text":"#FFFFFF"},"text":"#FFFFFF"},"navigation":{"color":{"accent":"#0c3c62","primary":"#FFFFFF"}},"map":{"color":{"header":{"bg":"#009fe3","icon":"#FFFFFF","text":"#FFFFFF"},"accent":"#0c3c62"},"navigation":{"color":{"text":"#000000","accent":"#009fe3","primary":"#FFFFFF"},"roundness":50,"opacity":0.8},"font":"arial"}})

### User management:
- validation on frontend to make adding/editing users more adminuser-friendly
    - uses same validation rules as end-user registration
- created/last login timestamps for users
- added listing: users by role
- paging for users lists to work with big user databases
- Permissions route `LayerPermission` (new) -> API changed (https://github.com/oskariorg/oskari-server/pull/973). Replaces `GetPermissionsLayerHandlers` and `SaveLayerPermission`
- GFI queries now check permissions

## Bundles:
### New 
- featuredata (replaces featuredata2)
- admin-permissions (replaces admin-layerrights)
- metadatasearch (replaces metadatacatalogue)

### Removed bundles:
- personaldata (replaced by mydata)

### In-place rewrites:
- statsgrid (needs ref update on main.js)
- (BackgroundLayerSelectionPlugin)
- (layerlist) admin for groups and data provider
- session expiration popup
- publisher

## Other
- Swipe tool can now be included in embedded maps and be preactived with URL-parameter: `swipe=true`
https://demo-kartta.paikkatietoikkuna.fi/?lang=fi&uuid=3592a5ea-7650-4a2b-81ba-feb4f4963d65

https://demo-kartta.paikkatietoikkuna.fi/?zoomLevel=10&coord=383613.12078668794_6675458.860369952&mapLayers=24+100+default,3400+100+&timeseries=1996&swipe=true&uuid=90246d84-3958-fd8c-cb2c-2510cccca1d3&noSavedState=true&showIntro=false

- Printouts can now include coordinates
- Reverse geocoding support added for OSM search channel.
- Cache-keys are now consistent for statistical data source data
- Added support for SotkaNet wellbeing services counties
- Marker handling refactored
- GFI when map has been rotated
- Coverage area can now be shown to end-users
- Announcements polling by frontend

# DEVS
- RPC example rewritten!
- https://oskari.org/examples/rpc-api

## Bundled in GeoServer removed:
- less maintenance work
- my places and userlayers now work directly through database
- analysis still uses GeoServer (only used in paikkatietoikkuna.fi?). Refactoring in near future.
- Removed setup.war and geoserver-rest-client.
- Existing instances can shutdown the GeoServer and remove related configuration from oskari-ext.properties (https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md)

## DescribeLayer route:
- Added metadata about attributes available on WFS layers.
- Added configuration of attributes like renaming, hiding and reordering properties and for formatting attribute values.
- Added a simple type for layer geometry that allows optimizing frontend based on the geometry type (point/line/polygon).

## Fixes:
- WMTS projection compatibility (https://github.com/oskariorg/oskari-server/pull/991)
- WFS-T editing features respects coordinate axis-order (when Geoserver is not running on same server) https://github.com/oskariorg/oskari-server/pull/976
- Reduced noise on logs when WFS service doesn't respond with JSON/GML
- Fixed a null-value in requests sent by Oskari from Oskari/null to Oskari/0.0 when the version information is not available.
- Improved error handling when programmatically adding layers on server migration

### Tons of library updates
- Logging library SLF4J update requires manual update on Oskari-based apps.
- DB connection pooling now through `HikariCP` instead of `BasicDataSource`/`commons-dbcp2`
- Frontend testing unit testing library changed from `enzyme` to `testing-library`
- Background work for supporting React-based publisher tools

### Components
- icons: metadata, info, layer types
- MapModuleTextButton 
- badge

### Note! Older installs:
- 2.11.x lots of things made asynchronous -> affected some RPC apps -> notice when updating older installs