// StateMachine.js

import stateRegistry from './stateRegistry.js';
import { STATES } from '../consts.js';

const StateMachine = (() => {
    let current_state = null;
    
    // Initialize the StateMachine by setting current_state to StartState 
    const init = ((start_state = 'START') => {
        console.log(`[StateMachine] Initializing with start state: ${start_state}`);
        current_state = stateRegistry[STATES[start_state]];
        if (!current_state) {
            current_state = stateRegistry[STATES.START];
        }
        current_state.enter(null);
    });

    // Transition to the next state. Expects a reference to the target_state and an object for data to pass to the state.
    const transition_to_next_state = ((target_state, data = {}) => {
        
        // if the target state is not in the stateRegistry, log a warning and return
        if (!target_state) {
            return console.warn(`[StateMachine] Error with state '${target_state}'`);
        }
        current_state.exit();
        target_state.enter(current_state.name, data); 
        current_state = target_state;
        console.log(`[StateMachine] Transitioned to state: ${target_state.name}`);
    });

    // Transitions to the next state using the name from the registry rather than reference to the state
    const transition_to_state_by_name = (name, data = {}) => {
        console.log(`[StateMachine] Transitioning to state by name: ${name}`);
        if (!name || typeof name !== 'string') return console.warn(`[StateMachine] Invalid state name '${name}'`);
        if (!stateRegistry) return console.warn(`[StateMachine] State registry is not defined`);
        const target_state = stateRegistry[name];
        if (!target_state) return console.warn(`[StateMachine] Unknown state '${name}'`);
        transition_to_next_state(target_state, data);
    };

    // Update function for when/if we implement a game loop
    const update = ((delta) => {
        if (current_state && current_state?.update) {
            current_state.update(delta);
        }
    });

    const get_current_state = () => current_state;

    return {
        init: init,
        transition_to_state_by_name: transition_to_state_by_name,
        update: update,
        get_current_state: get_current_state,
    }
})();

export default StateMachine;