import type { ChosenPlanType, PlanModeType } from "../App";

type PriceDataType = {
  [key in ChosenPlanType]: {
    [key in PlanModeType]: number;
  };
};

export const priceData: PriceDataType = {
  arcade: {
    monthly: 9,
    yearly: 89,
  },
  advanced: {
    monthly: 12,
    yearly: 119,
  },
  pro: {
    monthly: 15,
    yearly: 149,
  },
};

type TimeSuffixType = {
  [key in PlanModeType]: string;
};

export const timeSuffix: TimeSuffixType = {
  monthly: "mo",
  yearly: "yr",
};
