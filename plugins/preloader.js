import Preloader from '@andresclua/preloader';
export default ({ app },inject) => {
  inject('Preloader', data => new Preloader(data) );
};