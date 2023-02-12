// Task 8 desktop_computer
// Используя коллекцию Map создайте список ингредиентов к салату, с количеством необходимым для добавления в салат. 
// Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110 
// Выведите все продукты, количество которых больше 100 гр.

type TypeProduct = {
    productName: string,
    value: number,
}

const ingredients: TypeProduct[] = [
    { productName: 'Огурцы', value: 300 },
    { productName: 'Помидоры', value: 200 },
    { productName: 'Соль', value: 10 },
    { productName: 'Сметана', value: 110 },
];

const getIngredients = (array: TypeProduct[]): TypeProduct[] => array.filter(item => item.value > 100);

console.log(getIngredients(ingredients));

