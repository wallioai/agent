"use client";

import React, { Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import {
  selectHideBalance,
  setHideBalance,
} from "@/slices/account/hide-balance.slice";
import { Button } from "../ui/button";
import WalletSearch from "../wallet/WalletSearch";
import useStorage from "@/hooks/storage.hook";
import { StoreKey } from "@/enums/storage.enum";
import Radio from "../ui/radio";
import TabsRoot from "../tabs/TabsRoot";
import TabsList from "../tabs/TabsList";
import TabsHeader from "../tabs/TabsHeader";
import TabsContent from "../tabs/TabsContent";
import Table from "../ui/table";
import { useNetwork } from "@/context/network.context";
import { DexaSWIcon } from "../icons/logo";
import { Switch } from "../ui/switch";
import EnableToken from "../wallet/EnableToken";
import clsx from "clsx";
import { PlusIcon } from "lucide-react";

type Props = {};

function Overview({}: Props) {
  const dispatch = useAppDispatch();
  const isHidden = useAppSelector(selectHideBalance);
  const [activeTab, setActiveTab] = useState("tab1");
  const { setItem } = useStorage();
  const { defaultTokens, defaultChain } = useNetwork();

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const toggleHide = () => {
    const value = !isHidden;
    // setItem(StoreKey.DEXA_HIDE_BAL, value);
    dispatch(setHideBalance(value));
  };

  return (
    <Fragment>
      <div className="flex h-full flex-1 flex-col">
        <div className="mt-8">
          <div className="px-5">
            <p className="text-sm">Total Balance</p>
            <div className="flex items-end">
              <div className="flex items-end">
                {isHidden ? (
                  <p className="-mb-1 text-2xl font-semibold">*******</p>
                ) : (
                  <p className="-mb-1 text-2xl font-semibold">1,000</p>
                )}
                <p className="pl-1 text-xs font-semibold text-foreground/60">
                  USD
                </p>
              </div>

              <div className="flex items-end">
                {isHidden ? (
                  <p className="pl-2 text-xs font-semibold text-foreground/60">
                    ******
                  </p>
                ) : (
                  <p className="pl-2 text-xs font-semibold text-foreground/60">
                    = 1 S
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-x-5 pt-5">
              <Button type="button" className="rounded-sm" onClick={() => {}}>
                <p className="">Deposit</p>
              </Button>
              <Button
                type="button"
                variant={"secondary"}
                className="rounded-sm"
                onClick={() => {}}
              >
                <p className="text-foreground/80">Withdraw</p>
              </Button>
              <Button
                type="button"
                variant={"secondary"}
                className="rounded-sm"
                onClick={() => {}}
              >
                <p className="text-foreground/80">Pay</p>
              </Button>
            </div>
            <div className="mb-2 flex max-w-lg items-center gap-x-5 pt-5">
              <WalletSearch />
              <div className="flex items-center gap-x-2">
                <Radio
                  className="rounded-none"
                  type="checkbox"
                  checked={isHidden}
                  onChange={toggleHide}
                />
                <p className="text-sm">Hide balance</p>
              </div>
            </div>
            <div className="pt-5 pb-20">
              <TabsRoot>
                <TabsList className="sticky top-0 z-50 bg-white pt-3">
                  <TabsHeader
                    isActiveText={true}
                    title="Assets"
                    value="tab1"
                    activeTabId={activeTab}
                    onTabChange={onTabChange}
                    isCenter={false}
                    //isActiveBg={true}
                  />
                  <TabsHeader
                    isActiveText={true}
                    title="Transactions"
                    value="tab2"
                    activeTabId={activeTab}
                    onTabChange={onTabChange}
                    isCenter={false}
                    //isActiveBg={true}
                  />
                  <TabsHeader
                    isActiveText={true}
                    title="Manage Tokens"
                    value="tab3"
                    activeTabId={activeTab}
                    onTabChange={onTabChange}
                    isCenter={false}
                    //isActiveBg={true}
                  />
                </TabsList>
                <TabsContent value="tab1" activeTabId={activeTab}>
                  <div className="mt-1 flex-1">
                    <div className="max-w-full flex-1 border">
                      <Table
                        hideHeader={true}
                        columns={[
                          {
                            header: "Tokens",
                            accessor: "token",
                            render: (_, row) => (
                              <div className="flex items-center gap-x-2 text-nowrap">
                                {row.icon && (
                                  <DexaSWIcon
                                    src={row.icon}
                                    className="size-8 rounded-full"
                                  />
                                )}
                                <div className="max-w-[7rem]">
                                  <p className="text-sm font-bold">
                                    {row.symbol}
                                  </p>
                                  <p className="text-medium truncate text-xs">
                                    {row.name}
                                  </p>
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
                        data={defaultTokens.filter((t) => t.isEnabled)}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" activeTabId={activeTab}>
                  <div className="mt-1 flex-1">
                    {/* <ListTransactions /> */}
                  </div>
                </TabsContent>
                <TabsContent value="tab3" activeTabId={activeTab}>
                  <div className="mt-1 flex-1">
                    <div className="max-w-full flex-1 border">
                      <Table
                        hideHeader={true}
                        columns={[
                          {
                            header: "Tokens",
                            accessor: "token",
                            render: (_, row) => (
                              <div className="flex items-center gap-x-2 text-nowrap">
                                {row.icon && (
                                  <DexaSWIcon
                                    src={row.icon}
                                    className="size-8 rounded-full"
                                  />
                                )}
                                <div>
                                  <div className="flex items-center gap-2">
                                    <p className="text-sm font-bold">
                                      {row.symbol}
                                    </p>
                                    <p
                                      className={clsx("px-1 text-xs", {
                                        "bg-destructive/10":
                                          defaultChain.type == "testnet",
                                        "bg-primary/10":
                                          defaultChain.type == "mainnet",
                                      })}
                                    >
                                      {defaultChain.name}
                                    </p>
                                  </div>

                                  <p className="text-medium truncate text-xs">
                                    {row.name}
                                  </p>
                                </div>
                              </div>
                            ),
                          },
                          {
                            header: "Status",
                            accessor: "status",
                            headerClass: "text-center",
                            render: (_, row) => (
                              <EnableToken key={row.address} token={row} />
                            ),
                          },
                        ]}
                        data={defaultTokens}
                        errorText={`There are no default tokens for ${defaultChain?.name}`}
                      />
                    </div>
                    <Button
                      variant={"outline"}
                      className="mt-5 h-12 w-full rounded-none border border-dashed"
                    >
                      <PlusIcon />
                      <p>Add Token</p>
                    </Button>
                  </div>
                </TabsContent>
              </TabsRoot>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Overview;
