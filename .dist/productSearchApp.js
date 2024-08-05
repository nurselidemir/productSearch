  // Product Search 
  
  let product1 = 
  {
      name : "ACER Swift",
      category : "technology" ,
      price : 15.000
  }
  
  let product2 = 
  {
      name : "Macbook Air M1",
      category : "technology" ,
      price : 30000.00
  }
  
  let product3 = 
  {
      name : "Monster Notebook",
      category : "technology" ,
      price : 28000.00
  }
  let product4 = 
  {
      name : "Macbook Air M2",
      category : "technology" ,
      price : 40000.00
  }
  
  let products = [product1, product2, product3, product4];
  let addProductsList = [];
  let enteredProductName = prompt("enter a product name");

  addedProducts(products);
  printProducts(addProductsList);

 function addedProducts(products)
{
      products.forEach(function(product)
    {
       if(product.name.toUpperCase().includes(enteredProductName.toUpperCase()))
      {  
      addProductsList.push(product);
      }
    });
}

  function printProducts(products)
{
    products.forEach(function(product)
    {
        console.log(" | " + product.name + " | " + product.price + " | " + product.category);  
    })
}

