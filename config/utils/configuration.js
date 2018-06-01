const macroPrefix = 'PD_';

function isPagerDutyMacro(macro) {
    return macro.startsWith(macroPrefix);
}

function processMacros(env, data) {
    Object.getOwnPropertyNames(env)
        .filter((key) => isPagerDutyMacro(key))
        .forEach((key) => {
            const macro = '$' + key;
            const macroValue = env[key];
            console.log('Replacing ', macro, ' with ', macroValue);
            while (data.indexOf(macro) !== -1) {
                data = data.replace(macro, macroValue);
            }
        });
    return data;
}

module.exports.processMacros = processMacros;