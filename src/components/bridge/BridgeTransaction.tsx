"use client";

import React, { useEffect } from "react";
import Table from "../ui/table";
import { Icon } from "../icons/logo";

function BridgeTransaction() {
  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(
        "https://stats-api.dln.trade/api/Orders/filteredList",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skip: 0,
            take: 20,
            creator: "0x5ebb8663b9d213026ad9776dba264c3ef1a40f37",
          }),
        },
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
      console.log(response);
    };
    getDetails();
  }, []);
  return (
    <div className="mt-5">
      <div className="flex items-center text-xl font-semibold">
        <p>Latest Trades</p>
      </div>

      <div className="mt-1 max-w-full flex-1 border">
        <Table
          errorText="No trades found"
          hideHeader={true}
          columns={[
            {
              header: "Tokens",
              accessor: "token",
              render: (_, row) => (
                <div className="flex items-center gap-x-2 text-nowrap">
                  {row.icon && (
                    <Icon src={row.icon} className="size-8 rounded-full" />
                  )}
                  <div className="max-w-[7rem]">
                    <p className="text-sm font-bold">{row.symbol}</p>
                    <p className="text-medium truncate text-xs">{row.name}</p>
                  </div>
                </div>
              ),
            },
            {
              header: "Balance",
              accessor: "balance",
              render: (_, row) => (
                <div>
                  <p>0.00</p>
                  <p className="-mt-1 text-xs">$0.54</p>
                </div>
              ),
            },
            {
              header: "",
              accessor: "actions",
              headerClass: "text-center",
              render: (_, row) => (
                <div className="flex items-center justify-center gap-x-1">
                  <p
                    role="button"
                    className="px-2 text-sm font-bold text-primary"
                  >
                    Withdraw
                  </p>
                  <p
                    role="button"
                    className="px-2 text-sm font-bold text-primary"
                  >
                    Transfer
                  </p>
                </div>
              ),
            },
          ]}
          data={[]}
        />
      </div>
    </div>
  );
}

export default BridgeTransaction;
