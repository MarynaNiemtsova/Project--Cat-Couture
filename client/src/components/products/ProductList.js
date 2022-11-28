import Product from "./Product";

const ProductList = ({ products, className }) => {
  return (
    <ul className="{className} product__container">
      {products.map((product) => (
        <Product
          name={product.name}
          description={product.description}
          price={product.price}
          imageName={product.imageName}
          imageDescription={product.imageDescription}
          productDiscount={product.productDiscount}
          discountType={product.discountType}
          key={product.id}
        />
      ))}
    </ul>
  );
};

export default ProductList;
