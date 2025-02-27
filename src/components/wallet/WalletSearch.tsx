"use client";

import React, { useState } from "react";
import { Search, XIcon } from "lucide-react";
import { Input } from "../ui/input";

function WalletSearch() {
  const [focused, setFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const clearInput = () => {
    setQuery("");
    setFocused(true);
  };

  return (
    <div
      className={`relative flex flex-1 items-center rounded-md bg-secondary px-4 transition-all duration-100 ease-linear ${
        focused ? "ring-2 ring-primary" : "ring-0"
      }`}
    >
      <Search
        size={22}
        className={`${focused ? "text-primary" : "text-medium"} z-10`}
      />
      <Input
        type="text"
        className="bg-light peer z-10 flex-1 h-12 border-0 py-3 text-sm shadow-none ring-0 outline-none focus-visible:ring-0"
        placeholder="Search"
        onChange={(e) => {
          // setQuery(e.currentTarget.value);
          // search(e.currentTarget.value);
          // setLoading(true);
          // resetFields();
        }}
        value={query}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <XIcon
        size={20}
        onClick={clearInput}
        className={`cursor-pointer stroke-primary ${
          query.length > 0 ? "block" : "hidden"
        }`}
      />
    </div>
  );
}

export default WalletSearch;
