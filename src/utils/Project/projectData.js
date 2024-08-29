import { images } from "./loadImages";

const ProjectData = [
    { 
        "id": 1, 
        "projectWeb": images['veganingWeb'],   // "/project" 주소에 나오는 웹버전 이미지
        "projectMobile": images['project2'],    // "/project" 주소에 나오는 모바일버전 이미지
        "projectDetailWeb": images['veganingDetailWeb'],   // "project/1" 주소에 나오는 웹버전 이미지
        "projectDetailMobile": images['projectDetail2'],    // "project/1" 주소에 나오는 모바일버전 이미지
        "title": "비거닝",   // 서비스명
        "explain": "비건의 진입장벽을 낮추고 보다 쉬운 비건 라이프스타일을 즐길 수 있도록 도와주는 서비스", // 서비스 설명
        "people": [ // 참여 인원
            {
                "id": 1,
                "part": "디자인",
                "name": [
                    "임채현"
                ]
            },
            {
                "id": 2,
                "part": "iOS",
                "name": [
                    "김민솔"
                ]
            },
            {
                "id": 3,
                "part": "서버",
                "name": [
                    "송진우",
                    "공수민"
                ]
            }
        ],
        "feel": [   // 소감
            {
                "id": 1,
                "nickname": "에리얼",
                "name": "임채현",
                "part": "DESIGN",
                "explain": "비건을 본인만의 라이프스타일로 만들고 싶은 MZ세대이 주요 타겟임을 고려하여, UI 디자인을 세련되고 트렌디하게 함으로써 더욱 비건을 시도해볼 수 있도록 디자인하였습니다. 자신만의 비건 레시피를 공유하고 만들어 볼 수 있어, 더욱 감성적으로 접근했습니다. 좋은 팀원분들을 만나, 디자인 화면들을 실제로 구현해볼 수 있어 뜻깊은 활동이였습니다."
            },
            {
                "id": 2,
                "nickname": "라이덜",
                "name": "송민우",
                "part": "NODE.JS",
                "explain": "node.js(서버)파트원으로 어플리케이션 서비스를 위한 데이터베이스 설계, 구축과 API설계 및 서버기능을 구현하였습니다. 이번 프로젝트는 처음으로 참여한 팀 프로젝트였고 때문에 팀원들과 함께 어플리케이션을 기획하고 개발, 출시하는 과정을 경험할 수 있었습니다. 처음엔 node.js를 사용한 서버개발이 처음이었기 때문에 어려움이 있었지만, 프로젝트를 진행하며 백엔드 개발의 기본적인 개념과 원리를 익힐 수 있었습니다. 데이터베이스의 설계, 구축, 연동, API 개발, 서버 기능 구현 등 다양한 영역에서 많은 것을 배웠습니다. \n\n또한 팀원들과의 협업을 통해 문제를 해결해 나가는 과정에서 커뮤니케이션의 중요성을 실감하게 되었습니다. 각자의 생각과 아이디어를 공유하고 조율하면서 프로젝트를 성공적으로 마칠 수 있었고, 이는 앞으로의 개발자로서의 진로로 나아가는데 큰 도움이 될 것이라고 확신합니다."
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