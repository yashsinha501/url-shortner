const express = require('express');
const urlRouter = express.Router();

const {
    isAuthenticated,
    checkPremimumExpiry,
    premiumMember
} = require('../middleware/auth.middleware');

const {
    anony_short,
    login_short,
    getMyUrls,
    viewUrl,
    deleteUrl,
    editUrl,
    groupUrl,
    getAllGroups,
    getGroupById,
    deleteGroup,
    updateUrlStatus
} = require('../controllers/url.controller');

urlRouter.route('/anony-short').post(anony_short);
urlRouter.route('/login-short').post(isAuthenticated, checkPremimumExpiry, login_short);
urlRouter.route('/my-urls').get(isAuthenticated, getMyUrls);
urlRouter.route('/view/:hash').get(isAuthenticated, viewUrl);
urlRouter.route('/delete/:hash').delete(isAuthenticated, deleteUrl);
urlRouter.route('/edit/:hash').put(isAuthenticated, editUrl);
urlRouter.route('/group').post(isAuthenticated, premiumMember, groupUrl);
urlRouter.route('/group/all').get(isAuthenticated, premiumMember, getAllGroups);
urlRouter.route('/group/:id').get(isAuthenticated, premiumMember, getGroupById);
urlRouter.route('/group/delete/:id').delete(isAuthenticated, premiumMember, deleteGroup);
urlRouter.route('/update-status/:hash').patch(isAuthenticated, updateUrlStatus);

module.exports = urlRouter;