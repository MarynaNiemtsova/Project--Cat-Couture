const TableCell = ({ children, className }) => {
  return <td className={`${className || ""} tableCell}`}>{children}</td>;
};

export default TableCell;
