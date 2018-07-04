"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("../shared/configuration");
const state = {
    jira: undefined,
    context: undefined,
    channel: undefined,
    statusBar: undefined,
    statuses: [],
    projects: []
};
exports.default = state;
exports.canExecuteJiraAPI = () => {
    return state.jira && configuration_1.configIsCorrect();
};
//# sourceMappingURL=state.js.map