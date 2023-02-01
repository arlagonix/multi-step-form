import classNames from "classnames";

type AddonOptionProps = {
  /** Option header */
  header: string;
  /** Option description */
  description: string;
  /** Option monthly price in dollars */
  price: number;
  /** If `true`, the field is marked as checked */
  checkedState: boolean;
  /** Handles the changes in the checked state */
  checkedStateHandler: () => void;
};

function AddonOption({
  header,
  description,
  price,
  checkedState,
  checkedStateHandler,
}: AddonOptionProps) {
  return (
    <label
      className={classNames(
        "flex cursor-pointer select-none items-center gap-4 rounded-lg border border-grayOne px-4 py-2 transition hover:border-violetOne hover:bg-lightViolet sm:min-h-[78px] sm:gap-6 sm:px-6 sm:py-0",
        { "border-violetOne bg-lightViolet": checkedState }
      )}
    >
      <input
        type="checkbox"
        className="h-5 w-5 rounded-full accent-violetTwo"
        checked={checkedState}
        onChange={checkedStateHandler}
      />
      <div className="flex flex-grow flex-col">
        <span className="text-sm font-bold text-black sm:text-base">{header}</span>
        <span className="text-xs text-grayOne sm:text-sm">{description}</span>
      </div>
      <span className="text-xs text-violetOne sm:text-sm">+${price}/mo</span>
    </label>
  );
}

export default AddonOption;
