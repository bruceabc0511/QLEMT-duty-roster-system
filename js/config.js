/**
 * 系統設定
 * ------------------------------------------------------------
 * API_URL：Google Apps Script 網頁應用程式的部署網址（.../exec）
 *   - 留空 ''  → 使用離線展示模式（資料存在瀏覽器 localStorage）
 *   - 填入網址 → 使用 Google 試算表作為資料庫
 */
window.APP_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbyEf7fdKwdO50dXq4VMtbJ_vpDXp1jiOGmCjPFnIoPjdbpe88qN9epW8FGVw_JLVHSCrg/exec',

  UNIT_NAME: '救護協勤排班系統',
  OPEN_NEXT_MONTH_DAY: 20,    // 每月 20 號自動開放選填次月班表
  OPEN_NEXT_MONTH_HOUR: 20,   // 開放時間：20:00（晚上 8 點）
  SHIFT_ROWS: [
    { row: 1, label: '早班' },
    { row: 2, label: '中班' },
    { row: 3, label: '晚班' },
  ],
  TIER: {
    1: {
      name: '一車',
      start: 8,
      end: 22,
      shifts: [
        { name: '早班', start: 8, end: 12, row: 1, span: 1 },
        { name: '中班', start: 12, end: 16, row: 2, span: 1 },
        { name: '晚班', start: 16, end: 22, row: 3, span: 1 },
      ],
    },
    2: {
      name: '二車',
      start: 8,
      end: 18,
      shifts: [
        { name: '早班', start: 8, end: 12, row: 1, span: 1 },
        { name: '中班', start: 12, end: 18, row: 2, span: 2 },
      ],
    },
  },
  REQUIRED_T1_PER_DAY: 3,     // 每日一車應排班數（排班率分母）
  REQUIRED_T1_PER_MEMBER: 4,  // 每人每月一車基本排班數門檻（少於4班為未達標）
  RATE_TARGET: 90,            // 每月協勤排班率達標門檻（%）
  ALLOW_PAST_EDIT: false,     // 是否允許修改過去日期（管理員不受限）
  POLL_SECONDS: 20,           // 自動更新間隔（秒），用來即時看到他人登記結果
};
