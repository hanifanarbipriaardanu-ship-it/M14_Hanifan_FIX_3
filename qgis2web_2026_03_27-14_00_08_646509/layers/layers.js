var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://opentopomap.org/about#datenstand">OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKabupatenSleman_3 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupatenSleman_3 = format_BatasAdministrasiKabupatenSleman_3.readFeatures(json_BatasAdministrasiKabupatenSleman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupatenSleman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupatenSleman_3.addFeatures(features_BatasAdministrasiKabupatenSleman_3);
var lyr_BatasAdministrasiKabupatenSleman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKabupatenSleman_3, 
                style: style_BatasAdministrasiKabupatenSleman_3,
                popuplayertitle: 'Batas Administrasi Kabupaten Sleman',
                interactive: true,
    title: 'Batas Administrasi Kabupaten Sleman<br />\
    <img src="styles/legend/BatasAdministrasiKabupatenSleman_3_0.png" /> Rendah (663,8 - 1442,15)<br />\
    <img src="styles/legend/BatasAdministrasiKabupatenSleman_3_1.png" /> Sedang (1442,15 - 2652,41)<br />\
    <img src="styles/legend/BatasAdministrasiKabupatenSleman_3_2.png" /> Tinggi (2652,41 - 3699,49)<br />' });
var format_TempatPentingKabupatenSleman_4 = new ol.format.GeoJSON();
var features_TempatPentingKabupatenSleman_4 = format_TempatPentingKabupatenSleman_4.readFeatures(json_TempatPentingKabupatenSleman_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPentingKabupatenSleman_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPentingKabupatenSleman_4.addFeatures(features_TempatPentingKabupatenSleman_4);
var lyr_TempatPentingKabupatenSleman_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatPentingKabupatenSleman_4, 
                style: style_TempatPentingKabupatenSleman_4,
                popuplayertitle: 'Tempat Penting Kabupaten Sleman',
                interactive: true,
    title: 'Tempat Penting Kabupaten Sleman<br />\
    <img src="styles/legend/TempatPentingKabupatenSleman_4_0.png" /> Kalurahan<br />\
    <img src="styles/legend/TempatPentingKabupatenSleman_4_1.png" /> Kecamatan<br />\
    <img src="styles/legend/TempatPentingKabupatenSleman_4_2.png" /> Kependudukan<br />\
    <img src="styles/legend/TempatPentingKabupatenSleman_4_3.png" /> Pemerintahan<br />\
    <img src="styles/legend/TempatPentingKabupatenSleman_4_4.png" /> <br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_BatasAdministrasiKabupatenSleman_3.setVisible(true);lyr_TempatPentingKabupatenSleman_4.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleSatellite_1,lyr_OSMStandard_2,lyr_BatasAdministrasiKabupatenSleman_3,lyr_TempatPentingKabupatenSleman_4];
lyr_BatasAdministrasiKabupatenSleman_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Kepadatan_': 'Kepadatan_', });
lyr_TempatPentingKabupatenSleman_4.set('fieldAliases', {'id': 'id', 'nama_tempat': 'nama_tempat', 'kategori': 'kategori', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', });
lyr_BatasAdministrasiKabupatenSleman_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Kepadatan_': 'TextEdit', });
lyr_TempatPentingKabupatenSleman_4.set('fieldImages', {'id': 'Range', 'nama_tempat': 'TextEdit', 'kategori': 'TextEdit', 'X_UTM': 'TextEdit', 'Y_UTM': 'TextEdit', });
lyr_BatasAdministrasiKabupatenSleman_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'inline label - visible with data', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'UUPP': 'hidden field', 'LUAS': 'inline label - visible with data', 'Kepadatan_': 'inline label - visible with data', });
lyr_TempatPentingKabupatenSleman_4.set('fieldLabels', {'id': 'no label', 'nama_tempat': 'inline label - visible with data', 'kategori': 'inline label - always visible', 'X_UTM': 'inline label - visible with data', 'Y_UTM': 'inline label - visible with data', });
lyr_TempatPentingKabupatenSleman_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});