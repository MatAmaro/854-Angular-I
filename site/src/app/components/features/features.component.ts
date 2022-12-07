import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeaturesSectionData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
 @Input() public featuresData!:FeaturesSectionData;
 @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('features');
  }

}
