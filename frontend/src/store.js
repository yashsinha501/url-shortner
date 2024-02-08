import {configureStore} from '@reduxjs/toolkit';

import {
    userReducer,
    loginUserReducer,
    urlsLimitReducer
} from './Reducers/User.reducer';

import {
    urlReducer,
    createUrlReducer,
    viewUrlReducer,
    deleteUrlReducer,
    editUrlReducer
} from './Reducers/Url.reducer';

import {
    analyticsReducer,
    clicksReducer,
    urlAnalyticsReducer,
    urlReportReducer
} from './Reducers/Analytics.reducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        urls: urlReducer,
        createUrl: createUrlReducer,
        url: viewUrlReducer,
        analytics: analyticsReducer,
        clicks: clicksReducer,
        deleteUrl: deleteUrlReducer,
        urlAnalytics: urlAnalyticsReducer,
        loginUser: loginUserReducer,
        updatedUrl: editUrlReducer,
        urlsLimit: urlsLimitReducer,
        reportUrl: urlReportReducer
    }
});

export default store;