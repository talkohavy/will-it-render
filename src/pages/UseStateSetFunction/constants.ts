export const firstButtonCode = `<Button
  onClick={() =>
    setTimeState((t) => {
      t.startDate += 1;
      console.log('t is:', t);
      return t;
    })
  }
>
  Mutate timeState
</Button>`;

export const secondButtonCode = `<Button onClick={() => setTimeState((t) => ({ ...t, startDate: t.startDate + 1 }))}>
  Instantiate new timeState
</Button>`;
