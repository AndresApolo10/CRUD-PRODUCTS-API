const uuid = require('uuid')
const Products = require('../models/products.models')

const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}

// getAllProducts()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    return newProduct
}

// createProduct({
//     name: 'televisor',
//     category: 'equipos',
//     price: 2550,
//     isAvailable: true
// })
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
        }
    });
    return data
}

// getProductById('d7453639-7090-4e11-9f39-f5f0ec3f6e25')
//      .then((response) => console.log(response))
//      .catch((err) => console.log(err))

const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where: {
            id
        }
    })
    return response
}

// editProduct('f677482d-de4b-431a-af18-3b27c281fb87', {
//     name: 'horno'
// })
// .then((response) => {
//     console.log(response);
// })
// .catch((err) => {
//     console.log(err);
// })

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct 
}