function task1() {
    function createLinkProduct(category) {
return function (article) {
    return `https://myshop.ru/${category}/${article}`;
}
    }
    createPCLink = createLinkProduct ('pc');
    createMonitorLink = createLinkProduct ('monitors');
    createNotebookLink = createLinkProduct ('notebooks');
    console.log(createPCLink(100));
}