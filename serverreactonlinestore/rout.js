module.exports = (app) =>{
    const dbreqest = require('./dbreqest.js');
    app.route('/showcategory').get(dbreqest.showCategory);
    app.route('/showcategoryproducts').get(dbreqest.showProducts);
}