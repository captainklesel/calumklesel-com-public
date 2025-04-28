import postcssPresetEnv from 'postcss-preset-env';

export default {
    plugins: [
        postcssPresetEnv({
            stage: 1, // Enables modern CSS features like @layer
        }),
    ],
};