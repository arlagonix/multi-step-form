import { AddonsType, ChosenPlanType, PlanModeType } from "../../App";
import Button from "../../components/Button";
import PageTemplate from "../../components/PageTemplate";
import Description from "../../components/Description";
import Header from "../../components/Header";
import { StepType } from "../../components/StepsList";
import { priceData, timeSuffix } from "../../utils/dataObjects";
import Counter from "../../components/Counter";

type FinishingUpProps = {
  /** Passed state setter for the current state number */
  setCurrentStepProp: React.Dispatch<React.SetStateAction<StepType>>;
  /** Chosen plan */
  chosenPlanProp: ChosenPlanType;
  /** Chose plan mode */
  planModeProp: PlanModeType;
  /** List of chosen addons */
  addonsProp: AddonsType;
  /** Allows to move to the "Thank you!" section */
  setIsFinishedProp: React.Dispatch<React.SetStateAction<boolean>>;
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function FinishingUp({
  setCurrentStepProp,
  chosenPlanProp,
  planModeProp,
  addonsProp,
  setIsFinishedProp,
}: FinishingUpProps) {
  const chosenPlanStr = `${capitalizeFirstLetter(chosenPlanProp)} (${capitalizeFirstLetter(
    planModeProp
  )})`;
  const price = priceData[chosenPlanProp][planModeProp];
  const chosenAddons = Object.entries(addonsProp).filter((addon) => addon[1].isChecked);
  const isAtLeastOneAddonChosen = chosenAddons.length !== 0;

  const planPrice = priceData[chosenPlanProp][planModeProp];
  const addonsPrice = chosenAddons.reduce(
    (sum: number, addon) => sum + addon[1].price * (planModeProp === "monthly" ? 1 : 12),
    0
  );
  const totalPrice = planPrice + addonsPrice;

  return (
    <PageTemplate>
      <Header>Finishing up</Header>
      <Description>Double-check everything looks OK before confirming.</Description>

      <div className="mt-6 flex flex-col gap-6 rounded-lg bg-lightViolet p-6 sm:mt-12">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-black">{chosenPlanStr}</span>
            <span
              className="cursor-pointer self-start text-sm text-grayOne underline hover:text-violetTwo"
              onClick={() => setCurrentStepProp(2)}
            >
              Change
            </span>
          </div>
          <span className="font-bold text-black">
            $<Counter from={0} to={price} />/{timeSuffix[planModeProp]}
          </span>
        </div>
        {isAtLeastOneAddonChosen && (
          <>
            <hr className="border-grayTwo" />
            <div className="flex flex-col gap-4">
              {chosenAddons.map((addon) => {
                const addonName = addon[0];
                const addonNumberPrice = addon[1].price * (planModeProp === "monthly" ? 1 : 12);

                return (
                  <div className="flex justify-between" key={addonName}>
                    <span className="text-sm text-grayOne">{addonName}</span>
                    <span className="text-sm text-black">
                      +$
                      <Counter from={0} to={addonNumberPrice} />/{timeSuffix[planModeProp]}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between px-6 pb-6 pt-6 sm:pb-0">
        <span className="text-sm text-grayOne">
          Total (per {planModeProp === "monthly" ? "month" : "year"})
        </span>
        <span className="items-center text-xl font-bold text-violetTwo">
          +$
          <Counter from={0} to={totalPrice} />/{timeSuffix[planModeProp]}
        </span>
      </div>

      <div className="flex flex-grow items-end justify-between">
        <Button type="secondary" clickHandler={() => setCurrentStepProp(3)}>
          Go Back
        </Button>
        <Button clickHandler={() => setIsFinishedProp(true)}>Confirm</Button>
      </div>
    </PageTemplate>
  );
}

export default FinishingUp;
