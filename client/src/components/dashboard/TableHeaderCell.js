const TableHeaderCell = ({ children, className }) => {
  return <th className={`tableHeaderCell ${className || ""}`}>{children}</th>;
};

export default TableHeaderCell;
