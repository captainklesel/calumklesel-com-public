// main.js

import StateMachine from './StateMachine.js';
import { STATES } from '../consts.js';

// 🚀 Boot Sequence
window.addEventListener('DOMContentLoaded', () => {
  console.log('[Bootstrap] DOM ready. Initializing...');

  const urlParams = new URLSearchParams(window.location.search);
  const initialStateName = urlParams.get('state') || STATES.HOME;

  StateMachine.init(initialStateName.toUpperCase());
  console.log(`[Bootstrap] State machine initialized with state: ${initialStateName}`);

  console.log('[Bootstrap] Initialization complete.');
});

function handlePopState() {
  const params = new URLSearchParams(location.search);
  const stateName = (params.get('state') || STATES.HOME).toLowerCase();

  // Build optional data (e.g., project index)
  const data = {};
  if (stateName === STATES.PROJECTS) {
    const idx = Number(params.get('index'));
    if (Number.isFinite(idx)) data.index = idx;
  }

  // Skip if already on that state
  if (StateMachine.get_current_state()?.name !== stateName || stateName === STATES.PROJECTS) {
    StateMachine.transition_to_state_by_name(stateName, data);
  }
}

window.addEventListener('popstate', handlePopState);