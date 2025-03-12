document.querySelector('#input-button-order').addEventListener('click', async function () {
    const product_name = document.querySelector('#product_name').value;
    const price = document.querySelector('#price').value;

    if (price.length == 0) {
        Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "상품가격을 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    } else if (!Number.isNaN(price)) {
        Swal.fire({
            icon: "error",
            title: "입력실패",
            text: "가격은 숫자로 입력하셔야 합니다.",
            // footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    const res = await supabase
        .from('orders')
        .insert([
            { product_name, price }
        ]).select();

})

const $ordersDiv = document.querySelector('#orders-div');
async function ordersSelect() {
    const res = await supabase.from('orders').select().order('created_at', { ascending: false });
    let rows = '';
    for (let i = 0; i < res.data.length; i++) {
        rows = rows + `
            <tr onclick='orderRowClick(this);' style='cursor:pointer;'>
                <td>${res.data[i].id}</td>
                <td>${res.data[i].user_id}</td>
                <td>${res.data[i].product_name}</td>
                <td>${res.data[i].price}</td>
                <td>${res.data[i].created_at}</td>
                <td><button onclick='orderDeleteClick(event, "${res.data[i].id}")'>삭제</button</td>
            </tr>`;
    }

    let orders = `
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>userid</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>주문날짜</th>
                    <th></th>
                </tr>
                ${rows}
            </table>
        </div>`;
    $ordersDiv.innerHTML = orders;
    $ordersDiv.classList.add('show');
}

function orderRowClick(trTag) {
    const $updateOrderId = document.querySelector('#update-order-id');
    const $updateUserId = document.querySelector('#update-order-user-id');
    const $updateProName = document.querySelector('#update-product-name');
    const $updatePrice = document.querySelector('#update-price');

    const orderId = trTag.children[0].innerText;
    const userId = trTag.children[1].innerText;
    const productName = trTag.children[2].innerText;
    const orderprice = trTag.children[3].innerText;

    $updateOrderId.innerHTML = orderId;
    $updateUserId.innerHTML = userId;
    $updateProName.value = productName;
    $updatePrice.value = orderprice;

    const $orderModal = document.querySelector('#order-modal');
    $orderModal.classList.remove('hidden');
}

document.querySelector('#update-button-order').addEventListener('click', async function () {
    const $updateOrderId = document.querySelector('#update-order-id');
    const $updateProName = document.querySelector('#update-product-name');
    const $updatePrice = document.querySelector('#update-price');

    const res = await supabase
        .from('orders')
        .update({
            product_name: $updateProName.value,
            price: $updatePrice.value
        })
        .eq('id', $updateOrderId.innerHTML)
        .select();
    if (res.status == 200) {
        const $orderModal = document.querySelector('#order-modal');
        $orderModal.classList.add('hidden');
        Swal.fire({
            title: "수정성공",
            icon: "success",
            draggable: true
        });
        ordersSelect();
    }
})

function orderDeleteClick(ev, id) {
    ev.stopPropagation();
    
    Swal.fire({
        title: "삭제하시겠습니까?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "확인",
        cancelButtonText: "취소"
    }).then((result) => {
        if (result.isConfirmed) {
            supabase.from('orders').delete().eq('id',id)
            .then(()=>{
                console.log('삭제되었습니다.')
            })
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Cancel!",
                text: "취소되었습니다.",
                icon: "success"
            });
        }
    });
}