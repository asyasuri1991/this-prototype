function task1() {
    function createLinkProduct(category) {
        return function (article) {
            return `https://myshop.ru/${category}/${article}`;
        }
    }
    createPCLink = createLinkProduct('pc');
    createMonitorLink = createLinkProduct('monitors');
    createNotebookLink = createLinkProduct('notebooks');
    console.log(createPCLink(100));
}


function task2() {
    let orders = [
        {
            fio: "Ivan",
            tovar: "phone",
            price: 10000,
            quantity: 2
        },
        {
            fio: "Peter",
            tovar: "usb",
            price:2300,
            quantity:5
        },
        {
            fio: "Mary",
            tovar: "connector",
            price:100,
            quantity:100
        },
    ]
    function showOrder(){
        let str = `Заказ покупателя ${this.fio} составил ${this.price*this.quantity}`;
        console.log(str);
    }
    orders.forEach(elem=>showOrder.call(elem));
}


function task3() {
    let orders = [
        {
            fio: "Ivan",
            tovar: "phone",
            price: 10000,
            quantity: 2
        },
        {
            fio: "Peter",
            tovar: "usb",
            price:2300,
            quantity:5
        },
        {
            fio: "Mary",
            tovar: "connector",
            price:100,
            quantity:100
        },
    ]
    function showOrder(action){
        let str = `Заказ покупателя ${this.fio} составил ${this.price*this.quantity*(100-action)/100},скидка составила ${action}%`;
        console.log(str);
    }
    showOrder(10);
    orders.forEach(elem=>showOrder.call(elem,0));
    orders.forEach(elem=>showOrder.call(elem,10));
    showOrder.call(orders[0],10)
}

function task4() {
    function Menu(...navList) {
        this.navList = navList;
        this.wrapperA = function (...anchor) {
            let i=0;
            return this.navList.map(function(elem,i){
                let str=`<a href='${elem}'>${anchor[i]}</a>`;
                return str;
            })
        }
    }   
    let mainMenu=new Menu("home.html","services.html","price.html","about.html");
    for (elem of mainMenu.navList)
        console.log(elem);
        console.log(mainMenu.wrapperA("Домой","Сервисы","Прайс-лист","О нас"));
    let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
    for (elem of footerMenu.navList)
        console.log(elem);
        console.log(footerMenu.wrapperA("Создание страниц","Проверка страниц","Сеонизация страниц"));
}