import { projectApis } from "@/core/apis/project";
import { ProjectDetailParams } from "@core/interface/project";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryKey = {
  getAll: () => ["all-project"] as const,
  getProject: () => ["project"] as const,
};

export const useGetAllProjectQuery = () => {
  return useQuery(queryKey.getAll(), () => projectApis.getProjects());
};

export const useGetProjectQuery = (params: ProjectDetailParams) => {
  return useQuery(queryKey.getProject(), () => projectApis.getProject(params));
};
