(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateSignal = ():string => {
    return 'Signal activated';
  }

  console.log(typeof activateSignal);
  
})();
