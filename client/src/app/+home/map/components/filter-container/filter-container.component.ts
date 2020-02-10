import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QueryParams } from '@client/src/app/shared/enums';
import { MapFilter } from '@client/src/app/+home/map/enums/map-filter.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'raw3-filter-container',
  styleUrls: ['filter-container.component.scss'],
  template: `
    <raw3-checkbox
      id="filter-blogs"
      label="Blogs"
      [checked]="hasFilterDisabled(MapFilter.BLOGS)"
      (clicked)="filterMap(MapFilter.BLOGS)"
    ></raw3-checkbox>

    <raw3-checkbox
      id="filter-photos"
      label="Photos"
      [checked]="hasFilterDisabled(MapFilter.PHOTOS)"
      (clicked)="filterMap(MapFilter.PHOTOS)"
    ></raw3-checkbox>

    <raw3-checkbox
      id="filter-projects"
      label="Projects"
      [checked]="hasFilterDisabled(MapFilter.PROJECTS)"
      (clicked)="filterMap(MapFilter.PROJECTS)"
    ></raw3-checkbox>
  `
})
export class FilterContainerComponent {
  @Input() filters: MapFilter[];

  readonly MapFilter = MapFilter;

  constructor (private readonly router: Router) {
  }

  hasFilterDisabled (mapFilter: MapFilter) {
    return !this.filters.includes(mapFilter);
  }

  filterMap (newFilter: MapFilter) {
    let newParams;

    if (!this.filters || !this.filters.length) {
      newParams = [newFilter];
    } else {
      newParams = this.filters.includes(newFilter) ? this.filters.filter(param => param !== newFilter) : [...this.filters, newFilter];
    }

    this.router.navigate(['/'], {
      ...(newParams.length > 0 ? {queryParams: {[QueryParams.FILTER]: newParams}} : {})
    });
  }
}
