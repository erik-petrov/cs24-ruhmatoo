//skripti autor: Robert Ilves

// Helifailide kaart, helide allikas https://minecraft.wiki/w/Category:Mob_sounds
const soundEffects = {
    creeper: 'tutorial_resources/soundeffects/Creeper_fuse.ogg',
    zombie: 'tutorial_resources/soundeffects/Zombie_idle.ogg',
    enderman: 'tutorial_resources/soundeffects/Enderman_idle2.ogg',
    spider: 'tutorial_resources/soundeffects/Spider_idle3.ogg',
    skeleton: 'tutorial_resources/soundeffects/Skeleton_idle1.ogg'
};

// Lisa sündmuste kuulaja igale nupule
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.id; 
        const soundPath = soundEffects[soundId]; // Leia helifail
        if (soundPath) {
            const audio = new Audio(soundPath); // Loo uus heliobjekt
            audio.currentTime = 0;
            audio.play();
        }
    });
});
