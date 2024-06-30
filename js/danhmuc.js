var fire = [];

class CL_DanhMuc {
    async showdanhmuc() {
        let sanpham = await document.querySelector(".danh_muc");
        let view_products = fire.categories;

        view_products.forEach(sp => {
                sanpham.innerHTML += `<tr>
                    <td scope="row" style="text-align: center;">${sp.id}</th>
                    <td style="text-align: center;">${sp.name}</td>
                    
                </tr>`;
        });
    }

    async all() {
        await fetch('https://assigmnet-d09c7-default-rtdb.firebaseio.com/.json')
            .then(res => res.json())
            .then(data => {
                fire = data;
                this.showdanhmuc();
            });
    }
}

var DanhMuc = new CL_DanhMuc();
export default DanhMuc;
