const Splash = {
  changelog: [
    '|2019.11.01|v2.2.1|Add Job icon and text for BlueMage, Dancer, Gunbreaker|',
    '|2017.12.01|v2.2.0|Adj CollapseMode btn move to right-top corner|',
    '|2017.12.01|v2.1.9|Add Graph On/Off|',
    '|2017.11.16|v2.1.8|Add New CollapseMode|',
    '|2017.11.14|v2.1.7|Support ActWebsocket|',
    '|2017.11.13|v2.1.6|Add English Version|',
    '|2017.11.13|v2.1.5|Add Overheal Progress|',
    '|2017.11.10|v2.1.4|Fix Load Setting Bug|',
    '|2017.11.10|v2.1.3|Add Setting: Quantity / Auto Mini|',
    '|2017.11.10|v2.1.2|Add Feedbac / About|',
    '|2017.11.10|v2.1.1|Fix Bug|',
    '|2017.11.09|v2.1.0|Add Quantity|',
    '|2017.11.09|v2.0.1|Fix MinoMode|',
    '|2017.11.08|v2.0.0|Add Diy Data / Rebuild Data Tree|',
    '|2017.11.03|v1.1.3|Fix Fix MiniMode Bug|',
    '|2017.11.01|v1.1.2|Add Team View|',
    '|2017.11.01|v1.1.1|Fix Some Data Bug|',
    '|2017.10.25|v1.1.0|Add Setting Item: Chart Scale / Pure Hps|',
    '|2017.10.24|v1.0.9|Add History|',
    '|2017.10.24|v1.0.8|Add HideID / Fix MiniMode|',
    '|2017.10.22|v1.0.7|Add Click Header to Wiki|',
    '|2017.10.22|v1.0.6|Add Mini Mode|',
    '|2017.10.22|v1.0.5|Add Transparent Mode|',
    '|2017.10.22|v1.0.4|Fix Setting Bug / Scroll Bug|',
    '|2017.10.20|v1.0.3|Add Setting Page|',
    '|2017.10.19|v1.0.2|Add Detail Page|',
    '|2017.10.18|v1.0.1|Add Right-click Menu / Collapse|',
    '|2017.10.18|v1.0.0|CanisMinor Act Online|',
  ],
  // usage
  usage: [
    '|설정|마우스 우클릭 - 설정|',
    '|전투 기록|오른쪽 아래의 시계 버튼 클릭|',
    '|상세 보기|리스트 클릭해 상세 데이터 보기|',
    '|접기|마우스 우클릭 - 접기/펼치기|',
    '|투명화|마우스 우클릭 - 투명/불투명 모드|',
    '|축소 모드|마우스 우클릭 -축소/확장 모드|',
    '|ID 숨기기|마우스 우클릭 - ID 보이기/숨기기|',
  ],
  // copyright
  copyright: [
    '|Author|CanisMinor|',
    '|ID|男孩纸榨汁机(紫水)|',
    '|QQ|40073838|',
    '|Email|i@canisminor.cc|',
    '|Site|http://ffxiv.canisminor.cc|',
  ],
};

export default {
  // basic
  cn: '简体中文',
  en: 'English',
  kr: '한국어',
  damage: '피해량',
  healing: '치유',
  tanking: '받은 피해',
  // splash
  'splash.changelog': '패치 기록',
  'splash.usage': '사용법',
  'splash.copyright': 'Copyright',
  'splash.more': '더보기',
  // menu
  'menu.title': '메뉴',
  'menu.setting': '설정',
  'menu.refresh': '새로고침',
  'menu.debug': '디버그',
  'menu.root': '복원',
  'menu.fullscreen.on': '접기',
  'menu.fullscreen.off': '펼치기',
  'menu.uiTrans.on': '불투명 모드',
  'menu.uiTrans.off': '투명 모드',
  'menu.uiMini.on': '확장 모드',
  'menu.uiMini.off': '축소 모드',
  'menu.hideName.on': 'ID 보이기',
  'menu.hideName.off': 'ID 숨기기',
  // header
  'header.save': '기록됨',
  'header.inbattle': '전투중',
  // footer
  'footer.back': 'Back',
  'footer.dps': 'Dps',
  'footer.heal': 'Heal',
  'footer.tank': 'Tank',
  'footer.all': 'All',
  // normal
  'normal.waiting': 'Act 데이터 기다리는 중...',
  'normal.all.damage': '전체 피해량',
  'normal.all.healing': '전체 치유량',
  'normal.all.tanking': '전체 받은 피해',
  // detail
  'detail.bar': '상세 정보',
  'detail.data.damage': '준 피해 정보',
  'detail.data.healing': '치유 정보',
  'detail.data.tanking': '받은 피해 정보',
  // history
  'history.header': '기록',
  'history.bar': '최근 전투 기록',
  'history.null': '전투 기록 없음',
  // qrcode
  'qrcode.header': '모바일 동기화',
  'qrcode.null': 'URL을 확인해주세요',
  'qrcode.scan': 'Scan to sync data',
  // setting
  'setting.header': '설정',
  'setting.basic': '기본 설정',
  'setting.quantity': '수치 설정',
  'setting.normal': '일반 데이터',
  'setting.detail': '상세 데이터',
  'setting.comment': '코멘트',
  'setting.about': '정보',
  // setting.btn
  'setting.btn.reset': '초기화',
  'setting.btn.apply': '적용',
  // setting.message
  'setting.message.reset': '초기화 되었습니다',
  'setting.message.apply': '적용 되었습니다',
  'setting.message.error': '잘못된 값 입력됨',
  'setting.message.root': '설정 복원됨',
  // setting.basic
  'setting.basic.split.lang': '언어',
  'setting.basic.lang': '언어 (语言)',
  //
  'setting.basic.split.personal': '개인 설정',
  'setting.basic.nameActive': '닉네임',
  'setting.basic.imgActive': '아바타',
  //
  'setting.basic.split.statistics': '통계 설정',
  'setting.basic.graphTimeActive': '차트 갱신 주기 (초)',
  'setting.basic.graphHide': '차트 숨기기',
  'setting.basic.graphScale': '차트 변동치',
  'setting.basic.pureHps': 'Hps에서 오버힐 제외',
  //
  'setting.basic.split.gui': 'Gui',
  'setting.basic.uiAutoMiniActive': '자동 미니 모드 (>num)',
  'setting.basic.uiScaleActive': 'UI 스케일',
  //
  'setting.basic.split.history': '기록',
  'setting.basic.historyLength': '보관할 기록 수',
  // setting.normal
  'setting.normal.normalFull': '확장 모드 힐러 표시',
  'setting.normal.normalMini': '축소 모드 힐러 표시',
  'setting.normal.normalDamage': '피해량 표시',
  'setting.normal.normalHeal': '치유량 표시',
  'setting.normal.normalTank': '받은 피해량 표시',
  // setting.detail
  'setting.detail.detailDamage': '가한 피해 표시',
  'setting.detail.detailHeal': '치유 표시',
  'setting.detail.detailTank': '받은 피해 표시',
  // setting.quantity
  'setting.quantity.title.updwon': 'DPS 변동 수치',
  'setting.quantity.title.damage': '준 피해 수치',
  'setting.quantity.title.heal': '치유 수치',
  'setting.quantity.title.tank': '받은 피해 수치',
  'setting.quantity.title.overheal': '오버힐 수치',
  'setting.quantity.desc.avDps': '파티 평균 Dps',
  'setting.quantity.desc.dps60': '60초간',
  'setting.quantity.desc.overHeal': '오버힐',
  'setting.quantity.is.large': '이상',
  'setting.quantity.is.small': '이하',
  'setting.quantity.is.high': '이상',
  'setting.quantity.is.low': '이하',
  'setting.quantity.is.dps10high': '최근 10초가 더 높다면',
  'setting.quantity.is.dps10low': '최근 10초가 더 낮다면',
  // setting.about
  'setting.about.version': 'Version',
  'setting.about.author': 'Author',
  'setting.about.contact': 'Contact',
  'setting.about.git': 'Git Lib',
  'setting.about.link': 'Links',
  // placeholder
  'placeholder.you': 'YOU',
  'placeholder.img': 'Img Url',
  'placeholder.select': 'Select Display Tags...',
  'placeholder.chart': 'Waiting Data...',
  // role
  'role.you': 'YOU',
  'role.dps': 'Dps',
  'role.heal': 'Heal',
  'role.tank': 'Tank',
  'role.other': 'Other',
  'role.false': 'Other',
  'role.acn': 'Acn',
  'role.smn': 'Smn',
  'role.arc': 'Arc',
  'role.brd': 'Brd',
  'role.blm': 'Blm',
  'role.thm': 'Thm',
  'role.drg': 'Drg',
  'role.lnc': 'Lnc',
  'role.pgl': 'Pgl',
  'role.mnk': 'Mnk',
  'role.mch': 'Mch',
  'role.rog': 'Rog',
  'role.nin': 'Nin',
  'role.rdm': 'Rdm',
  'role.sam': 'Sam',
  'role.blu': 'Blu',
  'role.dnc': 'Dnc',
  'role.ast': 'Ast',
  'role.cnj': 'Cnj',
  'role.whm': 'Whm',
  'role.sch': 'Sch',
  'role.drk': 'Drk',
  'role.mrd': 'Mrd',
  'role.war': 'War',
  'role.gla': 'Gla',
  'role.pld': 'Pld',
  'role.gnb': 'Gnb',
  'role.chocobo': 'Chocobo',
  'role.limitbreak': 'LimitBreak',
  // encounter
  'encounter.time': '시간',
  'encounter.damage.total': '총 피해량',
  'encounter.damage.avps': 'AvD',
  'encounter.damage.ps': 'Dps',
  'encounter.damage.ps10': '최근 10초간 피해량',
  'encounter.damage.ps30': '최근 30초간 피해량',
  'encounter.damage.ps60': '최근 60초간 피해량',
  'encounter.damage.count': '공격 횟수',
  'encounter.damage.highest': '최고 피해량',
  'encounter.damage.kills': '처치 수',
  'encounter.healing.total': '총 치유량',
  'encounter.healing.ps': 'Hps',
  'encounter.healing.count': '치유 횟수',
  'encounter.healing.highest': '최고 치유량',
  'encounter.healing.deaths': '데스카운트',
  'encounter.tanking.total': '총 받은 피해량',
  // combatant
  'combatant.damage.total': '총 피해량',
  'combatant.damage.ps': 'Dps',
  'combatant.damage.ps10': '최근 10초간 피해량',
  'combatant.damage.ps30': '최근 30초간 피해량',
  'combatant.damage.ps60': '최근 60초간 피해량',
  'combatant.damage.count': '공격 횟수',
  'combatant.damage.percent': '피해량 기여도',
  'combatant.damage.highest': '최고 피해량',
  'combatant.damage.criticals': '극대 수',
  'combatant.damage.directhit': '직격 수',
  'combatant.damage.critdirecthit': '직격극대 수',
  'combatant.damage.kills': '처치 수',
  'combatant.healing.total': '총 치유량',
  'combatant.healing.ps': 'Hps',
  'combatant.healing.count': '치유 횟수',
  'combatant.healing.percent': '치유량 기여도',
  'combatant.healing.over': '오버힐',
  'combatant.healing.highest': '최고 치유량',
  'combatant.healing.criticals': '치유 극대화 수',
  'combatant.healing.deaths': '데스카운트',
  'combatant.tanking.total': '총 받은 피해',
  'combatant.tanking.percent': '받은 피해 기여도',
  'combatant.tanking.parry': '방패 막기 횟수',
  'combatant.tanking.block': '막은 횟수',
  'combatant.tanking.dodge': '피한 횟수',
  ...Splash,
};
