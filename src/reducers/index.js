import { combineReducers } from 'redux';
import { theme } from './UiReducer';
import { name } from './UiReducer';
import { dot } from './UiReducer';
import { background } from './UiReducer';
import { language } from './UiReducer';
import { sideDrawerOpen } from './UiReducer';
import { education } from './ResumeReducer';
import { intership } from './ResumeReducer';
import { volonteering } from './ResumeReducer';
import { skills } from './ResumeReducer';
import { interests } from './ResumeReducer';
import { tehnicalSkills } from './ResumeReducer';
import { socialSkills } from './ResumeReducer';
import { music } from './ProjectReducer';
import { youtube } from './ProjectReducer';
import { news } from './ProjectReducer';
import { picture } from './ProjectReducer';
import { notes } from './ProjectReducer';
import { yelp } from './ProjectReducer';
import { walter } from './ProjectReducer';

export default combineReducers ({
    theme,
    name,
    education,
    intership,
    volonteering,
    skills,
    interests,
    tehnicalSkills,
    socialSkills,
    music,
    youtube,
    news,
    picture,
    notes,
    dot,
    background,
    language,
    sideDrawerOpen,
    yelp,
    walter
})