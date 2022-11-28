const DiscountBadge = ({ discountType, productDiscount, className }) => {
  return (
    <div className={`${className || ""} discountBadge`} data-testid="badge">
      {discountType === "percentage off" && <>{productDiscount} % off</>}
      {discountType === "fixed amount off" && <>$ {productDiscount} off</>}
    </div>
  );
};

export default DiscountBadge;
