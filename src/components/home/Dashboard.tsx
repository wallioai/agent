"use client";

import React, { useEffect, useState } from "react";
import TabsRoot from "../tabs/TabsRoot";
import TabsList from "../tabs/TabsList";
import TabsHeader from "../tabs/TabsHeader";
import TabsContent from "../tabs/TabsContent";
import Overview from "./Overview";

function Dashboard() {
  useEffect(() => {
    const scan = async () => {
      const response = await fetch(
        "https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=0xa317a4325664b70499db9ae678ec4a9c268c6983",
        {
          method: "GET",
        },
      ).then((res) => res.json());
      console.log(response);
    };
    scan();
  }, []);
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <TabsRoot className="h-full">
      <TabsList className="sticky top-0 z-50 bg-white px-5 pt-3">
        <TabsHeader
          className="text-left"
          isActiveText={true}
          title="Overview"
          value="tab1"
          activeTabId={activeTab}
          onTabChange={onTabChange}
          isCenter={false}
        />
      </TabsList>
      <TabsContent value="tab1" activeTabId={activeTab}>
        <div className="flex">
          <Overview />
        </div>
      </TabsContent>
    </TabsRoot>
  );
}

export default Dashboard;
