export interface WrapperConfig {
    remoteName: string;
    exposedModule: string;
    elementName: string;
}

export const initWrapperConfig: WrapperConfig = {
    remoteName: '',
    exposedModule: '',
    elementName: '',
}