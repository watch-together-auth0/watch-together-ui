import NotifyWrapper from 'src/services/Notify';

export default ({ Vue }) => {
  Vue.prototype.$notify = new NotifyWrapper();
};
