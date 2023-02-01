type ToggleProps = {
  /** If `true` then the element is checked */
  checkedValue: boolean;
};

// Based on code from https://flowbite.com/docs/forms/toggle/
function Toggle({ checkedValue }: ToggleProps) {
  return (
    <label className="pointer-events-none relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" checked={checkedValue} readOnly />
      <div className="h-4 w-8 rounded-full bg-black after:absolute after:top-[3px] after:left-[3px] after:h-2.5 after:w-2.5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-[16px] peer-focus:outline-none"></div>
    </label>
  );
}

export default Toggle;
