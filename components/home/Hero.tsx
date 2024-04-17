import React from "react";
import { Animation } from "./Animation";
import { useRouter } from "next/router";

export function Hero() {
  const router = useRouter();

  const handleClickProject = () => {
    router.push("/projects");
  };
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          문제 해결을 좋아하는
          <br />
          3년차 프론트엔드 개발자{" "}
          <span className="text-orange-400 dark:text-yellow-400 font-bold">
            이정주
          </span>{" "}
          입니다.
        </h1>
        <p className="mb-1 leading-relaxed">
          개발을 통해 일상속 불편함을 풀어낼 수 있도록 노력하고 있습니다.
        </p>
        <p className="mb-1 leading-relaxed">
          “오히려 좋아” 마인드로 항상 긍정적으로 문제 상황에 임합니다.
        </p>
        <p className="mb-8 leading-relaxed">
          좋은 서비스는 단순 코드 몇줄로 완성되는것이 아니라 비즈니스적인
          이해도를 기반으로 협업과 소통을 통해 완전해진다고 생각합니다. 때문에
          항상 능동적인 커뮤니케이터의 자세로 서비스발전 기여에 노력합니다.
        </p>
        <div className="flex justify-center">
          <button className="btn-project" onClick={() => handleClickProject()}>
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </div>
  );
}
