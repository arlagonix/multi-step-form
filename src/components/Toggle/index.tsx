type ToggleProps = {
  /** If `true` then the element is checked */
  checkedValue: boolean;
};

// Based on code from https://flowbite.com/docs/forms/toggle/
function Toggle({ checkedValue }: ToggleProps) {
  return (
    <label className="relative inline-flex items-center cursor-pointer pointer-events-none">
      <input type="checkbox" className="sr-only peer" checked={checkedValue} readOnly />
      <div
        className="
      w-8 h-4 bg-black peer-focus:outline-none rounded-full
      peer-checked:after:translate-x-[16px]
      
      after:content-[''] after:absolute after:top-[3px] after:left-[3px] 
      after:bg-white after:rounded-full after:h-2.5 after:w-2.5 after:transition-all"
      ></div>
    </label>
  );
}

export default Toggle;
