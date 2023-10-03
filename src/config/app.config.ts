interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Team Member', 'Guest', 'End Customer'],
  tenantName: 'Team',
  applicationName: 'collabJunction',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage team information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/67f25d3e-1f3d-4ba6-9a4d-7b4ebd86ec79',
};
