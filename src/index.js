import './scss/index.scss';

async function start() {
    return await Promise.resolve('async working');
};

// eslint-disable-next-line no-console
start().then(console.log);
