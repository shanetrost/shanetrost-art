import { defineRailway, github, project, service } from "railway/iac";

// Migrated from railway.toml (Config as Code stops working 2026-12-01).
// This repository manages only its own service. Every railway.toml setting is
// carried over explicitly; `railway config migrate` left builder/restart policy as comments.
// See https://docs.railway.com/infrastructure-as-code#multi-repo-projects
export const partial = "shanetrost-art";

export default defineRailway(() => {
  const svc = service("shanetrost-art", {
    source: github("shanetrost/shanetrost-art", { branch: "main", checkSuites: false }),
    build: {
      builder: "DOCKERFILE",
    },
    deploy: {
      healthcheckPath: "/",
      healthcheckTimeout: 30,
      restartPolicyType: "ON_FAILURE",
    },
  });
  return project("shanetrost.art", {
    resources: [svc],
  });
});
