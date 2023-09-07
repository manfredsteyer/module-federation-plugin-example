export interface WrapperConfig {
    remoteName: string;
    exposedModule: string;
    elementName: string;
    fragmentUrl?: string;
}

export const initWrapperConfig: WrapperConfig = {
    remoteName: '',
    exposedModule: '',
    elementName: '',
    fragmentUrl: '',
}