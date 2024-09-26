// Description: This is the main file that will be executed when the action runs.

import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from "octokit";

try {
const octokit = new Octokit({
    auth: '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',
});

// Declare the owner and repo variables
const owner = core.getInput('owner');
console.log(`Hello ${owner}`);
const repo = core.getInput('repo');
console.log(`Hello ${repo}`);
const payload = JSON.stringify(github.context.payload, undefined, 2)
console.log(`Payload: ${payload}`)

// Customize your dispatch action
const dispatchResponse = await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
    owner: owner,
    repo: repo,
    event_type: 'deploy', 
    client_payload: {
    // Define any additional payload data if needed
    key: 'value',
    },
});

console.log('Repository dispatch action successful:', dispatchResponse.data);
} catch (error) {
console.error('Error dispatching repository action:', error);
process.exit(1);
}

run();


