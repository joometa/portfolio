import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { ProjectItem } from "@core/interface/project";
import { Badge } from "@components/common";
import { useRouter } from "next/router";

interface Props {
  data: ProjectItem;
}

export function Item({ data }: Props) {
  const router = useRouter();

  const handleClickLearnMore = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const handleClickGithub = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <Container className="project-card">
        <div className="title-area">
          {data.title}
          <div className="sub-info">
            {`[ ${data.work_period.start} - ${
              data.work_period.end ?? "current"
            } ]`}
          </div>
        </div>
        <div className="content-area">
          <div className="image-area">
            <div className="image-wrap">
              {data.cover_img && (
                <Image
                  className="rounded-xl"
                  src={data.cover_img}
                  alt="cover image"
                  loading="lazy"
                  fill
                />
              )}
            </div>
          </div>
          <div className="info-area">
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
              {data.team.name}
            </h2>
            <div className="desc">
              <div className="caption">설명</div>
              <div className="content">{data.desc}</div>
            </div>
            <div className="tech">
              <div className="caption">주요 기술</div>
              <div className="tech-list">
                {data.tech &&
                  data.tech.map((t: any) => (
                    <React.Fragment key={t.name}>
                      <Badge>{t.name}</Badge>
                    </React.Fragment>
                  ))}
              </div>
            </div>
            {data.url && (
              <div className="deploy-url">
                <div className="url-caption">URL</div>
                <div className="url">{data.url}</div>
              </div>
            )}
            <div className="button-box">
              <button
                className="github"
                onClick={() => handleClickGithub(data.github)}
              >
                Github
              </button>

              <button className="more">
                <div
                  className="flex justify-center items-center"
                  onClick={() => handleClickLearnMore(data.id)}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  border: 2px solid rgba(229, 231, 235, 0.6);
  margin-top: 50px;
  transition: transform 0.2s ease-out, box-shadow 0.5s ease-out;

  :hover {
    transform: scale(1.02);
  }

  .title-area {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    font-size: 1.2rem;
    font-weight: 600;

    .sub-info {
      font-size: 0.8rem;
      color: gray;
      font-weight: 400;

      .project-type {
      }
    }
  }

  .content-area {
    width: 100%;
    height: 100%;
    display: flex;

    .image-area {
      padding: 20px;
      width: 50%;

      .image-wrap {
        width: 100%;
        height: 300px;
        position: relative;
      }
    }

    .info-area {
      padding: 20px;
      width: 50%;
      position: relative;

      .caption {
        font-weight: 500;
        width: 100%;
        padding-bottom: 10px;
      }

      .tech {
        height: auto;
        margin-top: 10px;

        .tech-list {
          display: flex;
          width: 100%;
          padding-bottom: 10px;
        }
      }

      .deploy-url {
        display: flex;
        margin-top: 10px;

        .url-caption {
          align-content: center;
          width: 100px;
          align-items: center;
          display: flex;
        }
        .url {
          margin: auto;
          justify-content: flex-start;
          width: 100%;
          cursor: pointer;
          transition: transform 0.2s ease-out;
          :hover {
            transform: scale(1.02);
          }
        }
      }

      .button-box {
        display: flex;
        width: 100%;
        margin-top: 10px;
        padding: 20px;
        font-size: 0.9rem;
        position: absolute;
        bottom: 0;
        left: 0;

        .github {
          width: 50%;
          background: #000;
          color: #fff;
          padding: 7px;
          border-radius: 10px;
          margin: 0 5px;
        }

        .more {
          width: 50%;
          border-radius: 10px;
          border: 1.5px solid rgba(229, 231, 235);
          margin: 0 5px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    max-width: 85vw;

    .content-area {
      width: 100%;
      height: 100%;
      flex-direction: column;

      .image-area {
        width: 100%;
      }

      .info-area {
        width: 100%;
        height: 100%;
        position: relative;
        flex-direction: column;
        display: flex;
      }

      .deploy-url {
        padding: 10px;
      }

      .button-box {
        position: relative !important;
        padding: 15px 0px !important;
        margin: 0;
      }
    }
  }
`;
