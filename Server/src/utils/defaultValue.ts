interface inputValuetype {
  initialValue?: any;
  defaultValue?: any;
}

export const defaultValue = ({
  initialValue,
  defaultValue,
}: inputValuetype) => {
  if (!initialValue && !defaultValue)
    throw new Error('You should have at least one value');
  return initialValue ? initialValue : defaultValue;
};
