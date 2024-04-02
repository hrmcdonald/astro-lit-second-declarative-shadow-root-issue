import { mtrIcon } from './mtr-icons';
import { mtrIconExtras } from './mtr-icons-extras';
import { cxIcon } from './cx-icons';
export interface MortarIcon {
    name: mtrIcon | mtrIconExtras | cxIcon | string;
    data: string;
}
