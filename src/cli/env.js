export const parseEnv = () => {
    for (const variable in process.env) {
        if(variable.includes('RSS_')) console.log(process.env[variable]);
    }
};

parseEnv()