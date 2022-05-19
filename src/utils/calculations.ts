const calculationPlanete = <IFakeData>(
  table: Array<IFakeData>,
  key: string
): number => {
  let total: number = 0.0;
  for (let index = 0; index < table.length; index++) {
    const element: any = table[index];

    if (!(key in element.planete)) return -1;

    let tempo = parseInt(element.planete[key]);

    total += tempo;
  }
  return total;
};

export default calculationPlanete;
