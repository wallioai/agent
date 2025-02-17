"use client";

export type IConnector = {
  id: string;
  name: string;
  icon: React.FC;
  onClick: () => void;
};
interface ConnectorProps {
  connector: IConnector;
  className?: string;
}
export function ConnectorWrapper({ connector }: ConnectorProps) {
  const { onClick } = connector;

  return (
    <div
      onClick={onClick}
      role="button"
      className="flex cursor-pointer hover:bg-muted items-center justify-between px-4 py-3 gap-4 rounded-sm border"
    >
      <div className="flex items-center w-full gap-4">
        <div className="flex-1 items-center justify-center flex gap-1">
          <connector.icon />
          <p className="text-base font-normal dark:text-white">
            {connector.name}
          </p>
        </div>
      </div>
    </div>
  );
}
