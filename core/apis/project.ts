import { request } from "./index";
import {
  ProjectAllRes,
  ProjectDetailParams,
  ProjectDetailRes,
} from "@core/interface/project";

export const projectApis = {
  getProjects: () =>
    request<ProjectAllRes>({ url: "/project/all", method: "GET" }),

  getProject: (params: ProjectDetailParams) =>
    request<ProjectDetailRes>({ url: `/project/${params.id}`, method: "GET" }),
};
