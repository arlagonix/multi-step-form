import classNames from "classnames";
import { FieldInputProps, FieldMetaState } from "react-final-form";

type InputProps = {
  /** Input props passed down to native input (provided by React Final Form) */
  inputProps: FieldInputProps<any, HTMLElement>;
  /** Meta data about input validation (provided by React Final Form) */
  metaProps: FieldMetaState<any>;
  /** Input placeholder, is shown when there is no value in the input */
  inputPlaceholder: string;
  /** Input label, is shown above the input */
  inputLabel: string;
  /** If `true`, shows * symbol after label */
  isRequired?: boolean;
  /** Hint for the browsers to put specific data in autocomplete list */
  autocomplete?: string;
};

/** Input with label, error message and error styling */
function Input({
  inputProps,
  metaProps,
  inputPlaceholder,
  inputLabel,
  isRequired,
  autocomplete,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label className="text-sm text-black">
          {inputLabel} {isRequired && <span className="font-bold text-red">*</span>}
        </label>
        {metaProps.touched && metaProps.invalid && (
          <span className="text-sm font-medium text-red">{metaProps.error} ❌</span>
        )}
        {metaProps.touched && metaProps.valid && (
          <span className="text-sm font-medium text-green-600">The field is valid ✔️</span>
        )}
      </div>
      <input
        {...inputProps}
        type="text"
        placeholder={inputPlaceholder}
        spellCheck={false}
        autoComplete={autocomplete}
        className={classNames(
          "h-12 rounded-lg border border-grayTwo p-4 font-medium placeholder:text-grayOne",
          { "border-red outline-red": metaProps.touched && metaProps.invalid },
          {
            "border-green-600 outline-green-600": metaProps.touched && metaProps.valid,
          }
        )}
      />
    </div>
  );
}

export default Input;
