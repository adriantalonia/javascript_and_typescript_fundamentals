(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if(upper) {
        return `${firstName} ${lastName || "no lastName"}`.toUpperCase();
    }else {
        return `${firstName} ${lastName || "no lastName"}`;
    }

    
  };

  const name = fullName("Adrian", "Talonia", true);

  console.log(name);
})();
