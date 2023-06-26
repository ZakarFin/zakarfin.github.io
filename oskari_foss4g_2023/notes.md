- 2.8 viime fossissa
- 2.9
- 2.11

# React:
- guided tour
- layer selection on embedded maps
- publisher name/visualization/layout and some of tools
- MapButton (oskari-ui/generic button on map)
- MapModuleButton (mapmodule uses ^ and adds map theme handling)
- SidePanel (Handles theme)
- Printout options panel (^theme support)
- Timeline for timeseries UI
- Badge now supports theming
- User management UI
- MovableContainer -> popup without header
- React flyouts have an option to be resizable by user
- IconButton base component for many common icon based buttons
- CopyField/CopyButton for clipboard functionality
- Lots of popups from toolbar functionalities rewritten jQuery -> React




# DescribeLayer

https://github.com/oskariorg/oskari-frontend/blob/master/ReleaseNotes.md#layer-handling-changes-for-developers

- styles/tilematrixes
- the future for minimizing layer list response
- WMTS layers no longer "the special case"
- WFS layer/vector layer properties

Generic:
- png icons -> svg
- isVisibleOnMap for layers
  - if the user has hidden the layer
  - if the map is out of the scale range for the layer
  - if the layers coverage area is not on the map viewport
  - if the layer can't be shown (due not being supported like 3dtiles on non-3D map)
- Oskari.util.formatDate() 
- error handling improvements:
 - wmts no tilematrix
 - adding a hidden layer on the map
 - large content cells on tables work better
 - handle geojson feature with property named "geometry"
 - swipe tool and crosshair now under infobox popup
 - hiding marker thats already hidden doesn't trigger errors
 - timeseries with single value handled as normal layer (non-timeseries)
 - http 404 missing page now more consistent on server
- cleanup metadata search config (only service.metadata.url needed now)

- lots of libraries  updated or removed!:
 - nodejs 12 -> 16
 - geostats
 - enzyme -> testing library
 - AntD-icons still uses React 16...
 - moment.js -> day.js
 - d3 through npm
 - node-sass prevents from using Node18 at the moment



Build tools:
- build can be generated for non-default domain
- server config as well ^
--------------------------------

# Publisher
Most restraints for plugin placement have been removed so they can be moved more freely.
- layer tools and RPC-tools under new/revised panels
- tool API improved for DX
- most plugins rewritten/reorganized to make them better examples
- https://oskari.org/documentation/features/publisher/tools

- Oskari.dom.isEmbedded()

# RPC:
- StartDrawingRequest limits for line/area to draw in square meters
- ^ buffers for all features on collection
- tooltips no longer block clicks
- enabled code versioning (embedded map can request older version)


# Customization:

# MapPlugins
- MapPlugin DX improvements:
    - https://oskari.org/documentation/features/map/mapplugin
- new lifecycle/generic functions, removed bunch of old ones
- toolStyle has been completely replaced by theming

# Theme:
- support for colors on jQuery-based code
- ThemeHelper for digging and fallbacking theme variables more easily
- ThemeHelper.getHeaderTheme({...theme})

    const bgColor = theme.color?.header?.bg || theme.color?.primary || DEFAULT_COLORS.HEADER_BG;
    const headerTextColor = getTextColor(bgColor);
    const toolColor: theme.color?.header?.icon || headerTextColor,
    
- ThemeHelper.getNavigationTheme({...theme})
-> navigation (buttons on map etc)

Style editors now offer theme colors as default colors


## Map theme:
- follows same structure as theme object but can override the keys for plugins on map
-> also windows on map
-> publisher -> otherwise selecting colors for embedded map could affect colors on geoportal



# Embedded maps:
- Metadata links can be shown on embedded maps

- Search improvements
    - channel toggles
    - on par with geoportal search UI functionalities
    - WFS search channels -> region mapping to be configurable 
    -> non-WFS search channels can have userfriendly and localized names/descriptions
- link to geoportal can be disabled with instance config

- metadata search more configurable
-> some instances were very slow to respond to csw:AnyText queries
 - response parsing improvements for missing or invalid bbox

# Vector layers 
- style can be saved by end-users
- stored in DB oskari_maplayer_style (migrated from oskari_maplayer.options)
- instance default style can be customized here as well
- can be used in links/embedded maps
- works for printing as well :)

- feature hover improvememts:
    - swipe tool
    - publisher tool dragging

# Major HTML structure change
- taulukko eri DOM-elementeistä 2.10?
- tarvittiin mobiilituen kehittämiseksi
- mapDiv/contentDiv
-> rootEl
  -> nav
  -> mapContainer
- pois kovakoodatuista pikselikoosta
- mapmodule now monitors size -> notifies plugins

- Popups are no longer attached to document body, but under Oskari root element.
- Popup (and MovableContainer) now detects size changes and tries to keep the container on screen. So if the content grows beyond screen viewport the container is moved to accommodate content change.

# Mobile
- mobile toolbar removed
- all plugins have been rewritten in React
- plugins can now modify themselves depending on screen size
- plugin API improved for DX
- Oskari.util.isSmallScreen()
- Oskari.util.isMobile()
- 
- UI elements are shifted accordingly (windows close from blocking the map when map moves etc)
- 


# Cloud compatibility

- Azure app service
- Redis PAAS
-> New configs enabled for: password, SSL, timeout, pool size
- PostgreSQL PAAS
- storage account
- caching now supports flush all in clustered env
- log noise reduced
- JNDI db connection is no longer required
-> caused problems on Tomcat envs (read only context)
-> caused problems in PAAS env
- cdn support for frontend

LayerAdmin:
- visualize coverage area
- Declutter toggle for vector tiles

Admin
- layer analytics search tools
- user management has been improved
- user management is now usable with instance having 25k+ users and external authentication (for handling authorization)
-> non system-roles can be edited
-> system roles configurable and renaming will cause issues
-> sanity checks: users can no longer be assigned "Guest" role etc
-> password/email validations are now same as with end-user registration
-> searching for users 

