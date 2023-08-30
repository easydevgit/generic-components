type OnChange<SelectValue, Nullable> = Nullable extends true
  ? (val: SelectValue | null) => void
  : (val: SelectValue) => void;

interface Props<SelectValue, Nullable> {
  selectValue: SelectValue;
  onChange: OnChange<SelectValue, Nullable>;
  nullable: Nullable;
}

function Select<SelectValue extends string, Nullable extends boolean>(
  props: Props<SelectValue, Nullable>
) {
  return <div>{props.selectValue}</div>;
}

export default Select;
