import { useState } from "react";

export interface stateValues {
  [key: string]: string;
}

interface props {
  initialValues: stateValues;
  onSubmit?: (values: stateValues) => void;
  onSubmitAsync?: (values: stateValues) => Promise<void>;
  validation?: (
    field: string,
    value: string,
    allValues?: stateValues
  ) => string | null;
}

export default function useForm({
  initialValues,
  onSubmit,
  onSubmitAsync,
  validation,
}: props) {
  const [values, setValues] = useState<stateValues>(initialValues);
  const [errors, setErrors] = useState<stateValues>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(false);

  function setFieldValue(field: string, value: string) {
    const validateValue = validation ? validation(field, value, values) : null;
    if (validateValue) {
      setFieldError(field, validateValue);
    } else {
      setFieldError(field, "");
    }
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function setFieldError(field: string, value: string) {
    setErrors((prev) => ({ ...prev, [field]: value }));
  }

  function setTouchedField(field: string, value: boolean) {
    setTouched((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit() {
    if (onSubmit) {
      onSubmit(values);
    }
  }

  async function handleSubmitAsync() {
    if (onSubmitAsync) {
      setLoading(true);
      try {
        await onSubmitAsync(values);
      } finally {
        setLoading(false);
      }
    }
  }

  function submitValidation() {
    let hasError = false;
    for (let [key, value] of Object.entries(values)) {
      let validate = validation ? validation(key, value, values) : null;

      if (validate) {
        setErrors((prev) => ({ ...prev, [key]: validate }));
        setTouched((prev) => ({ ...prev, [key]: true }));
        hasError = true;
      }
    }
    return hasError;
  }

  function reset() {
    let reset_data: { [key: string]: "" } = {};
    for (let key of Object.keys(values)) {
      reset_data[key] = "";
    }
    setValues(reset_data);
    setErrors({});
    setTouched({});
  }

  return {
    values,
    errors,
    touched,
    loading,
    setFieldError,
    setFieldValue,
    setTouchedField,
    submitValidation,
    handleSubmit: onSubmit ? handleSubmit : handleSubmitAsync,
    reset,
  };
}
