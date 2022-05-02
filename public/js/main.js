import clickEffect from './_click-effect';
import sliderSettings from './_slider-settings';
import validateForm from './_validate-form';
import devTool from './_dev-tools';
import customSelect from './_custom-select';
import maskPhone from './_mask-phone';
import previewImg from './_preview-img';
import nav from './_nav';
import avatarUpdate from './_avatar-update';
import postFetch from "./_post-fetch";
import founderFetch from './_founder-fetch';
import Modals from "./_modals";
import admin from "./_admin";
import freelancerUpdate from "./_freelancer-update";
import boardUpdate from "./_board-update";
import sponsorPost from './_sponsor-post';

document.addEventListener('DOMContentLoaded', () => {
    clickEffect()
    sliderSettings()
    validateForm()
    customSelect()
    maskPhone()
    nav()
    previewImg('#modal', '.modal__preview')
    avatarUpdate()
    postFetch()
    founderFetch()
    Modals()
    admin()
    freelancerUpdate()
    boardUpdate()
    sponsorPost()
})