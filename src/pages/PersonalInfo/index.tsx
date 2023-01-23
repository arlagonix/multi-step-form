import Input from "../../components/Input";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Description from "../../components/Description";
import PageTemplate from "../../components/PageTemplate";
import formatPhoneNumber from "../../utils/formatPhoneNumber";
import { Form, Field } from "react-final-form";
import type { StepType } from "../../components/StepsList";
import { nameValidate, emailValidate, phoneValidate } from "./validation";

export type PersonalInfoType = {
  /** Person's name */
  name: string;
  /** Person's email address */
  email: string;
  /** Person's phone */
  phone: string;
};

type PersonalInfoProps = {
  /** Saved personal information */
  personalInfoProp: PersonalInfoType;
  /** Allows to update personal info state */
  setPersonalInfoProp: React.Dispatch<React.SetStateAction<PersonalInfoType>>;
  /** Allows to update step state */
  setCurrentStepProp: React.Dispatch<React.SetStateAction<StepType>>;
};

function PersonalInfo({
  personalInfoProp,
  setPersonalInfoProp,
  setCurrentStepProp,
}: PersonalInfoProps) {
  const submitHandler = (values: PersonalInfoType) => {
    setPersonalInfoProp({
      name: values.name,
      email: values.email,
      phone: values.phone,
    });
    setCurrentStepProp(2);
  };

  return (
    <PageTemplate>
      <div>
        <Header>Personal info</Header>
        <Description>Please provide your name, email address, and phone number</Description>
      </div>

      <Form
        onSubmit={submitHandler}
        render={(props) => {
          return (
            <form
              onSubmit={props.handleSubmit}
              className="pt-4 sm:pt-8 flex flex-col gap-6 flex-grow"
            >
              <Field
                name="name"
                validate={nameValidate}
                initialValue={personalInfoProp.name}
                render={({ input, meta }) => (
                  <Input
                    inputLabel="Name"
                    inputPlaceholder="e.g. Stephen King"
                    isRequired
                    inputProps={input}
                    metaProps={meta}
                  />
                )}
              />

              <Field
                name="email"
                validate={emailValidate}
                initialValue={personalInfoProp.email}
                render={({ input, meta }) => (
                  <Input
                    inputLabel="Email Address"
                    inputPlaceholder="e.g. stephenking@lorem.com"
                    isRequired
                    inputProps={input}
                    metaProps={meta}
                  />
                )}
              />

              <Field
                name="phone"
                validate={phoneValidate}
                initialValue={personalInfoProp.phone}
                parse={(value) => formatPhoneNumber(value)}
                render={({ input, meta }) => (
                  <Input
                    inputLabel="Phone Number"
                    inputPlaceholder="e.g. +1 234 567 890"
                    isRequired
                    inputProps={input}
                    metaProps={meta}
                  />
                )}
              />
              <div className="flex-grow flex items-end justify-end">
                <Button isDisabled={props.invalid} isSubmit>
                  Next Step
                </Button>
              </div>
            </form>
          );
        }}
      />
    </PageTemplate>
  );
}

export default PersonalInfo;
