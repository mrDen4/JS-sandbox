function filterByType(...theArgs) {
  let finalArr = theArgs.filter(function(arg){
    if (typeof arg == typeof theArgs[0] && theArgs[0] !== null && !Number.isNaN(theArgs[0])) {
      if (!Array.isArray(theArgs[0]) && !Array.isArray(arg) && arg !== null) {
        return arg;
      }; 
      if (Array.isArray(theArgs[0]) && Array.isArray(arg)) {
        return arg;
      };
    }
    if (theArgs[0] == null && arg == null) {
      return true;
    }
    if (Number.isNaN(theArgs[0]) && Number.isNaN(arg)) {
      return true;
    }
  });
  console.log(finalArr);
}
filterByType(NaN, [123,1231,3124214], {a: '1231', b: 1231}, 123, NaN, 20, null, {qwe: 123}, 89, [123,1231,423], NaN, null, 'a', 'b', true, false);