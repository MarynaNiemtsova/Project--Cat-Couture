const Table = ({ children, className }) => {
  return (
    <div className={`${className || ""} container`}>
      <table className="table">{children}</table>
    </div>
  );
};

export default Table;
