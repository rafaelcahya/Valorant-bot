import fs from "fs";

export let config = {};
export default config;

export const loadConfig = (filename=process.env.TOKEN) => {
    let loadedConfig;

    if(!loadedConfig.token || loadedConfig.token === "token goes here")
        return console.error("You forgot to put your bot token in config.json!");

    loadedConfig.fetchSkinPrices = loadedConfig.showSkinPrices;
    loadedConfig.fetchSkinRarities = loadedConfig.showSkinRarities;

    applyConfig(loadedConfig, "token", process.env.TOKEN);
    applyConfig(loadedConfig, "fetchSkinPrices", true);
    applyConfig(loadedConfig, "fetchSkinRarities", true);
    applyConfig(loadedConfig, "linkItemImage", true);
    applyConfig(loadedConfig, "refreshSkins", "10 0 0 * * *");
    applyConfig(loadedConfig, "checkGameVersion", "*/15 * * * *");
    applyConfig(loadedConfig, "cleanupAccounts", "0 * * * *");
    applyConfig(loadedConfig, "storePasswords", false);

    saveConfig(filename, config);

    return config;
}

const saveConfig = (filename, config) => {
    fs.writeFileSync(filename, JSON.stringify(config, null, 2));
}

const applyConfig = (loadedConfig, name, defaultValue) => {
    if(loadedConfig[name] === undefined) config[name] = defaultValue;
    else config[name] = loadedConfig[name];
}