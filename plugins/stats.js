import Stats from '@/node_modules/stats.js';
export default ({ app },inject) => {
    inject('Stats', data => new Stats(data) );
};

