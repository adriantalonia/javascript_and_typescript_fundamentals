(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Adrian", "Talonia|");

  console.log(name);
  
})();
