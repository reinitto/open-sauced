// This file is temporary and meant to be a workaround for GitHub App limitations
// https://github.com/open-sauced/open-sauced/pull/699#issuecomment-649126860
//
const url = "https://serve.onegraph.com/graphql?app_id=06238984-0a96-4774-95ad-d7b654c980c5";

// variables are generically labelled for easy updating.
const doc_id1 = "71c81bed-a12c-4423-aa0f-eecf44968e73";
const doc_id2 = "ed0abd8a-3ff3-46ce-bd1f-04f94af25d12";
const doc_id3 = "c8c187a1-853f-446b-b3fa-b4876447c954";
const doc_id4 = "8ecd5737-ebba-4807-a20b-4155272500bf";
const doc_id5 = "89a3dc22-4355-494e-9d6f-a29c21e065e0";

async function persistedRepoDataFetch(owner, repo) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id1, variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedGoalFetch(number) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id2, variables: {number: number}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedInteractionsFetch(owner, repo) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id3, variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesFetch(owner, repo) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id4, variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedDeploymentFetch() {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id5}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

export {
  persistedDeploymentFetch,
  persistedIssuesFetch,
  persistedInteractionsFetch,
  persistedGoalFetch,
  persistedRepoDataFetch,
};
