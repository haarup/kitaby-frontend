import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const ProductTable = ({ data }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState({}); 

    const columns = React.useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "اسم المنتج",
      },
      {
        accessorKey: "price",
        header: "السعر",
      },
      {
        accessorKey: "category",
        header: "الفئة",
      },
      {
        accessorKey: "stock",
        header: "المخزون",
      },
      {
        id: "actions",
        header: "الإجراءات",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={() => alert(`تعديل: ${row.original.name}`)}
            >
              تعديل
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => alert(`حذف: ${row.original.name}`)}
            >
              حذف
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  React.useEffect(() => {
    const selected = table.getSelectedRowModel().rows.map((row) => row.original);
    setSelectedRows(selected);
  }, [table.getSelectedRowModel()]);

  return (
    <div className="p-4 bg-gray-100 rounded">
      {/* البحث */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="بحث..."
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
      </div>

      {/* الجدول */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-300 px-4 py-2 text-left">
                  {header.isPlaceholder ? null : (
                    <div
                      {...header.column.getToggleSortingHandler()}
                      className="cursor-pointer"
                    >
                      {header.column.columnDef.header}
                      {header.column.getIsSorted() === "asc" && " 🔼"}
                      {header.column.getIsSorted() === "desc" && " 🔽"}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {cell.renderValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* التحكم في الباجينيشن */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-300"
        >
          السابق
        </button>
        <span>
          الصفحة{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} من {table.getPageCount()}
          </strong>
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-300"
        >
          التالي
        </button>
      </div>

      {/* الأزرار المخصصة */}
      <div className="mt-4">
        <button
          className="bg-green-500 text-white px-3 py-2 rounded"
          onClick={() => alert(`عدد المحدد: ${selectedRows.length}`)}
        >
          عرض التحديد ({selectedRows.length})
        </button>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded ml-2"
          onClick={() => console.log("حذف العناصر المحددة:", selectedRows)}
        >
          حذف المحدد
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
