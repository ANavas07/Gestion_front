import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/interfaces/products.interfaces';
import { RegistrationProducts } from 'src/app/interfaces/registration.interface';
import { ErrorService } from 'src/app/services/error.service';
import { ProductsService } from 'src/app/services/products.service';
import { RegistrationProductService } from 'src/app/services/registration-product.service';

@Component({
  selector: 'app-modal-registration-employee',
  templateUrl: './modal-registration-employee.component.html',
  styleUrls: ['./modal-registration-employee.component.css']
})
export class ModalRegistrationEmployeeComponent implements OnInit {

  listProducts: Products[] = [];

  controlListRegistration: RegistrationProducts[] = [];

  constructor(private toastr: ToastrService, private _registrationService: RegistrationProductService,
    private router: Router, private _errorService: ErrorService,
    private _productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductsToFillDataList();

    this._productService.dataModifiedTable.subscribe(() => {
      this.getProductsToFillDataList();
    });

    this._registrationService.getProductRegistrationList().subscribe(productRegistrationList => {
      this.controlListRegistration = productRegistrationList;
      console.log(this.controlListRegistration);
    });
  }

  getProductsToFillDataList() {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = (data as any).productsList;
    });
  }

  formAddProductRegistration = new FormGroup({
    "idProduct": new FormControl('', Validators.required),
    "quantity": new FormControl('', [Validators.required, Validators.min(1), Validators.max(5000), Validators.pattern(/^\d+$/)]),
  });

  addRegistrationProduct() {
    const product: any = {
      idProductBelong: this.formAddProductRegistration.get('idProduct')?.value || '',
      productQty: (this.formAddProductRegistration.get('quantity')?.value || 0) as number
    };

    const idProductList = this.controlListRegistration.map(product => product.idProductBelong);

    if (idProductList.includes(product.idProductBelong)) {
      this.toastr.error(`${product.idProductBelong} Esta repetido`, "Error!");
    } else {
      this.toastr.success(`${product.idProductBelong} agregado`, "Exito!");
      this._registrationService.addProductRegistration(product);
      this.closeModal('ProductRegistrationModal');
    }
  }

  closeModal(name: string) {
    const modalDiv = document.getElementById(name);
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
      this.formAddProductRegistration.reset();
    }
  }
}
