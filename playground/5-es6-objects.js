//Object property shorthand

const name = 'Shane'
const userAge = 28

const user = {
    name,
    userAge,
    location: 'Portland'
}

console.log(user)

// Object destructure

const product = {
    label: 'red notebook',
    price: 3, 
    stock: 201, 
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating=5} = product

// console.log(productLabel, stock, rating)

// const transaction = (type, myProduct) =>{
//     // destructure the object passed in 
//     const {label} = myProduct
// }
// or destructure in the function argument

const transaction = (type, {label, stock}) =>{
    // destructure the object passed in 
    console.log(stock, label)

}

transaction('order', product)
