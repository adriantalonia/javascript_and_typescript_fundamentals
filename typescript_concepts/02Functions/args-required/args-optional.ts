(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'no lastName'}`;
  };

  const name = fullName("Adrian");

  console.log(name);
})();
