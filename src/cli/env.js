
const parseEnv = () => {
    const envVars = Object.entries(process.env).filter(([key]) => key.startsWith('RSS_'));
    console.log(envVars.map(([key, value]) => `${key}=${value}`).join('; '));
};

parseEnv();