let fire = [];
class admin {
    async danhsachsanpham (){
        let sanpham_danhsach = await fire.products;
        console.log(sanpham_danhsach);
        let showsp = document.querySelector('.dssp');
        console.log(showsp);
        sanpham_danhsach.forEach(dssp => {
            showsp.innerHTML += `
            <tr>
            <td scope="row" style="text-align: center;">${dssp.id}</th>
        <td style="text-align: center;">${dssp.name}</td>
        <td style="text-align: center;"><img src="${dssp.image}" alt="" srcset=""></td>
        <td style="text-align: center;">${dssp.price}</td>
        <td style="text-align: center;"><button style="width: 60px;"><a href="" style="text-decoration: none;">Xoá</a></button> <button style="width: 60px;"><a href="">Sửa</a></button></td>
        </tr>`
        });
    }
    async getAPI_admin() {
        await fetch('https://assigmnet-d09c7-default-rtdb.firebaseio.com/.json')
        .then(res => res.json())
        .then(data => {
            fire = data
            this.danhsachsanpham();
          })
      }
    }
    var chucnangadmin = new admin()
    export default chucnangadmin