import tl from "@/utils/locallize";
export const FUNC_NAME = 'biz_info'
import i18n from "../../lang/i18n";
import { ref, watch } from "vue";


// ========================== PATH API =============================
export const API = {
  LIST: `/${FUNC_NAME}`,
  // CREATE: `/${FUNC_NAME}`,
  // DETAIL: (id: string) => `${FUNC_NAME}/${id}`,
  // UPDATE: (id: string) => `${FUNC_NAME}/${id}`,
  // DELETE: (id: string | string[]) => `${FUNC_NAME}/${id}`,
  // DELETE_MULTI: `${FUNC_NAME}/delete-multi`,
  // EXPORT: `${FUNC_NAME}/export-excel`,
}

// ========================== CONFIG TABLE ==========================
const currentLocale = ref(i18n.global.locale);

watch(() => i18n.global.locale, (newLocale) => {
  console.log("New locale:", newLocale);
  currentLocale.value = newLocale;
  console.log("Current locale:", currentLocale.value);
});
const getTitle = (key: string) => {
  return tl(FUNC_NAME, i18n.global.t(key))
}

interface BizColConfig {
  key : string | null,
  title: string | null,
  is_sort?: boolean | null,
  linked?: boolean | null,
  width?: number
  is_custom?: boolean | null
}

export const tableConfig = {
  checkbox: false,
  action: true,
  showPaging: false,
  dbClick: false,
  index: true,
};

export const colConfig : BizColConfig[] = [
  {
    key: "prj_name",
    // title: tl(FUNC_NAME, "Project"),
    title: tl(FUNC_NAME, i18n.global.t('project')),
    linked: true,
    width: 300,
  },
  {
    key: "prj_content",
    // title: tl(FUNC_NAME, "Duties / Comments"),
    title: tl(FUNC_NAME, i18n.global.t('duties_comments')),
    linked: false,
    width: 300,
  },
  {
    key: "period",
    // title: tl(FUNC_NAME, "Period"),
    title: tl(FUNC_NAME, i18n.global.t('period')),
  },
  {
    key: "system_analysis",
    // title: tl(FUNC_NAME, "System analysis"),
    title: tl(FUNC_NAME, i18n.global.t('system_analysis')),
    width: 85,
    is_custom: true
  },
  {
    key: "overview_design",
    // title: tl(FUNC_NAME, "Overview design"),
    title: tl(FUNC_NAME, i18n.global.t('overview_design')),
    width: 90,
    is_custom: true
  },
  {
    key: "basic_design",
    // title: tl(FUNC_NAME, "Basic design"),
    title: tl(FUNC_NAME, i18n.global.t('basic_design')),
    width: 85,
    is_custom: true
  },
  {
    key: "function_design",
    // title: tl(FUNC_NAME, "Function design"),
    title: tl(FUNC_NAME, i18n.global.t('function_design')),
    width: 85,
    is_custom: true
  },
  {
    key: "detail_design",
    // title: tl(FUNC_NAME, "Detail design"),
    title: tl(FUNC_NAME, i18n.global.t('detail_design')),
    width: 85,
    is_custom: true
  },
  {
    key: "coding",
    // title: tl(FUNC_NAME, "Coding"),
    title: tl(FUNC_NAME, i18n.global.t('coding')),
    width: 85,
    is_custom: true
  },
  {
    key: "unit_test",
    // title: tl(FUNC_NAME, "Unit Test"),
    title: tl(FUNC_NAME, i18n.global.t('unit_test')),
    width: 85,
    is_custom: true
  },
  {
    key: "operation",
    // title: tl(FUNC_NAME, "Operation"),
    title: tl(FUNC_NAME, i18n.global.t('operation')),
    width: 95,
    is_custom: true
  },
  {
    key: "os_db",
    title: tl(FUNC_NAME, "OS・DB"),
    width: 120,
  },
  {
    key: "language",
    // title: tl(FUNC_NAME, "Language"),
    title: tl(FUNC_NAME, i18n.global.t('language')),
    width: 120,
  },
  {
    key: "role",
    // title: tl(FUNC_NAME, "Role"),
    title: tl(FUNC_NAME, i18n.global.t('role')),
    width: 120,
  }
];

export default { tableConfig, colConfig };
