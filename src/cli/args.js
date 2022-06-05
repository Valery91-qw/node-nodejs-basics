export const parseArgs = () => {
  const passArgs = process.argv.slice(2);
  const results = [];
  for (let i = 0; i <= passArgs.length; i+=2) {
    if(!passArgs[i]) continue;
    if(passArgs[i].includes('--prop')) {
      results.push(`${passArgs[i].slice(2)} is ${passArgs[i + 1]}`);
    }
  }
  console.log(results.length ? results.join(", ") : 'Nothing to show');
};

parseArgs()