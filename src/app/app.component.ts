import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inventor } from './entities/Inventor';
import { IProduct } from './entities/Iproduct';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FPT POLYTECHNIC';
  student = {
    hoten: 'Long Phú Quốc',
    gioitinh: 'Thứ ba',
    ngaysinh: '19/02/2004',
    anh: 'image.png',
    diemTB: 8.9,
  };
  inventors: Inventor[] = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  ];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
    },
  ];
  show(innerHTML: string) {
    document.querySelector('#inventor').innerHTML = innerHTML;
  }
  showProduct(innerHTML: string) {
    document.querySelector('#products').innerHTML = innerHTML;
  }
  render(callback: (arg0: string) => void) {
    let innerHTML = this.inventors
      .map((inventor) => {
        return `<tr>
<th>${inventor.id}</th>
<th>${inventor.first}</th>
<th>${inventor.last}</th>
<th>${inventor.year}</th>
<th>${inventor.passed}</th>
</tr>`;
      }, '')
      .join('');
    callback(innerHTML);
  }

  renderProduct(callback: (arg0: string) => void) {
    let innerHTML = this.products
      .map((product) => {
        return `<tr>
<th>${product.productId}</th>
<th>${product.productName}</th>
<th>${product.productCode}</th>
<th>${product.price}</th>
<th><img src="${product.imageUrl}"></th>
</tr>`;
      }, '')
      .join('');
    callback(innerHTML);
  }
}
// const app = new AppComponent();
// app.show();
