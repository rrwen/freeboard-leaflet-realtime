// Richard Wen
// rrwen.dev@gmail.com

// (define) Widget definition
freeboard.loadWidgetPlugin({
		
		// (define_info) Widget information
		'type_name'   : 'leaflet_realtime',
		'display_name': 'Leaflet Map (Real Time)',
        'description' : 'Create a real time <a href="http://leafletjs.com/" target="_blank">Leaflet</a> webmap widget by fetching and updating <a href="http://geojson.org/" target="_blank">GeoJSON</a> data from a <a href="https://en.wikipedia.org/wiki/URL" target="_blank">URL</a> with <a href="https://github.com/perliedman/leaflet-realtime" target="_blank">leaflet-realtime</a>.<br><br><b>Note:</b>You must recreate the web map if you wish to change the settings.',
		'fill_size' : true,
		
		// (define_scripts) Load external scripts before widget
		'external_scripts': [
			'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
			'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
			'https://cdnjs.cloudflare.com/ajax/libs/leaflet-realtime/2.1.1/leaflet-realtime.js'
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
				default_value: 5
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
			map = L.map(current.id).setView([current.viewX, current.viewY], current.zoom);
			
			// (widget_render_tiles) Create leaflet base tiles
			L.tileLayer(current.basemap, {
				minZoom: current.zoomMin,
				maxZoom: current.zoomMax
			}).addTo(map);
			
			// (widget_render_realtime) Create realtime map layer
			realtime = L.realtime({
				url: current.url,
				crossOrigin: true,
				type: 'json'
			},
			{
				interval: current.interval * 1000
				getFeatureId: function(feature) {
					return feature.properties[current.propertiesID]
				}
			}).addTo(map);
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
