// AboutState.js

import SceneManager from "./SceneManager";
import { STATES } from "../consts";
import StateMachine from "./StateMachine";
import { copy } from "../content/copy";

const AboutState = (() => {
    const name = STATES.ABOUT;
    let listener_bound = false;

    const enter = ((prev_state, data) => {
        console.log("[AboutState] enter() called with previous state:", prev_state, "and data:", data);
        // 1. Show the about screen
        SceneManager.show(name);
        // 2. Register event listeners
        if (!listener_bound) {
            document.addEventListener("click", handleClickEvent);
            document.addEventListener("keydown", handleKeydownEvent);
            listener_bound = true;
        }

        // copy the text content from the data object to the overlay text elements
        const build_overlay = (() => {
            const overlay_img = document.querySelector(`#scene-${name} #overlay-img`);
            const overlay_title = document.querySelector(`#scene-${name} #overlay-title`);
            const overlay_body = document.querySelector(`#scene-${name} #overlay-body`);
            if (overlay_img) {
                overlay_img.src = copy[name].imgSrc;
                overlay_img.alt = copy[name].imgAlt;
            }
            if (overlay_title) {
                overlay_title.textContent = copy[name].title;
            }
            if (overlay_body) {
                overlay_body.innerHTML = copy[name].body;
            }
        })();

        history.pushState(data, '', `?state=${name.toUpperCase()}`);
    });

    const exit = (() => {
        console.log("[AboutState] exit() called.");
        // 1. Deregister event listeners
        if (listener_bound) {
            document.removeEventListener("click", handleClickEvent);
            document.removeEventListener("keydown", handleKeydownEvent);
            listener_bound = false;
        }
    });

    function handleClickEvent (event) {
        const clickable = event.target.closest(".clickable");
        if (!clickable) return console.log("[AboutState] Click event ignored - not a clickable element.");
        event.preventDefault();
        console.log("[AboutState] Clickable clicked:", clickable.id);
        const targetState = clickable.dataset.targetState;
        if (targetState) {
            console.log(`[AboutState] Clickable clicked, transitioning to target state: ${targetState}`);
            StateMachine.transition_to_state_by_name(targetState);
        } else {
            console.warn("[AboutState] No target state defined for this clickable:", clickable.id);
        }
    }

    function handleKeydownEvent (event) {

    }

    return {
        name: name,
        enter: enter,
        exit: exit
    }
})();

export default AboutState;