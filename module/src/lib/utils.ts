import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createEnums = (values: string[]) => {
  return {
    name: "enum",
    enums: values.map(value => ({
      value: value.toLowerCase(),
      label: value.charAt(0).toUpperCase() + value.slice(1),
    }))
  };
};
