
const naviBar = document.getElementById('naviBar')
const naviBar2 = document.getElementById('naviBar2')
const foodList = document.getElementById('foodList')
const Cart = document.getElementById('cart')
const Payment = document.getElementById('payment')

renderNaviBar();
renderFoodList();

function renderNaviBar()
{ 
    const tmp = 
        React.createElement('div', {className: 'w3-bar w3-border w3-cyan w3-top'}, 
            React.createElement('button', {className: 'w3-bar-item w3-button', 
                onClick: function() {filter('')}, style: {fontWeight: 'bold'}}, 'BKU FOOD'),
            React.createElement('a', {className: 'w3-bar-item w3-button w3-right', href: '../index.html', 
                style: {fontWeight: 'bold', display: (!isUser)?'block':'none'}}, 'Login'),
            React.createElement('a', {className: 'w3-bar-item w3-button w3-right', href: '../index.html', 
                style: {fontWeight: 'bold', display: (isUser)?'block':'none'}}, 'Logout'),
            
            React.createElement('a', {className: 'w3-bar-item w3-button w3-right', style: {fontWeight: 'bold'},
                onClick: function(){renderCart()}}, 'Cart', 
                React.createElement('i', {className: 'fa fa-shopping-cart'})
            ),
            React.createElement('a', {className: 'w3-bar-item w3-right', 
                style: {fontWeight: 'bold', display: (isUser)?'block':'none'}}, 'Level ' + user['Rank']),
            React.createElement('a', {className: 'w3-bar-item w3-right', 
                style: {fontWeight: 'bold', display: (isUser)?'block':'none'}}, user['Name']),
            React.createElement('input', {className: 'w3-left hw-input', id: 'naviBar_search', placeholder: "Enter Food ID or Food Name"}),
            React.createElement('button', {className: 'w3-left w3-button', style: {fontWeight: 'bold'}, 
                onClick: function() {search(String(document.getElementById('naviBar_search').value), 'food_')},
                }, 
                React.createElement('i', {className: 'fa fa-search'})),
        )
    
    ReactDOM.render(tmp, naviBar)

}

//Food List
function renderFoodList() {
    var foodItemArr = []

    for(let i = 0; i < size; i++) {

        const tmp = React.createElement(
            'div',
            {
                className: 'w3-card w3-center hw-food-item',
                id: 'food_' + i.toString(),
            },
            React.createElement(
                'img',
                {
                    src: '../images/' + food[i]['picture'],
                    style: {width:'100%', height:'180px'},
                    alt: food[i]['name'],
                }
            ),
            React.createElement(
                'div',
                {
                    className: 'w3-container'
                },
                React.createElement('h4', null, React.createElement('b', null, food[i]['name'])),
                React.createElement('h4', null, toMoney(food[i]['price'])),
                React.createElement('button', {
                    className: 'w3-button w3-blue w3-margin', 
                    type: 'button',
                    onClick: function() {addToCart(i)}
                }, 'Add to cart'),
            )
        )
        foodItemArr.push(tmp)
        
    }

    const foodItem = React.createElement('div', {className: 'w3-center'}, 
        React.createElement('div', {className: 'w3-container w3-center'}, 
            React.createElement('h1', {style: {fontWeight: 'bold'}}, 'FOOD LIST')
            ), foodItemArr)



    ReactDOM.render(foodItem, foodList)
    ReactDOM.render(null, Cart)
    ReactDOM.render(null, Payment)
}
//Cart
function renderCart() {
    var foodItemArrCart = []

    for(let i = 0; i < size; i++) {

        const tmp = React.createElement(
            'div',
            {
                className: 'w3-card w3-center hw-food-item',
                style: {display: (cart[i] > 0)? 'inline-block':'none'}
            },
            React.createElement(
                'img',
                {
                    src: '../images/' + food[i]['picture'],
                    style: {width:'100%', height:'180px'},
                    alt: food[i]['name'],
                }
            ),
            React.createElement(
                'div',
                {
                    className: 'w3-container'
                },
                React.createElement('h4', null, React.createElement('b', null, food[i]['name'])),
                React.createElement('h4', null, toMoney(food[i]['price'])),
                React.createElement('button', {
                    className: 'w3-button w3-blue w3-margin', 
                    type: 'button',
                    id: 'minus_' + i.toString(),
                    onClick: function() {minusFood(i)}
                }, '-'),
                React.createElement('span', {
                    className: 'w3-margin', 
                    id: 'value_' + i.toString(),
                }, cart[i]),
                React.createElement('button', {
                    className: 'w3-button w3-blue w3-margin', 
                    type: 'button',
                    id: 'plus_' + i.toString(),
                    onClick: function() {plusFood(i)}
                }, '+'),
                
            )
        )
        foodItemArrCart.push(tmp)
        
    }

    const foodItemCart = React.createElement('div', null, 
        React.createElement('div', {className: 'w3-container w3-center'}, 
            React.createElement('h1', {style: {fontWeight: 'bold'}}, 'CART')
            ), foodItemArrCart)

    ReactDOM.render(null, foodList)
    ReactDOM.render(foodItemCart, Cart)
    renderPayment()
}
//Payment
function renderPayment()
{
    const OrderElement = React.createElement('div', {}, 
        React.createElement('div', {className: 'w3-container w3-center'},
            React.createElement('button', {className: 'w3-button w3-black w3-margin', 
                onClick: function() {document.getElementById('payment_modal').style.display='inline-block'}}, 'Payment')),
        React.createElement('div', {id: 'payment_modal', className: 'w3-modal'},
            React.createElement('div', {className: 'w3-modal-content w3-card-4'}, 
                React.createElement('header', {className: 'w3-container w3-cyan'}, 
                    React.createElement('span', {className: 'w3-button w3-display-topright', 
                        onClick: function() {document.getElementById('payment_modal').style.display='none'}}, 'X'),
                    React.createElement('h2', {}, 'Payment'),
                    ),
                React.createElement('p', {className: 'w3-margin'}, 'Order ID: ' + genarateRandomID()),
                React.createElement('p', {className: 'w3-margin'}, 'Order Time: ' + getOrderTime()),
                React.createElement('p', {className: 'w3-margin'}, 'Shipper Phone: 0123456789'),
                React.createElement('p', {className: 'w3-margin'}, 'Address: Trường Đại Học Bách Khoa TPHCM cơ sở 2'),
                React.createElement('p', {className: 'w3-margin'}, 'Status: Đang chờ'),
                React.createElement('p', {className: 'w3-margin'}, 'Tổng tiền đơn hàng: ' + toMoney(caculOrder())),
                React.createElement('p', {className: 'w3-margin'}, 'User Promotion: ' + parseInt(userPromotion*100).toString() + '%'),
                React.createElement('p', {className: 'w3-margin'}, 'Promotion: '),
                React.createElement('input', {className: 'w3-margin w3-input', id: 'promotion_input', style : {width: '40%'}}),
                React.createElement('button', {className: 'w3-margin w3-button w3-cyan', 
                    onClick: function() {getPromotion(document.getElementById('promotion_input').value)}}, 'Apply'),
                React.createElement('p', {className: 'w3-margin'}, 'Total Discount: ' + parseInt(total_percent_discount*100).toString() + '%'),
                React.createElement('p', {className: 'w3-margin'}, 'Total Voucher: ' + (total_voucher_value).toString() + '.000đ'),
                React.createElement('p', {className: 'w3-margin'}, 'Tổng tiền sau khi áp dụng Voucher: ' + toMoney(caculOrderAfterPromotion())),
                React.createElement('p', {className: 'w3-margin'}, 'Delivery Cost: 20.000đ'),
                React.createElement('p', {className: 'w3-margin'}, 'Tổng tiền phải trả: ' + toMoney(caculOrderAfterPromotion() + 20)),
                React.createElement('div', {className: 'w3-center'}, 
                    React.createElement('button', {className: 'w3-button w3-cyan w3-margin', type: 'button', 
                        onClick: function() {payment(); document.getElementById('payment_modal').style.display='none';renderPayment()}}, 'Thanh toán'))
                ),
            )
    )
        
    

    ReactDOM.render(OrderElement, Payment)
}
//Edit page
function renderEditPage()
{
    const editPage = document.getElementById('editPage');
    if (editPage == null) return;
    const eP = React.createElement('div', {className: 'w3-center'}, 
        React.createElement('div', {className: 'w3-container w3-center'}, 
            React.createElement('h1', {style: {fontWeight: 'bold'}}, 'EDIT PAGE')),
        
        React.createElement('input', {name: 'filename', className: 'hw-input', type: 'file', required: 'required', placeholder: "Enter Food Picture"},),
        React.createElement('br'),
        React.createElement('input', {name: 'foodName', className: 'hw-input', required: 'required', placeholder: "Enter Food Name"},),
        React.createElement('br'),
        React.createElement('input', {name: 'price', className: 'hw-input', required: 'required', placeholder: "Enter Price (unit: nghìn đồng)"},),
        React.createElement('br'),
        React.createElement('br'),
        React.createElement('button', {className: 'w3-button w3-blue', type: 'submit'}, 'Add food'),
        )
    ReactDOM.render(eP, editPage);
}
renderEditPage()
renderRemovePage()
//Remove Page
function renderRemovePage()
{
    const removePage = document.getElementById('removePage');
    if (removePage == null) return;
    var foodItemArr = []

    for(let i = 0; i < size; i++) {

        const tmp = React.createElement(
            'div',
            {
                id: 'remove_food_' + i.toString(),
                className: 'w3-card w3-center hw-food-item',
                style: {display: 'none'}
            },
            React.createElement(
                'img',
                {
                    src: '../images/' + food[i]['picture'],
                    style: {width:'100%', height:'180px'},
                    alt: food[i]['name'],
                }
            ),
            React.createElement(
                'div',
                {
                    className: 'w3-container'
                },
                React.createElement('h4', null, React.createElement('b', null, 'ID: ' + food[i]['id'])),
                React.createElement('h4', null, React.createElement('b', null, food[i]['name'])),
                React.createElement('h4', null, toMoney(food[i]['price'])),
                React.createElement('button', {
                    className: 'w3-button w3-blue w3-margin', 
                    onClick: function()
                    { 
                        document.getElementById('remove_input').value = i;
                    }, 
                    type: 'submit'
                }, 'Remove'),
            )
        )
        foodItemArr.push(tmp)
    }

    const rP = React.createElement('form', {className: 'w3-center', type: 'post'}, 
        React.createElement('div', {className: 'w3-container w3-center'}, 
            React.createElement('h1', {style: {fontWeight: 'bold'}}, 'REMOVE ITEM')),
        React.createElement('input', {id: 'remove_input', name: 'remove_id', className: 'hw-input', 
            required: 'required', placeholder: "Enter Food ID or Food Name"},),
        React.createElement('br'),
        foodItemArr,
        React.createElement('br'),
        React.createElement('button', {className: 'w3-button w3-blue w3-margin', type: 'button', 
            onClick: function() {     
                search(document.getElementById('remove_input').value, 'remove_food_')
            }
            }, 'Search')
        )

    
    ReactDOM.render(rP, removePage);

}

//Add Promotion
renderAddPromotion()

function renderAddPromotion()
{
    const editPage = document.getElementById('addPromotion');
    if (editPage == null) return;
    const eP = React.createElement('div', {className: 'w3-center'}, 
        React.createElement('div', {className: 'w3-container w3-center'}, 
            React.createElement('h1', {style: {fontWeight: 'bold'}}, 'ADD PROMOTION')),
        React.createElement('br'),
        React.createElement('input', {name: 'promotion_code', className: 'hw-input', required: 'required', 
            placeholder: "Enter Promotion Code", pattern: '.{8,}', title: "Eight or more characters"},),
        React.createElement('br'),
        React.createElement('button', {className: 'w3-button w3-blue', type: 'submit'}, 'Add'),
        )
    ReactDOM.render(eP, editPage);
}

function f(money)
{
    //1 -> '001'
    //12 -> '123'
    //123 -> '123'
    if(money >= 1000) return 'Error in line 195 main.js';
    if(money >= 100) return money.toString();
    if(money >= 10) return '0' + money.toString();
    return '00' + money.toString();
}

function toMoney(money)
{
    money = parseInt(money*1000)
    //1000 -> 1.000đ
    //1234567 -> 1.234.567đ
    var result = ''
    var arr = []
    
    while(money >= 1000)
    {
        arr.push(money % 1000);
        money = parseInt(money / 1000);
    }


    result = arr.map(f).reduce((cb, ele)=>'.' + ele + cb, '');

    result = money.toString() + '.' + result + 'đ';
    result = result.replace('.', '');
    return result;
}

function caculOrder()
{
    var total = 0;
    for(let i = 0; i < size; i++)
    {
        total += cart[i] * food[i]['price'];
    }
    return total;
}

function caculOrderAfterPromotion()
{
    let total = caculOrder() * (1 - total_percent_discount) - total_voucher_value;
    return total;
}

function payment()
{
    if (caculOrderAfterPromotion() == 0)
    {
        alert('Bạn chưa mua hàng!')
        return;
    }
    var output = toMoney(caculOrderAfterPromotion() + 20) + '\nThanks for purchase!'
    for(let i = 0; i < size; i++)
    {
        cart[i] = 0;
    }
    for(let i = 0; i < size; i++) 
        document.getElementById('value_' + i.toString()).innerHTML = cart[i].toString();
    alert(output)
    renderCart()
}

function addToCart(foodID)
{
    cart[foodID]++;
}

function plusFood(foodID)
{
    cart[foodID]++;
    document.getElementById('value_' + foodID.toString()).innerHTML = cart[foodID].toString();
    //renderPayment();
    renderCart();
}
function minusFood(foodID)
{
    if (cart[foodID] > 0)
        cart[foodID]--;
    document.getElementById('value_' + foodID.toString()).innerHTML = cart[foodID].toString();
    //renderPayment();
    renderCart();
}

function filter(keyword)
{
    renderFoodList()
    for(let i = 0; i < size; i++)
    {
        const tmp = document.getElementById('food_' + i.toString())
        if(!tmp) {continue};
        if (food[i]['type'].search(keyword) != -1)
            tmp.style.display = 'inline-block';
        else
            tmp.style.display = 'none';
    }
}

function search(input, formula_id)
{
    renderFoodList()

    var showList = []

    for (let i = 0; i < size; i++)
    {
        let tmp = (food[i]['name'].toLowerCase()).search((input.toLowerCase()));
        if (input == food[i]['id'].toString() 
        || tmp != -1)
            showList.push(i);
    }
    let tmp;
    for (let i = 0; i < size; i++)
    {
        tmp = document.getElementById(formula_id + i.toString());
        if(!tmp) {continue};
        tmp.style.display = 'none';
    }
    for (let i = 0; i < showList.length; i++)
    {
        tmp = document.getElementById(formula_id + showList[i].toString());
        if(!tmp) {continue};
        tmp.style.display = 'inline-block';
    }
}

function genarateRandomID()
{
    var result = '';
    let tmp = 0, tmp2 = 0;
    for(let i = 0; i < 10; i++)
    {
        tmp = parseInt(Math.random() * 10000) % 3;
        switch(tmp)
        {
            case 0:
                //A - Z
                tmp2 = parseInt(Math.random() * 10000) % 26;
                result += String.fromCharCode(65 + tmp2);
                break;
            case 1:
                //a - z
                tmp2 = parseInt(Math.random() * 10000) % 26;
                result += String.fromCharCode(97 + tmp2);
                break;
            case 2:
                result += (parseInt(Math.random() * 10000) % 10).toString();
                break;
        }
    }
    return result;
}

function getOrderTime()
{
    // Calculate milliseconds in a year
    const d = new Date()
    var result = d.toString().replace('GMT+0700 (Indochina Time)','');
    return result;
}

function getPromotion(code)
{
    for(let i = 0; i < promotion.length; i++)
    {
        if (code == promotion[i]['Code'])
        {
            //Apply
            if(promotion[i]['NumberOf'] == 0) return;
            increase_percent_discount(promotion[i].Percent_discount)
            increase_voucher_value(promotion[i].Voucher_value)
            renderPayment()
            promotion[i]['NumberOf']--;
            break;
        }
    }
}