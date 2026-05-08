import {AuthUtils} from "../utils/auth-utils";

export class Layout {
    constructor() {
        this.userPanel = null;
        this.sidebarMenu = null;
    }

    init(currentRoute) {
        this.userPanel = document.getElementById('user-panel');
        this.sidebarMenu = document.getElementById('menu');

        this.showUserInfo();
        this.highlightMenu(currentRoute);

    }

    showUserInfo() {
        const userInfo = AuthUtils.getAuthInfo(AuthUtils.userInfoKey);

        try {
            const userInfo = JSON.parse(AuthUtils.getAuthInfo(AuthUtils.userInfoKey));
            if (userInfo) {
                this.userPanel.innerText = userInfo.name;
            }
        } catch (e) {
            console.log('Данные пользователь повреждены');
        }

    }

    highlightMenu(route) {
        if (!this.sidebarMenu) return;

        const sidebarMenuLinks = this.sidebarMenu.querySelectorAll('.nav-link');

        const parts = route.split('/').filter(p => p !== '');
        const basePath = parts.length === 0 ? '/' : '/' + parts[0];

        sidebarMenuLinks.forEach(link => {
            link.classList.remove('active');
            if (basePath === link.getAttribute('href')) {
                link.classList.add('active');
            }
        });
    }

}