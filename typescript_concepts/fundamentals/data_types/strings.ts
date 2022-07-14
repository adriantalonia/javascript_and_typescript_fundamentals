(() => {
  const batman: string = "Batman";
  const superman: string = "Superman";
  const flash: string = `flash`;

  batman.toUpperCase();

  console.log(`I'm ${batman}`);
  
  console.log(batman[10]?.toUpperCase() || 'No present');
   

})();
