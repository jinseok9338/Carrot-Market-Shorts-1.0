interface inputValuetype {
  initialValue?: any;
  defaultValue?: any;
}

export const defaultValue = ({
  initialValue,
  defaultValue,
}: inputValuetype) => {
  if (!initialValue && !defaultValue) {
    console.log('You should have at least one value');
  }
  return initialValue ? initialValue : defaultValue;
};
