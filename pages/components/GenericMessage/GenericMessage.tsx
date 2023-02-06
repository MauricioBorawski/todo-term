import { FunctionComponent, ReactElement } from "react";

export interface GenericMessageType {
    children: ReactElement | string;
}

export const GenericMessage: FunctionComponent<GenericMessageType> = ({
  children,
}) => {
  return <div className="pl-6">{children}</div>;
};
