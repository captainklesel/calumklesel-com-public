// ResumeState.js

import SceneManager from "./SceneManager";
import { STATES } from "../consts";
import StateMachine from "./StateMachine";
import { copy } from "../content/copy.js";

const ResumeState = (() => {
    const name = STATES.RESUME;
    let previous_state = null;
    let listener_bound = false;
    
    const enter = ((prev_state, data) => {
        console.log("[ResumeState] enter() called with previous state:", prev_state, "and data:", data);
        previous_state = prev_state;

        // 1. Show the resume screen
        SceneManager.show(name);

        // 2. Register event listeners
        if (!listener_bound) {
            document.addEventListener("click", handleClickEvent);
            listener_bound = true;
        }

        // copy the text content from the data object to the overlay text elements
        const build_overlay = (() => {
            const overlay_img = document.querySelector(`#scene-${name} #overlay-img`);
            const overlay_title = document.querySelector(`#scene-${name} #overlay-title`);
            const overlay_body = document.querySelector(`#scene-${name} #overlay-body`);
            if (overlay_img) {
                overlay_img.classList.add('hidden');
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
        console.log("[ResumeState] exit() called.");
        // 1. Deregister event listeners
        if (listener_bound) {
            document.removeEventListener("click", handleClickEvent);
            const overlay_img = document.querySelector(`#scene-${name} #overlay-img`);
            if (overlay_img) overlay_img.classList.remove('hidden');
            listener_bound = false;
        }
    });

    function handleClickEvent (event) {
        const clickable = event.target.closest(".clickable");
        if (!clickable) return console.log("[ResumeState] Click event ignored - not a clickable element.");
        event.preventDefault();
        console.log("[ResumeState] Clickable clicked:", clickable.id);
        const targetState = clickable.dataset.targetState;
        if (targetState) {
            console.log(`[ResumeState] Clickable clicked, transitioning to target state: ${targetState}`);
            StateMachine.transition_to_state_by_name(targetState);
        } else {
            console.warn("[ResumeState] No target state defined for this clickable:", clickable.id);
        }
    }

    return {
        name: name,
        enter: enter,
        exit: exit
    }
})();

export default ResumeState;