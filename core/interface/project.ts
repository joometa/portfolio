import type { ExtendedRecordMap } from "notion-types";

export interface ProjectItem {
  id: string;
  cover_img: string;
  desc: string;
  github: string;
  no: number;
  team: { name: string; color: string };
  tech: any[];
  title: string;
  work_period: { start: string; end: string };
  url?: string;
}

export interface ProjectAllRes {
  message: string;
  result?: ProjectItem[];
}

export interface ProjectDetailRes {
  message: string;
  result?: ExtendedRecordMap;
}

export interface ProjectDetailParams {
  id?: string;
}
