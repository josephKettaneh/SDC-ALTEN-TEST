export interface SidenavItem {
    id: string;
    labels: { [ lang: string ]: string };
    link: string;
    icon?: string;
    children?: SidenavItem[];
    enrichedUrl?: (routeParams) => string;
    childEntityLink?: string;
    limitedChildrenVisibility?: boolean;
    hidden?: boolean;
}