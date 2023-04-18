import React from "react";
import { EduCard } from "@components/education";
import styled from "@emotion/styled";

export default function Education() {
  return (
    <Container className="text-gray-600 body-font overflow-hidden bg-slate-50 dark:bg-slate-600/20">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <EduCard
            title={
              <>프로그래머스 Node.js 백엔드 개발 스터디(feat. Typescript)</>
            }
            period="22.08 ~ 22.09"
          >
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              프로그래머스 스쿨 주관
            </h2>
            <p className="leading-relaxed">
              next.js 기반의 토이프로젝트를 활용한 5주간의 Node.js
              스터디(6기수료)
            </p>
          </EduCard>

          <EduCard
            title={<>프로그래머스 자바스크립트 스터디(feat.VanillaJS)</>}
            period="21.10 ~ 21.11"
          >
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              프로그래머스 스쿨 주관
            </h2>
            <p className="leading-relaxed text-gray-900">
              바닐라 스크립트를 활용한 5주간의 자바스크립트 스터디(12기 수료)
            </p>
          </EduCard>

          <EduCard title={<>항해99 1기</>} period="21.03.01 ~ 21.06.04">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              스파르타코딩클럽에서 진행한 온라인 부트캠프{" "}
            </h2>
            <p className="leading-relaxed text-gray-900">
              Frontend - React 주특기 교육(99일){" "}
            </p>
            <div className="mt-4 mb-4">
              <h6 className="mb-3 text-gray-900">팀 프로젝트 경험 (4회)</h6>
              <p className="ms-4">- Sleepwell(수면시간관리웹서비스)</p>
              <p className="ms-4">- HobbyGram(취미공유웹서비스)</p>
              <p className="ms-4">- Velog 클론코딩</p>
              <p className="ms-4">- 팝콘극장(영화 순위 정보제공 서비스)</p>
            </div>
            <p className="leading-relaxed text-gray-900">
              실제 사용자들 피드백 수렴 및 반영 경험
            </p>
          </EduCard>

          <EduCard
            title={<>강원대학교 빅데이터 창업인재양성교육과정 수료</>}
            period="20.08.17 ~ 20.12"
          >
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              강원대학교 주최 빅데이터 인재 양성 교육 과정
            </h2>
            <p className="leading-relaxed text-gray-900">
              Python 위주의 데이터 관련 기초교육(2개월)
            </p>
            <p className="leading-relaxed text-gray-900">
              창업 관련 교육 및 실습(2개월)
            </p>
          </EduCard>

          <EduCard
            title={
              <>
                Preparing for Google Cloud Certification: Cloud Engineer :
                Coursera 수료
              </>
            }
            period="20.07.06 ~ 20.08.03"
          >
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              2020 7월 ACE 스터디 잼
            </h2>
            <p className="leading-relaxed text-gray-900">
              Coursera 강좌 수료(ACE 자격증 관련 기초개념)
            </p>
            <a
              className="text-indigo-500 inline-flex items-center mt-4"
              href="https://www.coursera.org/account/accomplishments/professional-cert/JWUS5PD28WKH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
            >
              Certificate
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
            </a>
          </EduCard>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  max-width: 1000px;
  margin: auto;
  border-radius: 30px;
  margin-top: 30px;
  padding: 20px;
  padding-top: 0;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    max-width: 85vw;
    width: 100%;
    margin-right: auto;
  }
`;
