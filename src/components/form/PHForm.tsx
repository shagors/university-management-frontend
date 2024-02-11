import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PHForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{
          boxShadow: "7px 0px 20px 0px rgba(0,0,0,0.2)",
          padding: "15px",
          width: "250px",
          height: "220px",
          borderRadius: "8px",
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default PHForm;
