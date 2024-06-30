var fire = [];
var cart = [];

class Show_Home {
    async showallsp() {
        let sanpham = await document.querySelector(".allsp");
        let view_products = fire.products;
        view_products.forEach(sp => {
                sanpham.innerHTML += `
                    <div class="col-4">
                        <a href="products_detail.html"><img src="${sp.image}"></a>
                        <a href="products_detail.html"><h4>${sp.name}</h4></a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>${sp.price}</p>
                        <button><a data-id="${sp.id}" class="btn-click" href="#">Thêm vào giỏ hàng</a></button>
                    </div>
                `;
        });
        this.setID();
    }

    async showsp() {
        let sanpham = await document.querySelector(".sp4");
        let view_products = fire.products;
        let i = 0;

        view_products.forEach(sp => {
            if (i < 4) {
                sanpham.innerHTML += `
                    <div class="col-4">
                        <a href="products_detail.html"><img src="${sp.image}"></a>
                        <a href="products_detail.html"><h4>${sp.name}</h4></a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>${sp.price}</p>
                        <button><a data-id="${sp.id}" class="btn-click" href="#">Thêm vào giỏ hàng</a></button>
                    </div>
                `;
                i++;
            }
        });
        this.setID();
    }

    

    addcarrt(e) {
        let click_id = e.target.dataset.id;
        click_id = Number(click_id, 10);

        if (cart.length <= 0) {
            cart = [{
                product_id: click_id,
                quantity: 1
            }];
        } else {
            cart.push({
                product_id: click_id,
                quantity: 1
            });
        }

        localStorage.setItem('Cart_local', JSON.stringify(cart));
        this.show_cart();
    }

    delete_item() {
        let delete_sp = document.querySelectorAll('.delete_sp');
        delete_sp.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                let id_delete = parseInt(e.target.dataset.id);
                let index = cart.findIndex(item => item.product_id === id_delete);
                if (index !== -1) {
                    cart.splice(index, 1);
                    localStorage.setItem('Cart_local', JSON.stringify(cart));
                    location.reload(); 
                }
            });
        });
    }
    
    show_cart(){
        // console.log(cart);
        let productss = fire.products;
        let cartContainer = document.querySelector('.cart_page');
        let tong = 0;
        cart.forEach(itc => {
            let position_Show = productss.findIndex(product_position => product_position.id === itc.product_id);
            let tt = productss[position_Show];

            tong += tt.price;

            cartContainer.innerHTML += `
            <tr>
                        <td><img src="${tt.image}" ></td>
                        <td>  ${tt.name} </td>
                          <td>    ${tt.price} </td>
                        <td><a href="" class="delete_sp" data-id = "${itc.product_id}" > Remove </a> </td>
                        </tr>
                    `;
        });
        cartContainer.innerHTML +=`
        </table>

        <div class="total-price">
            <table>
                <tr>
                    <td>Total</td>
                    <td>${tong}</td>
                </tr>
            </table>
        </div>`;
        this.delete_item();
        

    }
   
    loadCart() {
        const cartData = localStorage.getItem('Cart_local');
        if (cartData) {
            cart = JSON.parse(cartData);
            this.show_cart();
        }
    }

    async all() {
        await fetch('https://assigmnet-d09c7-default-rtdb.firebaseio.com/.json')
            .then(res => res.json())
            .then(data => {
                fire = data;
                this.showsp();
                this.showallsp();
                this.loadCart();
                
            });
    }
}

var Home = new Show_Home();
export default Home;
