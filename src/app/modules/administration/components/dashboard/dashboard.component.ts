import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardCardsService, ICardsMenu } from '../../../../core/services/dashboard-cards.service';
import { Products } from 'src/app/interfaces/products.interfaces';
import { ProductsService } from 'src/app/services/products.service';
import { ModalProductsComponent } from 'src/app/shared/modal-products/modal-products.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //to have access to the modalComponent
  @ViewChild(ModalProductsComponent) modalComponent!: ModalProductsComponent;

  listCards: ICardsMenu[];
  listProducts: Products[] = [];

  constructor(private _dashboardService: DashboardCardsService,
              private _productService: ProductsService,
              private router: Router) {
    this.listCards = _dashboardService.getDashboardCards();
  }

  ngOnInit(): void {
    this.getProducts();
    this._productService.dataModifiedTable.subscribe(() => {
      this.getProducts();
    });
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = (data as any).productsList;
    });
  }

  selectModalCard(card: ICardsMenu) {
    this.openModal(card.modal);
  }

  openModal(nameModal: string) {
    const modalDiv = document.getElementById(nameModal);
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  onKeyDown(event: KeyboardEvent, item?: any, action?: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (action === 'edit' && item) {
        this.editProduct('ProductEditModal', item);
      } else if (action === 'delete' && item) {
        this.deleteProduct(item.idProduct);
      } else {
        this.selectModalCard(item);
      }
    }
  }

  editProduct(nameModal: string, item: Products) {
    this.modalComponent.formEditProduct.patchValue({
      idProduct: item.idProduct,
      idCatBelong: item.idCatBelong,
      productName: item.productName,
      productPrice: item.productPrice.toString(),
      stock: item.stock.toString(),
      available: item.available.toString()
    });
    this.openModal(nameModal);
  }

  deleteProduct(idProduct: string) {
    this._productService.deleteProductById(idProduct).subscribe(data => {
      console.log(data);
      //to refresh the table
      this.getProducts();
    });
  }
}
