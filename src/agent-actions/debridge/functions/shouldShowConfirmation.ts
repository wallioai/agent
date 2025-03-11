import { BridgeStep } from "../dln";

type IShouldShowConfirmation = {
  expired: boolean;
  confirmed: boolean;
  step: BridgeStep;
};

/**
 * Should check if a confirmation message should be show to user
 * @param props is type of IShouldShowConfirmation
 * @returns boolean
 */
export function shouldShowConfirmation(props: IShouldShowConfirmation): boolean {
  return (props.expired || !props.confirmed) && props.step === "confirmation";
}
