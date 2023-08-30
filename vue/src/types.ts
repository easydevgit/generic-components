export type Option<T> = {
  label: T extends true ? string | number : string
  value: number
}
