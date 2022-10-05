import { IGoogleAnalyticsCommand } from "ngx-google-analytics";

export interface GoogleAnalyticsConfig {
    trackingCode: string;
    initCommands?: IGoogleAnalyticsCommand[];
    uri?: string;
    enableTracing?: boolean;
    nonce?: string;
}