const sumFields = <IData>(table: Array<IData>, field: string): number => {
  let total: number = 0.0;
  for (let index = 0; index < table.length; index++) {
    const element: any = table[index];

    if (!(field in element)) return -1;

    let tempo = parseInt(element[field]);

    total += tempo;
  }
  return total;
};

export default sumFields;
