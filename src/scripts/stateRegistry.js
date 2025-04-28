// stateRegistry.js

import StartState from './StartState.js';
import ResumeState from './ResumeState.js';
import HomeState from './HomeState.js';
import ContactState from './ContactState.js';
import ProjectsState from './ProjectsState.js';
import AboutState from './AboutState.js';

const stateRegistry = {
    'start': StartState,
    'resume': ResumeState,
    'home': HomeState,
    'contact': ContactState,
    'projects': ProjectsState,
    'about': AboutState,
};

export default stateRegistry;