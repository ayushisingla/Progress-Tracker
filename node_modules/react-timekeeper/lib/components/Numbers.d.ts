import React from 'react';
import { MODE } from '../helpers/constants';
interface MinuteProps {
    anim: {
        opacity: any;
        translate: any;
        translateInner: any;
    };
}
interface HourProps extends MinuteProps {
    mode: MODE.HOURS_12 | MODE.HOURS_24;
    hour24Mode: boolean;
}
declare function hours({ anim, mode, hour24Mode }: HourProps): JSX.Element;
export declare const HourNumbers: React.MemoExoticComponent<typeof hours>;
declare function minutes({ anim }: MinuteProps): JSX.Element;
export declare const MinuteNumbers: React.MemoExoticComponent<typeof minutes>;
export {};
