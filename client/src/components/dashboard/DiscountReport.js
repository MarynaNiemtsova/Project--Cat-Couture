import Table from "./Table";
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";

const DiscountsReport = ({ reportData, className }) => {
  return (
    <div className={className}>
      <h3>Discounts Report</h3>
      <Table>
        <thead>
          <tr className="left-align">
            <TableHeaderCell>Discount Type</TableHeaderCell>
            <TableHeaderCell>Total Products</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {reportData.map((discount, index) => (
            <tr key={index}>
              <TableCell className="left-align">
                {discount.discountType || "No discount"}
              </TableCell>
              <TableCell className="right-align">
                {discount.totalProducts}
              </TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DiscountsReport;
