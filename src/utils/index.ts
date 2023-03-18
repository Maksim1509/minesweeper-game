export const createField = ([width, height]: [number, number]) => {
  const rows: null[] = Array(height).fill(null);
  const field = rows.map(() => Array(width).fill(0));
  console.log(field);
  return field;
};
