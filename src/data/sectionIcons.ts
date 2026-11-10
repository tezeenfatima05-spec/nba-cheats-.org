import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Auto Green': 'featureAimbot',
  'Unlock all': 'featureUtilitySuite',
  'Attribute changer': 'featureEsp',
  'Configs': 'compareCloudBackup',
  'Stream proof': 'streamProof',
  'Cloud DMA': 'dmaHardware',
  'Menu & performance': 'settings',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  'Auto Green': 'featureAimbot',
  'Unlock all': 'featureUtilitySuite',
  Attributes: 'featureEsp',
  Configs: 'compareCloudBackup',
  Overlay: 'streamProof',
  DMA: 'dmaHardware',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'espActive', label: 'Auto Green' },
  { icon: 'featureUtilitySuite', label: 'Unlock All' },
  { icon: 'featureEsp', label: 'Attributes' },
  { icon: 'compareCloudBackup', label: 'Configs' },
  { icon: 'streamProof', label: 'Stream Proof' },
  { icon: 'dmaHardware', label: 'Cloud DMA' },
  { icon: 'undetected', label: 'Undetected' },
  { icon: 'support247', label: '24/7 Support' },
  { icon: 'instantDelivery', label: 'Instant Delivery' },
  { icon: 'liveStatus', label: 'Live Status' },
  { icon: 'autoUpdates', label: 'Auto Updates' },
  { icon: 'compatMonitor', label: 'PC Ready' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Premium: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

/** After-purchase timeline on product detail — one distinct icon per step */
export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

/** Product detail requirement tiles — prefer compat-style icons where mapped */
export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatPackage',
  'compatSteam',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];
