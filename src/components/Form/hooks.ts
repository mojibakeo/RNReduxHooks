import {useState} from 'react';

export interface FormHooks {
  value: string;
  update: (v: string) => void;
}

export function useFormHooks(defaultText: string = 'default text'): FormHooks {
  const [value, update] = useState<string>(defaultText);
  return {
    value,
    update,
  };
}
