// AudioManager.js
 
import {Howl, Howler} from 'howler'
import audioRegistry from './audioRegistry.js'

const AudioManager = (() => {
    let master_volume = 1
    let sfx_volume = 1
    let music_volume = 1
    let speach_volume = 1

    const set_master_volume = (volume) => {
        if (volume > 1) volume = 1
        if (volume < 0) volume = 0
        master_voume = volume;
    }

    const set_sfx_volume = (volume) => {
        if (volume > 1) volume = 1
        if (volume < 0) volume = 0
        sfx_volume = volume
    }

    const set_music_volume = (volume) => {
        if (volume > 1) volume = 1
        if (volume < 0) volume = 0
        music_volume = volume
    }

    const set_speach_volume = (volume) => {
        if (volume > 1) volume = 1
        if (volume < 0) volume = 0
        speach_volume = volume
    }

    const get_master_volume = () => {
        return master_volume;
    }

    const get_sfx_volume = () => {
        return sfx_volume;
    }

    const get_music_volume = () => {
        return music_volume;
    }

    const get_speach_volume = () => {
        return speach_volume;
    }

    //

    const play_sfx = (title) => {
        const path = audioRegistry[title];
        if (!path) {
            console.warn(`[AudioManager] Sound '${title}' not found in registry.`);
            return;
        }
        const sound = new Howl({
            src: [path],
            volume: sfx_volume * master_volume,
        });
        sound.play();
    }

    const play_music = (title, loop = false) => {
        const path = audioRegistry[title];
        if (!path) {
            console.warn(`[AudioManager] Music '${title}' not found in registry.`);
            return;
        }
        const sound = new Howl({
            src: [path],
            volume: music_volume * master_volume,
            loop: loop
        });
        sound.play();
    }

    const play_speach = (title) => {
        const path = audioRegistry[title];
        if (!path) {
            console.warn(`[AudioManager] Speech '${title}' not found in registry.`);
            return;
        }
        const sound = new Howl({
            src: [path],
            volume: speach_volume * master_volume,
        });
        sound.play();
    }

    return {
        set_master_volume: set_master_volume,
        set_sfx_volume: set_sfx_volume,
        set_music_volume: set_music_volume,
        set_speach_volume: set_speach_volume,
        get_master_volume: get_master_volume,
        get_sfx_volume: get_sfx_volume,
        get_music_volume: get_music_volume,
        get_speach_volume: get_speach_volume,
    }
})()

export default AudioManager