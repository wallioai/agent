import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { Fragment } from "react";

type Column<T> = {
  header: string;
  accessor?: keyof T | string; // Allow custom accessors like "actions"
  render?: (value: any, row: T) => React.ReactNode;
  headerClass?: string;
  dataClass?: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  hideHeader?: boolean;
  errorText?: string;
};

const Table = <T,>({
  columns,
  data,
  hideHeader = false,
  errorText = "No data found",
}: TableProps<T>) => {
  return (
    <table className="w-full table-auto">
      <thead
        className={clsx("border-b px-4", {
          hidden: hideHeader,
        })}
      >
        <tr className="h-14 text-left font-bold">
          {columns.map((column, index) => (
            <th
              key={index}
              className={cn(
                "text-dark px-4 text-left text-sm",
                column.headerClass,
              )}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          <Fragment>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="h-14 border-b last-of-type:border-none"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-4">
                    {column.render ? (
                      column.render(
                        column.accessor
                          ? row[column.accessor as keyof T]
                          : undefined,
                        row,
                      )
                    ) : column.accessor ? (
                      <p
                        className={cn(
                          "text-left text-sm text-nowrap text-foreground",
                          column.dataClass,
                        )}
                      >
                        {String(row[column.accessor as keyof T] ?? "")}
                      </p>
                    ) : (
                      <Fragment></Fragment>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </Fragment>
        ) : (
          <tr>
            <td colSpan={columns.length} className="">
              <div className="flex bg-secondary h-60 items-center justify-center">
                <p className="max-w-xs text-center">{errorText}</p>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
