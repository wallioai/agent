import { Token } from "@/db/repos/token.repo";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { idb } from "@/db/idb";

type Props = {
  token: Token;
};

function EnableToken({ token }: Props) {
  const [checked, setChecked] = useState<boolean>(token.isEnabled);

  const toggleEnable = async (isEnabled: boolean) => {
    //@ts-ignore
    await idb.tokens.update(
      //@ts-ignore
      { address: token.address, id: token.id },
      { isEnabled },
    );
    setChecked(isEnabled);
  };

  return (
    <div className="flex items-center justify-center">
      <Switch
        className="cursor-pointer"
        checked={checked}
        onCheckedChange={toggleEnable}
      />
    </div>
  );
}

export default EnableToken;
