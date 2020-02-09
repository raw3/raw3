/// <reference path="../../../../../../../../node_modules/@types/googlemaps/index.d.ts" />

import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import * as MarkerClusterer from '@google/markerclusterer';
import { clusterStyle } from '../../constants/cluster-style.constant';
import { mapStyle } from '../../constants/map-style.constant';
import MapTypeStyle = google.maps.MapTypeStyle;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-map',
  styleUrls: ['map.component.scss'],
  template: `
    <section #map>
      <ng-content></ng-content>
    </section>
  `
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map', {static: false}) private mapElement;

  @Input() markers: google.maps.Marker[];

  map: google.maps.Map;
  markerCluster: MarkerClusterer;

  ngAfterViewInit () {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: this.markers[0].getPosition(),
      zoom: 2,
      mapTypeControl: false,
      styles: mapStyle as MapTypeStyle[]
    });

    this.markerCluster = new MarkerClusterer.default(this.map, this.markers, {
      styles: clusterStyle
    });
  }
}
