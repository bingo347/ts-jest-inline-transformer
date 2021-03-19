import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    preset:  'ts-jest',
    globals: {
        'ts-jest': {
            astTransformers: {
                // TODO: use self
                before: [],
            },
        },
    },
};

export default config;
