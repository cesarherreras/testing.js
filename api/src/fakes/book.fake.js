const { faker } = require('@faker-js/faker');

const generateOneBook = () => {
    return {
        _id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price()
    }
};

const generateManyBooks = (size) => {
    const limit = size ?? 10;
    const fakeBooks = [];
    for (let index = 0; index < limit; index ++) {
        fakeBooks.push(generateOneBook());
    }
    return [...fakeBooks];
};

console.log(generateManyBooks(4));


module.exports = { generateOneBook, generateManyBooks }