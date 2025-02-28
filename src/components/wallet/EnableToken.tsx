import { IToken } from "@/db/mongodb/token/token.model";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { idb } from "@/db/indexdb/idb";

type Props = {
  token: IToken;
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
