// ProjectsState.js

import SceneManager from "./SceneManager";
import { STATES } from "../consts";
import StateMachine from "./StateMachine";
import { copy } from "../content/copy.js";
import { setImgWithFallback } from "./utils/setImgWithFallback";

const ProjectsState = (() => {
    const name = STATES.PROJECTS;
    let previous_state = null;
    let listener_bound = false;
    let current_index = 0;
    const projects = copy[name];

    const enter = ((prev_state, data) => {
        console.log("[ProjectsState] enter() called with previous state:", prev_state, "and data:", data);
        previous_state = prev_state;

        // 1. Show the projects screen
        SceneManager.show(name);

        // Show the project navigation
        const projectNav = document.querySelector(`#scene-${name} .project-nav`);
        if (projectNav) {
            console.log("[ProjectsState] Project navigation found in the DOM.");
            projectNav.classList.remove('hidden');
            projectNav.classList.add('flex-center');
            console.log("[ProjectsState] Project navigation shown.");
        } else {
            console.warn("[ProjectsState] Project navigation not found in the DOM.");
        }

        // 2. Register event listeners
        if (!listener_bound) {
            document.addEventListener("click", handleClickEvent);
            document.querySelector(`#scene-${name} #proj-prev`)?.addEventListener('click', onPrev);
            document.querySelector(`#scene-${name} #proj-next`)?.addEventListener('click', onNext);
            listener_bound = true;
            console.log("[ProjectsState] Event listeners registered.");
        }

        // Determine project index
        const urlIndex = Number(new URLSearchParams(location.search).get('index'));
        current_index = Number.isFinite(urlIndex) ? urlIndex : (data.index ?? 0);

        // Update card content
        build_overlay(current_index);

        history.pushState(data, '', `?state=${name.toUpperCase()}&index=${current_index}`);

    });

    const exit = (() => {
        console.log("[ProjectsState] exit() called.");
        if (listener_bound) {
            document.removeEventListener("click", handleClickEvent);
            document.querySelector('#proj-prev')?.removeEventListener('click', onPrev);
            document.querySelector('#proj-next')?.removeEventListener('click', onNext);
            listener_bound = false;
        }
    });

    function build_overlay(index) {
        const overlay_img = document.querySelector(`#scene-${name} #overlay-img`);
        const overlay_title = document.querySelector(`#scene-${name} #overlay-title`);
        const overlay_body = document.querySelector(`#scene-${name} #overlay-body`);
        if (overlay_img) {
            setImgWithFallback(overlay_img, copy[name][index].imgSrc, copy[name][index].imgAlt);
        }
        if (overlay_title) {
            overlay_title.textContent = copy[name][index].title;
        }
        if (overlay_body) {
            overlay_body.innerHTML = copy[name][index].body;
        }
    }
    
    function handleClickEvent (event) {
        const clickable = event.target.closest(".clickable");
        if (!clickable) return console.log("[ProjectsState] Click event ignored - not a clickable element.");
        event.preventDefault();
        console.log("[ProjectsState] Clickable clicked:", clickable.id);
        const targetState = clickable.dataset.targetState;
        if (targetState) {
            console.log(`[ProjectsState] Clickable clicked, transitioning to target state: ${targetState}`);
            StateMachine.transition_to_state_by_name(targetState);
        } else {
            console.warn("[ProjectsState] No target state defined for this clickable:", clickable.id);
        }
    }

    function onPrev() {
        navigate(-1);
    }

    function onNext() {
        navigate(1);
    }

    function navigate(step) {
        current_index = (current_index + step + projects.length) % projects.length;
        build_overlay(current_index);
        const params = new URLSearchParams(location.search);
        params.set('index', current_index);
        history.pushState({}, '', `${location.pathname}?${params}`);
    }

    function get_current_index() {
        return current_index;
    }

    return {
        name: name,
        enter: enter,
        exit: exit,
        get_current_index: get_current_index,
    }
})();

export default ProjectsState;