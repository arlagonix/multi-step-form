import "./index.css";
import Addons from "./pages/Addons";
import ThankYou from "./pages/ThankYou";
import StepsList from "./components/StepsList";
import FinishingUp from "./pages/FinishingUp";
import PersonalInfo from "./pages/PersonalInfo";
import PlanSelection from "./pages/PlanSelection";
import { useState } from "react";
import type { StepType } from "./components/StepsList";
import type { PersonalInfoType } from "./pages/PersonalInfo";

export type ChosenPlanType = "arcade" | "advanced" | "pro";
export type PlanModeType = "monthly" | "yearly";
export type AddonNames = "Online service" | "Larger storage" | "Customizable profile";

export type AddonsType = {
  [key in AddonNames]: {
    description: string;
    price: number;
    isChecked: boolean;
  };
};

const defaultAddonsState: AddonsType = {
  "Online service": {
    description: "Access to multiplayer games",
    price: 1,
    isChecked: false,
  },
  "Larger storage": {
    description: "Extra 1TB of cloud save",
    price: 2,
    isChecked: false,
  },
  "Customizable profile": {
    description: "Custom theme on your profile",
    price: 2,
    isChecked: false,
  },
};

function App() {
  const [currentStep, setCurrentStep] = useState<StepType>(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    name: "",
    phone: "",
    email: "",
  });
  const [chosenPlan, setChosenPlan] = useState<ChosenPlanType>("arcade");
  const [planMode, setPlanMode] = useState<PlanModeType>("monthly");
  const [addons, setAddons] = useState<AddonsType>(defaultAddonsState);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-veryLightBlue flex justify-center sm:items-center">
      <StepsList activeStep={currentStep} small />
      <main
        className="
        self-start sm:self-auto mx-4 sm:mx-0
        sm:w-[940px] sm:h-[600px] 
        bg-white rounded-lg sm:rounded-2xl 
        px-6 pt-8 pb-4 mt-24 sm:mt-0 sm:p-4 flex z-10"
      >
        <StepsList activeStep={currentStep} />

        {currentStep === 1 && (
          <PersonalInfo
            personalInfoProp={personalInfo}
            setPersonalInfoProp={setPersonalInfo}
            setCurrentStepProp={setCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <PlanSelection
            setCurrentStepProp={setCurrentStep}
            chosenPlanProp={chosenPlan}
            setChosenPlanProp={setChosenPlan}
            planModeProp={planMode}
            setPlanModeProp={setPlanMode}
          />
        )}
        {currentStep === 3 && (
          <Addons
            addonsProp={addons}
            setAddonsProp={setAddons}
            setCurrentStepProp={setCurrentStep}
          />
        )}
        {currentStep === 4 && !isFinished && (
          <FinishingUp
            setCurrentStepProp={setCurrentStep}
            chosenPlanProp={chosenPlan}
            planModeProp={planMode}
            addonsProp={addons}
            setIsFinishedProp={setIsFinished}
          />
        )}
        {currentStep === 4 && isFinished && <ThankYou />}
      </main>
    </div>
  );
}

export default App;
