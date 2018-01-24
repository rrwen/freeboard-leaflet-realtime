// Richard Wen
// rrwen.dev@gmail.com

// Richard Wen
// rrwen.dev@gmail.com

// (define) Widget definition
freeboard.loadWidgetPlugin({
		
		// (define_info) Widget information
		'type_name'   : 'leaflet_realtime',
		'display_name': 'Realtime Leaflet Webmap',
        'description' : 'Create a realtime <a href="http://leafletjs.com/" target="_blank">Leaflet</a> webmap widget by fetching and updating data from a <a href="https://en.wikipedia.org/wiki/URL" target="_blank">URL</a> with <a href="https://github.com/perliedman/leaflet-realtime" target="_blank">leaflet-realtime</a>.',
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
				display_name: 'ID',
				type: 'text',
				default_value: 'map'
			},
			{
				name: 'basemap',
				display_name: 'Base Map URL',
				type: 'text',
				default_value: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
			},
			{
				name: 'view',
				display_name: 'Starting Point [Lat,Lon]',
				type: 'array',
				default_value: [0,0]
			},
			{
				name: 'zoom',
				display_name: 'Zoom Level',
				type: 'array',
				default_value: 13
			},
			{
				name: 'url',
				display_name: 'URL',
				type: 'text',
				default_value: 'https://wanderdrone.appspot.com/'
			},
			{
				name: 'interval',
				display_name: 'Interval (sec)',
				type: 'number',
				default_value: 3
			},
			{
				name: 'height',
				display_name: 'Height',
				type: 'number',
				default_value: 5
			},
			{
				name: 'attribution',
				display_name: 'Attribution',
				type: 'text',
				default_value: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			}
		],
		
		// (define_instance) Create widget instance
		newInstance: function(settings, callback) {
			callback(new widget(settings));
		}
});

// (widget) Widget implementation
var widget = function(settings)
	{
		var self = this;
		var current = settings;
		var div = $('<div id="' + current.id + '"></div>');
		var map, realtime;

		// (widget_render) Render webmap
		self.render = function(container) {
			
			// (widget_render_html) Add div to widget
			$(container).append(div);
			$(div).attr('style', 'width: 100%; height: 100vh;');
			$(div).attr('z-order', '-1');
			
			map = L.map(current.id).setView(current.view, current.zoom);

			L.tileLayer(current.basemap, {
				attribution: current.attribution
				subdomains: 'abcd',
				maxZoom: 19
			}).addTo(map);
			
			realtime = L.realtime({
				url: 'https://wanderdrone.appspot.com/',
				crossOrigin: true,
				type: 'json'
			}, {
				interval: 3 * 1000
			}).addTo(map);
		}

		// (widget_height) Return expected height of widget
		self.getHeight = function() {
			return current.height;
		}

		// (widget_change) Settings changed
		self.onSettingsChanged = function(changed) {
			current = changed;
			$(div).attr('id', changed.id);
		}

		// (widget_dispose) Remove and clean up widget
		self.onDispose = function() {
			map.remove();
			realtime.stop();
			realtime.remove();
		}
}
