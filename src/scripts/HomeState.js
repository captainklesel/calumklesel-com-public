// HomeState.js

import SceneManager from "./SceneManager";
import StateMachine from "./StateMachine";
import { STATES } from "../consts";
import { copy } from "../content/copy";

const HomeState = (() => {
    let previous_state = null;
    let listener_bound = false;
    let keyboard_navigation = false;
    let keyboard_nav_focused_element = null;
    const name = STATES.HOME;
    const sceneNav = '[data-navigation]';

    const getSceneNav = () => document.querySelectorAll(sceneNav);

    const enter = ((prev_state, data) => {
        console.log("[HomeState] enter() called with previous state:", prev_state, "and data:", data);

        previous_state = prev_state;

        // 1. Show the home screen
        SceneManager.show(name);

        // 2. Register event listeners
        if (!listener_bound) {
            document.addEventListener("click", handleClickEvent);
            document.addEventListener("keydown", handleKeydownEvent);
            listener_bound = true;
        }

        // show all nav elements that are hidden
        getSceneNav().forEach(i => {
            i.hidden = false;
        });

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

        // Update the URL with the current state
        history.pushState(data, '', `?state=${name.toUpperCase()}`);
    });

    const exit = (() => {
        // 1. Deregister event listeners
        if (listener_bound) {
            document.removeEventListener("click", handleClickEvent);
            document.removeEventListener("keydown", handleKeydownEvent);
            listener_bound = false;
        }
    });

    function handleClickEvent (event) {
        console.log("Event details:", event);
        const clickable = event.target.closest(".clickable");
        if (!clickable) return console.log("[HomeState] Click event ignored - not a clickable element.");
        event.preventDefault();
        console.log("[HomeState] Clickable clicked:", clickable.id);
        const targetState = clickable.dataset.targetState;
        if (targetState) {
            StateMachine.transition_to_state_by_name(targetState);
        } else {
            console.warn("[HomeState] No target state defined for this clickable:", clickable.id);
        }
    }

    // will implement keyboard nav later
    function handleKeydownEvent (event) {
        console.log("Keydown event detected:", event);
        const key = event.key.toLowerCase();
        const clickables = document.querySelectorAll(".clickable");
        if (keyboard_navigation) {
            
        }
        if (key === "escape") {
            console.log("[HomeState] Escape key pressed...");
            // Handle escape key press (e.g., close a modal or go back)
        } else {
            console.log(`[HomeState] Key pressed: ${key}`);
        }
    }

    return {
        name: name,
        enter: enter,
        exit: exit
    }
})();

export default HomeState;