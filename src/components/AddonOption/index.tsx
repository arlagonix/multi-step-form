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
        "border border-grayOne rounded-lg \
          px-4 sm:px-6 py-2 sm:py-0 sm:min-h-[78px] flex gap-4 sm:gap-6 items-center \
          cursor-pointer transition select-none \
          hover:border-violetOne hover:bg-lightViolet",
        { "border-violetOne bg-lightViolet": checkedState }
      )}
    >
      <input
        type="checkbox"
        className="w-5 h-5 accent-violetTwo rounded-full"
        checked={checkedState}
        onChange={checkedStateHandler}
      />
      <div className="flex flex-col flex-grow">
        <span className="text-black font-bold text-sm sm:text-base">{header}</span>
        <span className="text-grayOne text-xs sm:text-sm">{description}</span>
      </div>
      <span className="text-violetOne text-xs sm:text-sm">+${price}/mo</span>
    </label>
  );
}

export default AddonOption;
