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
};

/** Input with label, error message and error styling */
function Input({ inputProps, metaProps, inputPlaceholder, inputLabel, isRequired }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <label className="text-black text-sm">
          {inputLabel} {isRequired && <span className="text-red font-bold">*</span>}
        </label>
        {metaProps.touched && metaProps.invalid && (
          <span className="text-sm text-red font-medium">{metaProps.error} ❌</span>
        )}
        {metaProps.touched && metaProps.valid && (
          <span className="text-sm text-green-600 font-medium">The field is valid ✔️</span>
        )}
      </div>
      <input
        {...inputProps}
        type="text"
        placeholder={inputPlaceholder}
        spellCheck={false}
        className={classNames(
          "h-12 border border-grayTwo rounded-lg \
          p-4 font-medium placeholder:text-grayOne",
          { "border-red outline-red": metaProps.touched && metaProps.invalid },
          { "border-green-600 outline-green-600": metaProps.touched && metaProps.valid }
        )}
      />
    </div>
  );
}

export default Input;
