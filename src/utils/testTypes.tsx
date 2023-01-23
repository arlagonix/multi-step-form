export type TestDataType<A, B> = [
  /** Input value */
  input: A,
  /** Expected output for the test */
  expectedOutput: B
][];
