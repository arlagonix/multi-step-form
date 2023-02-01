import Button from "../../components/Button";
import PageTemplate from "../../components/PageTemplate";
import Description from "../../components/Description";
import Header from "../../components/Header";
import type { StepType } from "../../components/StepsList";
import AddonOption from "../../components/AddonOption";

import type { AddonNames, AddonsType } from "../../App";

type AddonsProps = {
  /** List of available addons */
  addonsProp: AddonsType;
  /** Change handler for addons checking, uncheking */
  setAddonsProp: React.Dispatch<React.SetStateAction<AddonsType>>;
  /** Passed state setter for the current state number */
  setCurrentStepProp: React.Dispatch<React.SetStateAction<StepType>>;
};

function Addons({ addonsProp, setAddonsProp, setCurrentStepProp }: AddonsProps) {
  const setSpecificAddon = (addonName: AddonNames) => {
    setAddonsProp((prevAddons) => ({
      ...prevAddons,
      [addonName]: {
        ...prevAddons[addonName],
        isChecked: !prevAddons[addonName].isChecked,
      },
    }));
  };

  return (
    <PageTemplate>
      <Header>Pick add-ons</Header>
      <Description>Add-ons help enhance your gaming experience.</Description>

      <div className="flex flex-col gap-3 py-6 sm:gap-4 sm:pt-8 sm:pb-0">
        {Object.entries(addonsProp).map((addon) => {
          const addonName = addon[0] as AddonNames;
          const addonDescription = addon[1].description;
          const addonPrice = addon[1].price;
          const addonIsChecked = addon[1].isChecked;

          return (
            <AddonOption
              key={addonName}
              header={addonName}
              description={addonDescription}
              price={addonPrice}
              checkedState={addonIsChecked}
              checkedStateHandler={() => setSpecificAddon(addonName)}
            />
          );
        })}
      </div>

      <div className="flex flex-grow items-end justify-between">
        <Button type="secondary" clickHandler={() => setCurrentStepProp(2)}>
          Go Back
        </Button>
        <Button clickHandler={() => setCurrentStepProp(4)}>Next Step</Button>
      </div>
    </PageTemplate>
  );
}

export default Addons;
