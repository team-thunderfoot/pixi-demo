import JSUTIL from '@andresclua/jsutil';
export default ({ app },inject) => {
    inject('JSUTIL', () => new JSUTIL() );
};
global.JSUTIL = JSUTIL;