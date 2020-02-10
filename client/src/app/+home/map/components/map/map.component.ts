/// <reference path="../../../../../../../node_modules/@types/googlemaps/index.d.ts" />

import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import * as MarkerClusterer from '@google/markerclusterer';
import { CLUSTER_STYLE } from '../../constants/cluster-style.constant';
import { MAP_STYLE } from '../../constants/map-style.constant';
import MapTypeStyle = google.maps.MapTypeStyle;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-map',
  styleUrls: ['map.component.scss'],
  template: `
    <section #map></section>
  `
})
export class MapComponent implements AfterViewInit, OnChanges {
  @ViewChild('map', {static: false}) private mapElement;

  @Input() markers: google.maps.Marker[];

  map: google.maps.Map;
  markerClusters: MarkerClusterer;

  ngOnChanges ({markers}: SimpleChanges) {
    if (!!this.map && !!markers) {
      this.markerClusters.clearMarkers();
      this.setMarkerClusters(markers.currentValue);
    }
  }

  ngAfterViewInit () {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: !!this.markers[0] ? this.markers[0].getPosition() : {lat: 0, lng: 0},
      zoom: 2,
      mapTypeControl: false,
      styles: MAP_STYLE as MapTypeStyle[]
    });

    this.setMarkerClusters(this.markers);
  }

  setMarkerClusters (markers: google.maps.Marker[]) {
    this.markerClusters = new MarkerClusterer.default(this.map, markers, {
      styles: CLUSTER_STYLE
    });
  }
}
