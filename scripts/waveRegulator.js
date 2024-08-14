Events.on(SectorLaunchEvent, event => {
    if (!isCampaign()) {
        return;
    }
    const winWave = Vars.state.rules.winWave;
    const newWinWave = winWave * 2;

    Vars.state.rules.winWave = newWinWave;

    Vars.state.rules.spawns.forEach(spawn => {
        if (spawn.effect == StatusEffects.boss) {
            spawn.end = newWinWave;
            spawn.spacing = 5;
            spawn.unitScaling = 1;
        }
    })
})

function isCampaign() {
    return Vars.state.isCampaign();
}