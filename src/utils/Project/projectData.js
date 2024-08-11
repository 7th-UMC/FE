import { images } from "./loadImages";

const ProjectData = [
    { 
        "id": 1, 
        "projectWeb": images['project1'],   // "/project" 주소에 나오는 웹버전 이미지
        "projectMobile": images['project2'],    // "/project" 주소에 나오는 모바일버전 이미지
        "projectDetailWeb": images['projectDetail1'],   // "project/1" 주소에 나오는 웹버전 이미지
        "projectDetailMobile": images['projectDetail2'],    // "project/1" 주소에 나오는 모바일버전 이미지
        "title": "서비스명1",   // 서비스명
        "explain": "서비스1의 설명입니다.", // 서비스 설명
        "people": [ // 참여 인원
            {
                "id": 1,
                "part": "기획",
                "name": [
                    "윤길동"
                ]
            },
            {
                "id": 2,
                "part": "디자인",
                "name": [
                    "임길동"
                ]
            },
            {
                "id": 3,
                "part": "안드로이드",
                "name": [
                    "홍길동",
                    "김길동",
                    "박길동"
                ]
            },
            {
                "id": 4,
                "part": "서버",
                "name": [
                    "이길동",
                    "양길동",
                    "강길동"
                ]
            }
        ],
        "feel": [   // 소감
            {
                "id": 1,
                "nickname": "에리얼",
                "name": "임채현",
                "part": "DESIGN",
                "explain": "실제 상용화된다고 생각하고 디자인 작업을 진행하였습니다. 기획자와 개발자와 협업하여, 더욱 사용자에게 편리한 접근성이 무엇인지 진지하게 고민해보는 시간이 되었습니다. 또한 서비스의 컨셉과 무드를 고민하여, 이미지 제작을 했던 시간이 가장 기억에 남았고, 이러한 점이 더욱 차별화된 서비스를 만든다는 것을 알게 되었습니다."
            },
            {
                "id": 2,
                "nickname": "이즈",
                "name": "양인서",
                "part": "WEB",
                "explain": "웹 파트 짱~"
            },
            {
                "id": 3,
                "nickname": "사이다",
                "name": "강다현",
                "part": "SERVER",
                "explain": "서버 파트 재밌네요."
            },
            {
                "id": 4,
                "nickname": "체리",
                "name": "김다현",
                "part": "WEB",
                "explain": "다음 기수도 웹 할래요~"
            }
        ]
    },
    { 
        "id": 2, 
        "projectWeb": images['project1'],
        "projectMobile": images['project2'],
        "projectDetailWeb": images['projectDetail1'],
        "projectDetailMobile": images['projectDetail2'],
        "title": "서비스명2",
        "explain": "서비스2의 설명입니다.",
        "people": [
            {
                "id": 1,
                "part": "기획",
                "name": [
                    "윤길동"
                ]
            },
            {
                "id": 2,
                "part": "디자인",
                "name": [
                    "임길동"
                ]
            },
            {
                "id": 3,
                "part": "웹",
                "name": [
                    "홍길동",
                    "김길동"
                ]
            },
            {
                "id": 4,
                "part": "서버",
                "name": [
                    "이길동"
                ]
            }
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "에리얼",
                "name": "임채현",
                "part": "DESIGN",
                "explain": "실제 상용화된다고 생각하고 디자인 작업을 진행하였습니다. 기획자와 개발자와 협업하여, 더욱 사용자에게 편리한 접근성이 무엇인지 진지하게 고민해보는 시간이 되었습니다. 또한 서비스의 컨셉과 무드를 고민하여, 이미지 제작을 했던 시간이 가장 기억에 남았고, 이러한 점이 더욱 차별화된 서비스를 만든다는 것을 알게 되었습니다."
            },
            {
                "id": 2,
                "nickname": "이즈",
                "name": "양인서",
                "part": "WEB",
                "explain": "웹 파트 짱~"
            },
            {
                "id": 3,
                "nickname": "사이다",
                "name": "강다현",
                "part": "SERVER",
                "explain": "서버 파트 재밌네요."
            }
        ]
    },
    { 
        "id": 3, 
        "projectWeb": images['project1'],
        "projectMobile": images['project2'],
        "projectDetailWeb": images['projectDetail1'],
        "projectDetailMobile": images['projectDetail2'],
        "title": "서비스명3",
        "explain": "서비스3의 설명입니다.",
        "people": [
            {
                "id": 1,
                "part": "기획",
                "name": [
                    "윤길동"
                ]
            },
            {
                "id": 2,
                "part": "디자인",
                "name": [
                    "임길동"
                ]
            },
            {
                "id": 3,
                "part": "iOS",
                "name": [
                    "홍길동",
                    "김길동"
                ]
            },
            {
                "id": 4,
                "part": "서버",
                "name": [
                    "양길동",
                    "강길동"
                ]
            }
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "사이다",
                "name": "강다현",
                "part": "SERVER",
                "explain": "서버 파트에서 많은 걸 배워갑니다."
            },
            {
                "id": 2,
                "nickname": "핸",
                "name": "윤혜성",
                "part": "WEB",
                "explain": "다음 기수엔 웹 스터디장 할래요~"
            }
        ]
    },
]

export default ProjectData;