import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { products } from '../products';
import { DatabasesService } from '../databases/databases.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  cnn;
  cnn2;

  constructor(
    private route: ActivatedRoute,
    private databasesService: DatabasesService,
  ) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    //this.cnn=JSON.stringify(this.databasesService.db.enableNetwork());
    this.cnn2=JSON.stringify( this.databasesService.db.collection('Prueba').get());
    this.product = this.databasesService.db.collection('Prueba').get()[+params.get('productId')];
  });
}

}