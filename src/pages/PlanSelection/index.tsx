import Button from "../../components/Button";
import Toggle from "../../components/Toggle";
import Header from "../../components/Header";
import PlanCard from "../../components/PlanCard";
import classNames from "classnames";
import Description from "../../components/Description";
import PageTemplate from "../../components/PageTemplate";
import { priceData, timeSuffix } from "../../utils/dataObjects";
import type { StepType } from "../../components/StepsList";
import type { ChosenPlanType, PlanModeType } from "../../App";

// I decided to pass the state because there not so many of them
// Thus there is no real need in some complex state management instruments
// Also I need these states in the App to pass them into another App section

type PlanSelectionProps = {
  /** Passed state setter for the current state number */
  setCurrentStepProp: React.Dispatch<React.SetStateAction<StepType>>;
  /** Passed state for the chosen plan */
  chosenPlanProp: ChosenPlanType;
  /** Passed state setter for the chosen plan */
  setChosenPlanProp: React.Dispatch<React.SetStateAction<ChosenPlanType>>;
  /** Passed state for the plan mode */
  planModeProp: PlanModeType;
  /** Passed state setter for the plan mode */
  setPlanModeProp: React.Dispatch<React.SetStateAction<PlanModeType>>;
};

function PlanSelection({
  setCurrentStepProp,
  chosenPlanProp,
  setChosenPlanProp,
  planModeProp,
  setPlanModeProp,
}: PlanSelectionProps) {
  const arcadePrice = priceData["arcade"][planModeProp];
  const advancedPrice = priceData["advanced"][planModeProp];
  const proPrice = priceData["pro"][planModeProp];
  const planModeSuffix = timeSuffix[planModeProp];
  const commentText = "2 months free";

  return (
    <PageTemplate>
      <Header>Select your plan</Header>
      <Description>You have the option of monthly or yearly billing.</Description>

      <div className="flex w-full flex-col gap-2 pt-4 sm:flex-row sm:gap-6 sm:py-12">
        <PlanCard
          iconType="arcade"
          title="Arcade"
          price={`$${arcadePrice}/${planModeSuffix}`}
          comment={planModeProp === "yearly" ? commentText : undefined}
          isActive={chosenPlanProp === "arcade"}
          clickHandler={() => setChosenPlanProp("arcade")}
        />
        <PlanCard
          iconType="advanced"
          title="Advanced"
          price={`$${advancedPrice}/${planModeSuffix}`}
          comment={planModeProp === "yearly" ? commentText : undefined}
          isActive={chosenPlanProp === "advanced"}
          clickHandler={() => setChosenPlanProp("advanced")}
        />
        <PlanCard
          iconType="pro"
          title="Pro"
          price={`$${proPrice}/${planModeSuffix}`}
          comment={planModeProp === "yearly" ? commentText : undefined}
          isActive={chosenPlanProp === "pro"}
          clickHandler={() => setChosenPlanProp("pro")}
        />
      </div>

      <div
        className="my-6 flex h-10 cursor-pointer items-center justify-center gap-6 rounded-lg bg-grayThree py-2 transition-all sm:my-0 sm:py-8"
        onClick={() => {
          setPlanModeProp((prev) => (prev === "monthly" ? "yearly" : "monthly"));
        }}
      >
        <span
          className={classNames(
            "select-none text-sm",
            { "font-bold text-black": planModeProp === "monthly" },
            { "font-bold text-grayOne": planModeProp !== "monthly" }
          )}
        >
          Monthly
        </span>
        <Toggle checkedValue={planModeProp === "yearly"} />
        <span
          className={classNames(
            "select-none text-sm",
            { "font-bold text-black": planModeProp === "yearly" },
            { "font-bold text-grayOne": planModeProp !== "yearly" }
          )}
        >
          Yearly
        </span>
      </div>

      <div className="flex flex-grow items-end justify-between">
        <Button type="secondary" clickHandler={() => setCurrentStepProp(1)}>
          Go Back
        </Button>
        <Button clickHandler={() => setCurrentStepProp(3)}>Next Step</Button>
      </div>
    </PageTemplate>
  );
}

export default PlanSelection;
