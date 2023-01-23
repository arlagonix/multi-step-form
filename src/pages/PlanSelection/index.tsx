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

      <div className="flex flex-col sm:flex-row gap-2 pt-4 sm:gap-6 sm:py-12 w-full">
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
        className="
        h-10 bg-grayThree rounded-lg my-6 sm:my-0 py-2 sm:py-8 
        flex gap-6 items-center justify-center
        cursor-pointer transition-all"
        onClick={() => {
          setPlanModeProp((prev) => (prev === "monthly" ? "yearly" : "monthly"));
        }}
      >
        <span
          className={classNames(
            "text-sm select-none",
            { "text-black font-bold": planModeProp === "monthly" },
            { "text-grayOne font-bold": planModeProp !== "monthly" }
          )}
        >
          Monthly
        </span>
        <Toggle checkedValue={planModeProp === "yearly"} />
        <span
          className={classNames(
            "text-sm select-none",
            { "text-black font-bold": planModeProp === "yearly" },
            { "text-grayOne font-bold": planModeProp !== "yearly" }
          )}
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between items-end flex-grow">
        <Button type="secondary" clickHandler={() => setCurrentStepProp(1)}>
          Go Back
        </Button>
        <Button clickHandler={() => setCurrentStepProp(3)}>Next Step</Button>
      </div>
    </PageTemplate>
  );
}

export default PlanSelection;
