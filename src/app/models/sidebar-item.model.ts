export class SidebarItem {
  path: string | undefined;
  name: string;
  action: (() => void) | undefined;

  constructor(name: string, path?: string, action?: () => void) {
    this.name = name;
    if(path) {
      this.path = path;
    }
    if(action) {
      this.action = action;
    }
  }
}
