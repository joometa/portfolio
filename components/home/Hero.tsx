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
          3년차 프론트엔드 개발자로서 스타트업에서 웹서비스를
          개발/배포/운영하였습니다.
        </p>
        <p className="mb-1 leading-relaxed">
          문제 해결은 문제를 어떻게 추상화하여 정의하느냐로 결정된다고
          생각합니다. 해결책을 고민하기 전에 문제를 제대로 정의하고자 합니다.
        </p>
        <p className="mb-8 leading-relaxed">
          몇달 뒤 다시 보았을때 쉽게 이해하고 작업 할 수 있도록 심플하고
          가독성높은 코드를 작성을 추구합니다. 이는 유지보수나 작업의 효율을
          높일 수 있는 직접적인 방법이라고 생각하기 때문입니다.
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
