import { useState } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
// import { useNavigate } from "react-router-dom";
import ActionButton from "../button/actionButton";
import "./index.css";

const CustomTable = ({
  columns,
  data,
  loading,
  Notfound,
  element,
  control = true,
  // extraButtonUrl,
  actions = [],
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  // const navigate = useNavigate();

  const handleRowSelect = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const isRowSelected = (rowId) => {
    return selectedRows.includes(rowId);
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="min-w-full border">
        <thead className="border bg-[#f9f9f9]">
          <tr>
            <th>#</th>
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.label}
              </th>
            ))}
            {control && <th style={{ maxWidth: "200px" }}>التحكم</th>}
            <th style={{ maxWidth: "70px" }}>
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={(e) =>
                  setSelectedRows(
                    e.target.checked ? data.map((row) => row.id) : []
                  )
                }
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length < 1 && !loading ? (
            <tr>
              <td colSpan={columns.length + 3}>
                <div className="flex items-center justify-center">
                  {Notfound && Notfound}
                </div>
              </td>
            </tr>
          ) : null}
          {loading ? (
            <tr>
              <td colSpan={columns.length + 3}>
                <div className="flex items-center justify-center">
                  <Spinner />
                </div>
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={column.className}>
                    {column.render ? column.render(row[column.key]) : row[column.key] || "-"}
                  </td>
                ))}
                {element && (
                  <td style={{ minWidth: "150px", maxWidth: "200px" }}>
                    {element}
                  </td>
                )}
                {control && (
                  <td style={{ minWidth: "150px", maxWidth: "200px" }}>
                    {actions.length > 0 && (
                      <td className="py-2 px-4 border-gray-200 text-center flex gap-1.5 justify-center">
                        {actions.map((action, actionIndex) => (
                          <ActionButton
                            key={actionIndex}
                            text={action.label}
                            className={action.className}
                            onClick={() => {
                              console.log("Row Data:", row);
                              action.onClick(row);
                            }}
                          />
                        ))}
                      </td>
                    )}
                  </td>
                )}
                <td style={{ minWidth: "60px" }}>
                  <input
                    type="checkbox"
                    checked={isRowSelected(row.id)}
                    onChange={() => handleRowSelect(row.id)}
                    className="rounded border-gray-300 text-indigo-600"
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  Notfound: PropTypes.string,
  showDeleteButton: PropTypes.bool,
  showEditButton: PropTypes.bool,
  showExtraButton: PropTypes.bool,
  control: PropTypes.bool,
  controlElement: PropTypes.element,
  extraButtonUrl: PropTypes.string,
  classExtraButton: PropTypes.string,
  element: PropTypes.element,
};

CustomTable.defaultProps = {
  onEdit: undefined,
  Notfound: "لا توجد بيانات",
};

export default CustomTable;
