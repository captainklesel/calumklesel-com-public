// ConstactState.js

import SceneManager from "./SceneManager";
import { STATES } from "../consts";
import StateMachine from "./StateMachine";
import { copy } from "../content/copy";

const ContactState = (() => {
    const name = STATES.CONTACT;
    let previous_state = null;
    let listener_bound = false;

    const enter = ((prev_state, data) => {
        console.log("[ContactState] enter() called with previous state:", prev_state, "and data:", data);
        previous_state = prev_state;

        // 1. Show the contact screen
        SceneManager.show(name);

        // 2. Register event listeners
        if (!listener_bound) {
            document.addEventListener("click", handleClickEvent);
            document.addEventListener("keydown", handleKeydownEvent);
            listener_bound = true;
            console.log("[ContactState] Event listeners registered.");
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
        // 1. Deregister event listeners
        if (listener_bound) {
            document.removeEventListener("click", handleClickEvent);
            document.removeEventListener("keydown", handleKeydownEvent);
            listener_bound = false;
            console.log("[ContactState] Event listeners deregistered.");
        }
    });

    function handleClickEvent (event) {
        const clickable = event.target.closest(".clickable");
        if (!clickable) return console.log("[ContactState] Click event ignored - not a clickable element.");
        event.preventDefault();
        console.log("[ContactState] Clickable clicked:", clickable.id);
        const targetState = clickable.dataset.targetState;
        if (targetState) {
            console.log(`[ContactState] Clickable clicked, transitioning to target state: ${targetState}`);
            StateMachine.transition_to_state_by_name(targetState);
        } else {
            console.warn("[ContactState] No target state defined for this clickable:", clickable.id);
        }
    }

    function handleKeydownEvent (event) {
        // Handle keyboard navigation or other key events here
        console.log("[ContactState] Keydown event:", event.key);
        if (event.key === "Escape") {
            console.log("[ContactState] Escape key pressed, transitioning to previous state.");
            StateMachine.transition_to_state_by_name(previous_state);
        }
    }

    return {
        name: name,
        enter: enter,
        exit: exit
    }
})();

export default ContactState;