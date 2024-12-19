type SwapProps = {
  arr: Array<any>;
  i: number;
  j: number;
};

export function swap(props: SwapProps) {
  const { arr, i, j } = props;

  const k = arr[i];
  arr[i] = arr[j];
  arr[j] = k;
}
