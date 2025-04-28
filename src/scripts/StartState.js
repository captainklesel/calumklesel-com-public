// StartState.js

import SceneManager from "./SceneManager";
import StateMachine from "./StateMachine";
import { STATES } from "../consts";

const StartState = (() => {
    let previous_state = null;
    let listener_bound = false;
    const name = STATES.START;

    const enter = ((prev_state, data) => {
        previous_state = prev_state;

        // 1. show start screen
        SceneManager.show(STATES.START);

        // 2. register event listeners for user input (click, tap, or any key press event)
        if (!listener_bound) {
            document.addEventListener("click", handleInputEvent);
            document.addEventListener("keydown", handleInputEvent);
            listener_bound = true;
            console.log("[StartState] Event listeners registered for input events.");
        }

        history.pushState(data, '', `?state=${name.toUpperCase()}`);
    });

    const exit = (() => {
        if (listener_bound) {
            document.removeEventListener("click", handleInputEvent);
            document.removeEventListener("keydown", handleInputEvent);
            console.log("[StartState] Event listeners deregistered for input events.");
        }
        console.log("Exiting StartState...");
        return;
    });

    function handleInputEvent () {
        console.log("Input event detected, transitioning to home state...");
        // Animate the hero-image using its id (start-scene-hero-image)
        const heroImage = document.getElementById("start-scene-hero-image");
        if (heroImage) {
            heroImage.classList.add("animate-hero-image");
            console.log("[StartState] Hero image animation class added.");
        } else {
            console.warn("[StartState] Hero image not found, cannot animate.");
        }
        // Transition to the next state, which is the home state
        StateMachine.transition_to_state_by_name(STATES.HOME);
    }

    return {
        name: name,
        enter: enter,
        exit: exit
    }
})();



export default StartState;