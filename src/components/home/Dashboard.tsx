"use client";

import React, { useState } from "react";
import TabsRoot from "../tabs/TabsRoot";
import TabsList from "../tabs/TabsList";
import TabsHeader from "../tabs/TabsHeader";
import TabsContent from "../tabs/TabsContent";
import Overview from "./Overview";
//import WalletTab from "./WalletTab";

function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("tab1");

  const onTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <TabsRoot>
      <TabsList className="sticky top-[4.24rem] z-50 bg-white px-5">
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
