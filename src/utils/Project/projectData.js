import { images } from "./loadImages";

const ProjectData = [
    { 
        "id": 1, 
        "projectWeb": images['veganingWeb'],   // "/project" 주소에 나오는 웹버전 이미지
        "projectMobile": images['veganingMobile'],    // "/project" 주소에 나오는 모바일버전 이미지
        "projectDetailWeb": images['veganingDetailWeb'],   // "project/1" 주소에 나오는 웹버전 이미지
        "projectDetailMobile": images['veganingDetailMobile'],    // "project/1" 주소에 나오는 모바일버전 이미지
        "title": "비거닝",   // 서비스명
        "explain": "비건의 진입장벽을 낮추고 보다 쉬운 비건 라이프스타일을 즐길 수 있도록 도와주는 서비스", // 서비스 설명
        "detailExplain": "비건의 진입 장벽을 낮추고자 기획되었으며, 비건의 진입장벽을 보다 쉬운 비건 라이프스타일을 즐길 수 있도록 비건 레시피/식당 정보 및 레시피 공모기능, 개인맞춤 비건 영양 정보 그래프 분석 제공 서비스입니다.", // "project/1" 주소에 나오는 서비스 설명
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
                "explain": "비건을 본인만의 라이프스타일로 만들고 싶은 MZ세대가 주요 타겟임을 고려하여, UI 디자인을 세련되고 트렌디하게 함으로써 더욱 비건을 시도해볼 수 있도록 디자인하였습니다. 자신만의 비건 레시피를 공유하고 만들어 볼 수 있어, 더욱 감성적으로 접근했습니다. 좋은 팀원분들을 만나, 디자인 화면들을 실제로 구현해볼 수 있어 뜻깊은 활동이였습니다."
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
        "projectWeb": images['stepperWeb'],
        "projectMobile": images['stepperMobile'],
        "projectDetailWeb": images['stepperDetailWeb'],
        "projectDetailMobile": images['stepperDetailMobile'],
        "title": "STEPPER",
        "explain": "나만의 재활 루틴으로  한 단계씩 나의 회복을 찾는 서비스", 
        "detailExplain": "딱 맞는 운동 루틴을  만들어 빠르게 회복할 수 있으며, AI를 활용한 통증 부위에 맞는 운동 추천 서비스부터 운동 컨디션 평가까지 만능 재활 맞춤 서비스입니다.",
        "project": "https://github.com/UMC-Stepper/Stepper_FE",
        "people": [
            {
                "id": 1,
                "part": "디자인",
                "name": [
                    "전세원"
                ]
            },
            {
                "id": 2,
                "part": "안드로이드",
                "name": [
                    "박지원",
                    "김성민"
                ]
            },
            {
                "id": 3,
                "part": "서버",
                "name": [
                    "민경빈"
                ]
            },
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "아리",
                "name": "전세원",
                "part": "DESIGN",
                "explain": "프로젝트에서 디자이너 역할을 맡았습니다. 앱디자인은 처음이라 선택과 집중을 하였는데 사용자가 사용하는데 불편함을 느끼지 않도록 집중하며 디자인을 하였습니다. 그래서 사용자가 서비스를 이용하는데 있어서 익숙한 환경이 무엇인지, 시각적으로 불편함이 없는지를 고민하며 디자인하였습니다. 또한PM님이 열심히 완성한 기획을 의도한대로 결과물이 나오는 것에도 집중하였습니다. 프로젝트를 진행하면서 기획자, 개발자와 협업을 할 수 있었던 계기가 되었으며, 그 과정에서 어떻게 소통을 해야할지 배울 수 있었습니다. 그리고 진로를 uiux 디자이너로 갈지 고민하였는데 그 고민을 결정하는 데, 도움이 되었습니다."
            },
            {
                "id": 2,
                "nickname": "루피",
                "name": "박지원",
                "part": "ANDROID",
                "explain": "안드로이드 화면설계 및 api연결, 내부 기능을 담당했습니다. 너무 즐거운 프로젝트였고, 기초를 더 탄탄하게 할수 있었습니다. 무엇보다도 협업 능력을 기를 수 있고, 프로젝트 기간도 여유로워 다양한 기술 스택을 배울 수 있었습니다. 기초를 탄탄하게 다져나가고 싶거나, 처음부터 제대로 배워보고 싶었는데 모두 이룬 것 같아 200퍼센트 만족했습니다!"
            },
            {
                "id": 3,
                "nickname": "미니",
                "name": "김성민",
                "part": "ANDROID",
                "explain": "기간이 아주 길지는 않았지만 좋은 기획과 좋은 팀원들과 프로젝트를 할 수 있어서 정말 좋은 경험이었습니다. 기획도 정말 마음에 들었고 8명이나 되는 팀원 중 전부 다 마음에 드는 좋은 사람들이어서 정말 즐겁게 할 수 있어서 좋았습니다."
            },
            {
                "id": 4,
                "nickname": "빈트",
                "name": "민경빈",
                "part": "SPRINGBOOT",
                "explain": "백 스프링부트 헤더로써 프로젝트를 진행했습니다. 많은 인원과 함께하는 프로젝트 진행이여서 매우 새롭고 재밌었습니다. 팀원분들이 다 잘 따라와주셔서 매우 원활히 진행 할수 있었습니다. 매우 좋은 기회였습니다!"
            }
        ]
    },
    { 
        "id": 3, 
        "projectWeb": images['wesaveWeb'],
        "projectMobile": images['wesaveMobile'],
        "projectDetailWeb": images['wesaveDetailWeb'],
        "projectDetailMobile": images['wesaveDetailMobile'],
        "title": "WE SAVE",
        "explain": "비건의 진입장벽을 낮추고 보다 쉬운 비건 라이프스타일을 즐길 수 있도록 도와주는 서비스", 
        "detailExplain": "우리 주변에 발생하는 사건, 사고들을 직접 제보하고 공유하여 우리 주변의 이웃들을 구하는 서비스입니다.",
        "people": [
            {
                "id": 1,
                "part": "기획",
                "name": [
                    "김지은"
                ]
            },
            {
                "id": 2,
                "part": "안드로이드",
                "name": [
                    "임창수"
                ]
            }
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "지니",
                "name": "김지은",
                "part": "PLAN",
                "explain": "PM으로써 서비스를 기획하고, 프로젝트 과정과 팀원들의 일정 등 전반적인 제작 과정을 총괄하였으며, 간단한 디자인 및 비용 관리, 데모데이 부스 준비 등의 활동을 하였습니다. 처음 해보는 역할이어서 어려운 점이 많았지만 그만큼 배운 것도 많았던 활동이었던 것 같습니다."
            },
            {
                "id": 2,
                "nickname": "칼트",
                "name": "임창수",
                "part": "ANDROID",
                "explain": "ui 구성 및 api연결을 하였습니다. 처음해보는 활동이지만 너무 뜻깊었고 많은 것을 배워갈 수 있는 활동이었다고 생각합니다!!"
            }
        ]
    },
    { 
        "id": 4, 
        "projectWeb": images['seokbakjiWeb'],
        "projectMobile": images['seokbakjiMobile'],
        "projectDetailWeb": images['seokbakjiDetailWeb'],
        "projectDetailMobile": images['seokbakjiDetailMobile'],
        "title": "석박지",
        "project": "https://github.com/SukBakJi/SukBakJi-iOS",
        "explain": "대학원, 대학원생, 졸업생을 모두 아울러 정보를 효과적으로 공유할 수 있는 커뮤니티 및 멘토링 서비스 ", 
        "detailExplain": "대학원 진학 희망자, 대학원생, 졸업생을 모두 아울러 정보를 효과적으로 공유할 수 있는 커뮤니티 및 멘토링 서비스입니다.",
        "people": [
            {
                "id": 1,
                "part": "디자인",
                "name": [
                    "고하늘"
                ]
            },
            {
                "id": 2,
                "part": "iOS",
                "name": [
                    "김경민"
                ]
            },
            {
                "id": 3,
                "part": "서버",
                "name": [
                    "임수진"
                ]
            }
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "미락",
                "name": "고하늘",
                "part": "DESIGN",
                "explain": "전체적인 앱 디자인 및 데모데이 굿즈 디자인을 하였으며, 디자인 완성도가 높게 나와서 만족했습니다!"
            },
            {
                "id": 2,
                "nickname": "하키",
                "name": "김경민",
                "part": "IOS",
                "explain": "대학원 커뮤니티 서비스 석박지에서 게시판 파트와 디렉토리 파트를 맡아 UI/UX 개발 및 여러 버튼의 기능 구현과 백엔드 서버에서 구현된 API들을 프론트 개발과 연동했습니다. 다양한 사람들과 협업을 진행하면서 나눠진 파트에 따라 개발을 해볼 수 있는 좋은 경험이 될 수 있었습니다. 처음 해보는 협업 프로젝트인데, 팀원들 중 누구의 탈주도 없이 끝까지 노력하여 결과물을 발표할 수 있을 때 굉장한 성취감을 느낄 수 있었습니다. 이번 UMC 6기 활동을 하면서 스터디 진행을 위해 스스로 워크북을 채우는 과정에서도 스스로 정보를 수집하고 이해하는 부분에서 한 단계 더 성장할 수 있었습니다. 또한, 어떻게 해야할지 모르는 나로서, 데모데이 프로젝트를 직접 해보고 나니, 자신감도 생기게 되었고 앞으로도 더 많은 프로젝트를 해보고 싶다는 생각이 들었습니다. 단순히 기초 지식과 개념만 가지고 시작해서 ‘과연 내가 프로젝트를 할 수 있을까?’라는 걱정을 많이 했었지만, 직접 해보면서 배우기도 하고 스스로 공부하게 되는 좋은 영향 덕분에 잘 마무리 할 수 있었습니다."
            },
            {
                "id": 3,
                "nickname": "레이첼",
                "name": "임수진",
                "part": "SERVER",
                "explain": "석박지(석사 박사 지원부터 취업정보까지)의 서버 파트로 참여하게 되었는데 이번에 처음 스프링부트를 접하고 하게 된 프로젝트입니다. 아직 부족한데 잘 할 수 있을까 걱정이 많이 됐었는데 좋은 팀원들을 만나서 서로에게 도움이 되기도 하고, 기대했던 결과물을 만들어낼 수 있어서 행복했어요!\n\n저번 기수 iOS 파트에 이어 이번 6기 UMC에도 활동하게 되었는데, 매주 스터디를 통해 역량을 기르면서 공부할 수 있는 시간을 가질 수 있다는 게 좋았어요. 그리고 기획, 디자인, 프론트엔드, 백엔드 다양한 파트가 모여 약 두달간 개발을 진행하여 완성도 있는 프로젝트를 경험해볼 수 있는데요. 데모데이까지 거치게 되면 정말 많이 배우고 성장해있는 모습을 발견하실 수 있을 거예요!"
            }
        ]
    },
    { 
        "id": 5, 
        "projectWeb": images['kiokiWeb'],
        "projectMobile": images['kiokiMobile'],
        "projectDetailWeb": images['kiokiDetailWeb'],
        "projectDetailMobile": images['kiokiDetailMobile'],
        "title": "키오키",
        "explain": "키오스크 이용의 어려움을 해결하기 위해 이용법을 볼 수 있는 서비스", 
        "detailExplain": "키오스크 이용의 어려움을 해결하기 위해 실제 브랜드의 키오스크 화면을 제공하고 언제든지 이용법을 볼 수 있는 서비스입니다.",
        "people": [
            {
                "id": 1,
                "part": "기획",
                "name": [
                    "박세은"
                ]
            },
            {
                "id": 2,
                "part": "안드로이드",
                "name": [
                    "정예빈"
                ]
            },
            {
                "id": 3,
                "part": "서버",
                "name": [
                    "이지연"
                ]
            }
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "센",
                "name": "박세은",
                "part": "PLAN",
                "explain": "서비스 기획 및 디자인 공동작업, 각 팀원의 의견 전달 및 진도 확인 후 일정 계획을 했습니다. 기획자로 처음 참여한 프로젝트, 기획자는 기획만 끝내면 되는 것이 아닌 팀 전체를 이끌어가며 자신이 생각한 방향으로 프로젝트가 잘 진행될 수 있게 조율해야하기 때문에 책임감을 가져야 한다고 느꼈습니다."
            },
            {
                "id": 2,
                "nickname": "비니",
                "name": "정예빈",
                "part": "ANDROID",
                "explain": "안드로이드 파트로 활동하면서 정말 많은 것을 배울 수 있었습니다. 처음에는 안드로이드에 대해 아무것도 몰랐지만, 워크북과 클론코딩을 통해 기본 개념을 다질 수 있었습니다. 세션 때마다 안드로이드 팀원들과 모르는 것을 서로 물어보고 고치는 과정이 큰 도움이 되었습니다. 이러한 경험 덕분에 데모데이 때 안드로이드 프로젝트를 무사히 진행할 수 있었습니다:)"
            }
        ]
    },
    { 
        "id": 6, 
        "projectWeb": images['routeporterWeb'],
        "projectMobile": images['routeporterMobile'],
        "projectDetailWeb": images['routeporterDetailWeb'],
        "projectDetailMobile": images['routeporterDetailMobile'],
        "title": "루트포터",
        "explain": "AI가 추천해주는 맘에 쏙 드는 내 여행지 추천 서비스", 
        "detailExplain": "AI와 간단한 질문들에 문답을 하며, 취향 기반으로 다양한 여행지를 추천하는 기능을 가지고 있습니다. 바쁜 일상 속에서 여유를 찾을 수 있도록, AI가 추천해주는 맘에 쏙 드는 내 여행지 추천 서비스입니다.",
        "people": [
            {
                "id": 1,
                "part": "디자인",
                "name": [
                    "송의진"
                ]
            },
            {
                "id": 2,
                "part": "웹",
                "name": [
                    "윤상혁"
                ]
            }
        ],
        "feel": [
            {
                "id": 1,
                "nickname": "진",
                "name": "송의진",
                "part": "DESIGN",
                "explain": "UXUI, 화면 전체 디자인 / 와이어프레임 설계 및 일부 기획 / 굿즈 디자인을 했습니다.\n매주 진행되는 파트별 스터디를 통해 꾸준히 실력을 향상시킬 수 있었고, 직접 프로젝트에 참여하면서 데모데이까지 완수하게 되어 매우 뿌듯합니다. 디자인 뿐 아니라 개발자 및 기획자 등 다른 파트 챌린저들과 협업한 경험은 후에 필드에 나가서도 큰 도움이 될 것 같습니다. 즐겁고 유익한 경험이었습니다. UMC 앞으로도 파이팅-!"
            }
        ]
    },
    { 
        "id": 7, 
        "projectWeb": images['plancapsuleWeb'],
        "projectMobile": images['plancapsuleMobile'],
        "projectDetailWeb": images['plancapsuleDetailWeb'],
        "projectDetailMobile": images['plancapsuleDetailMobile'],
        "title": "플랜캡슐",
        "explain": "목표 관리의 빈틈을 채워줄 서비스", 
        "detailExplain": "흐지부지 잊어버리게 되는 목표를  지속적으로 리마인드 해 이를 이룰 수 있도록 하며, 목표 관리의 빈틈을 채워줄 수 있는 서비스입니다.",
        "people": [
            {
                "id": 1,
                "part": "디자인",
                "name": [
                    "양유진"
                ]
            }
        ]
    }
]

export default ProjectData;