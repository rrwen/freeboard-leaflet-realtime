// Richard Wen
// rrwen.dev@gmail.com

// (define) Widget definition
freeboard.loadWidgetPlugin({
		
		// (define_info) Widget information
		'type_name'   : 'leaflet_realtime',
		'display_name': 'Leaflet Map (Real Time)',
        'description' : 'Create a real time <a href="http://leafletjs.com/" target="_blank">Leaflet</a> webmap widget by fetching and updating <a href="http://geojson.org/" target="_blank">GeoJSON</a> data from a <a href="https://en.wikipedia.org/wiki/URL" target="_blank">URL</a> with <a href="https://github.com/perliedman/leaflet-realtime" target="_blank">leaflet-realtime</a>.<br><br><b>Note:</b> This widget must be recreated if you wish to change the settings.',
		'fill_size' : true,
		
		// (define_scripts) Load external scripts before widget
		'external_scripts': [
			'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
			'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
			'https://cdnjs.cloudflare.com/ajax/libs/leaflet-realtime/2.1.1/leaflet-realtime.js',
			'https://cdn.rawgit.com/stefanocudini/leaflet-search/a88dc07e/src/leaflet-search.css',
			'https://cdn.rawgit.com/stefanocudini/leaflet-search/a88dc07e/src/leaflet-search.js'
		],
		
		// (define_settings) User interface settings
		'settings'    : [
			{
				name: 'id',
				display_name: 'Map ID',
				type: 'text',
				default_value: 'leaflet-realtime'
			},
			{
				name: 'url',
				display_name: 'Data Source URL',
				type: 'text',
				default_value: 'https://wanderdrone.appspot.com/'
			},
			{
				name: 'propertiesID',
				display_name: 'Data Source Properties ID',
				type: 'text',
				default_value: 'id'
			},
			{
				name: 'interval',
				display_name: 'Refresh Interval (sec)',
				type: 'number',
				default_value: 3
			},
			{
				name: 'height',
				display_name: 'Widget Height',
				type: 'number',
				default_value: 8
			},
			{
				name: 'radius',
				display_name: 'Radius Style',
				type: 'number',
				default_value: 4
			},
			{
				name: 'color',
				display_name: 'Color Style',
				type: 'text',
				default_value: '#FFFFFF'
			},
			{
				name: 'weight',
				display_name: 'Weight Style',
				type: 'number',
				default_value: 0
			},
			{
				name: 'opacity',
				display_name: 'Opacity Style',
				type: 'number',
				default_value: 0
			},
			{
				name: 'fillColor',
				display_name: 'Fill Color Style',
				type: 'text',
				default_value: '#FF9900'
			},
			{
				name: 'fillOpacity',
				display_name: 'Fill Opacity Style',
				type: 'number',
				default_value: 1
			},
			{
				name: 'basemap',
				display_name: 'Base Map URL',
				type: 'text',
				default_value: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
			},
			{
				name: 'viewX',
				display_name: 'Starting Latitude',
				type: 'number',
				default_value: 0
			},
			{
				name: 'viewY',
				display_name: 'Starting Longitude',
				type: 'number',
				default_value: 0
			},
			{
				name: 'zoomPosition',
				display_name: 'Zoom Control Position',
				type: 'text',
				default_value: 'topright'
			},
			{
				name: 'zoom',
				display_name: 'Zoom Level',
				type: 'number',
				default_value: 2
			},
			{
				name: 'zoomMin',
				display_name: 'Minimum Zoom',
				type: 'number',
				default_value: 2
			},
			{
				name: 'zoomMax',
				display_name: 'Maximum Zoom',
				type: 'number',
				default_value: 19
			},
			{
				name: 'popup',
				display_name: 'Popup',
				type: "boolean",
				default_value: true
			},
			{
				name: 'search',
				display_name: 'Search',
				type: 'boolean',
				default_value: true
			},
			{
				name: 'searchPosition',
				display_name: 'Search Position',
				type: 'text',
				default_value: 'topleft'
			},
			{
				name: 'searchZoom',
				display_name: 'Search Zoom',
				type: 'number',
				default_value: 17
			},
			{
				name: 'searchHide',
				display_name: 'Search Hide Point',
				type: 'boolean',
				default_value: false
			}
		],
		
		// (define_instance) Create widget instance
		newInstance: function(settings, callback) {
			callback(new widget(settings));
		}
});

// (widget) Widget implementation
var widget = function(settings) {
	
		// (widget_vars) Widget variables
		var self = this;
		var current = settings;
		current.popup = current.popup || true;
		current.search = current.search || true;
		current.searchZoom = current.searchZoom || 17;
		current.searchPosition = current.searchPosition || 'topleft';
		current.searchHide = current.searchHide || false;
		current.zoomPosition = current.zoomPosition || 'topright';
		var div = $('<div></div>');
		var map, realtime;

		// (widget_render) Render webmap
		self.render = function(container) {
			
			// (widget_render_html) Add div to widget
			div.attr('id', current.id);
			$(div).attr('style', 'width: 100%; height: 100vh; z-index: 1;');
			$(container).append(div);
			
			// (widget_render_remove) Remove non compatible tools
			$(container).parent().find('[data-bind="pluginEditor: {operation: \'edit\', type: \'widget\'}"]').remove();
			$(container).parent().find('.sub-section-tools').remove();
			$(container).parent().parent().parent().find('[data-bind="pluginEditor: {operation: \'edit\', type: \'pane\'}"]').remove();
			$(container).parent().parent().parent().find('[data-bind="pluginEditor: {operation: \'add\', type: \'widget\'}"]').remove();
			
			// (widget_render_map) Create leaflet map
			map = L.map(current.id, {zoomControl: false}).setView([current.viewX, current.viewY], current.zoom);
			L.control.zoom({position: current.zoomPosition}).addTo(map);
			
			// (widget_render_tiles) Create leaflet base tiles
			L.tileLayer(current.basemap, {
				minZoom: current.zoomMin,
				maxZoom: current.zoomMax
			}).addTo(map);
			
			// (widget_render_search) Create search button
			if (current.search) {
				map.addControl(new L.Control.Search({
					position: current.searchPosition,
					collapsed: true,
					url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
					jsonpParam: 'json_callback',
					propertyName: 'display_name',
					propertyLoc: ['lat','lon'],
					hideMarkerOnCollapse: current.searchHide,
					minLength: 2,
					textPlaceholder: 'Search Location...', 
					marker: {
								icon: false,
								animate: true,
								circle: {
									radius: current.radius + 2,
									weight: current.weight + 1,
									color: current.fillColor,
									fill: false
								}
					},
					moveToLocation: function(latlng, title, map) {
						map.setView(latlng, current.searchZoom);
					}
				}));
			}
			
			// (widget_render_realtime) Create realtime map layer
			realtime = L.realtime({
				url: current.url,
				crossOrigin: true,
				type: 'json'
			},
			{
				interval: current.interval * 1000,
				getFeatureId: function(feature) {
					return feature.properties[current.propertiesID];
				},
				style: {
					color: current.color,
					weight: current.weight,
					opacity: current.opacity,
					fillColor: current.fillColor,
					fillOpacity: current.fillOpacity
				},
				pointToLayer: function(feature, latlng) {
					return L.circleMarker(latlng, {
						radius: current.radius,
						color: current.color,
						weight: current.weight,
						opacity: current.opacity,
						fillColor: current.fillColor,
						fillOpacity: current.fillOpacity
					});
				},
				onEachFeature: function (feature, layer) {
					if (current.popup && feature.properties) {
						var popupHTML = '';
						for (var k in feature.properties) {
							if (feature.properties[k]) {
								popupHTML += '<p style="word-wrap: break-word; white-space: normal;"><b>' + k + '</b>: ' + feature.properties[k] +  '</p><br>';
							}
						}
						layer.bindPopup(popupHTML);
					}
				}
			}).addTo(map);
			setTimeout(function () {
				map.invalidateSize()
			}, 250);
		};

		// (widget_height) Return expected height of widget
		self.getHeight = function() {
			return current.height;
		};

		// (widget_change) Settings changed - currently disabled
		self.onSettingsChanged = function(changed) {};

		// (widget_dispose) Remove and clean up widget
		self.onDispose = function() {
			realtime.stop();
			map.remove();
			$(div).remove();
		};
};
