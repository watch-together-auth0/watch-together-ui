import { Notify, extend } from 'quasar';

export default class NotifyWrapper {
  constructor(defaults = {}) {
    this.defaults = defaults;
    this.instances = {};
    this.reNotify = true;
  }

  make(defaults) {
    return new NotifyWrapper(defaults);
  }

  getOriginalDefaults() {
    return {
      position: 'top-right',
      actions: [{ icon: 'close', color: 'white' }],
    };
  }

  getDefaults() {
    return extend(this.getOriginalDefaults(), this.defaults);
  }

  set(options) {
    this.defaults = extend(this.defaults, options);
    return this;
  }

  withClose() {
    this.defaults.actions = [
      {
        label: '',
        icon: 'close', // optional
      },
    ];
    return this;
  }

  addAction(action) {
    this.defaults.actions.push(action);
    return this;
  }

  info(message) {
    const options = {
      icon: 'info',
      color: 'info',
    };
    this.callNotify(this.makeOptions(message, options));
  }

  error(message) {
    const options = {
      icon: 'error',
      color: 'negative',
    };
    this.callNotify(this.makeOptions(message, options));
  }

  errorFrom422({ data }) {
    const errors = Object.values(data.errors).flat().map(error => `<li>${error}</li>`).join('');
    this.error({
      message: `<ul>${errors}</ul>`,
      html: true,
    });
  }

  warning(message) {
    const options = {
      icon: 'warning',
      color: 'warning',
    };
    this.callNotify(this.makeOptions(message, options));
  }

  success(message) {
    const options = {
      icon: 'check',
      color: 'positive',
    };
    this.callNotify(this.makeOptions(message, options));
  }

  makeOptions(message, options) {
    if (typeof message === 'object') {
      options = extend(options, message);
    } else {
      options.message = message;
    }
    return options;
  }

  callNotify(options) {
    const notifyKey = this.makeNotifyKey(options);

    if (this.instances[notifyKey]) {
      if (this.reNotify) {
        this.instances[notifyKey](); // call function to dismiss existing notify instance
      } else {
        return;
      }
    }

    options.onDismiss = () => {
      delete this.instances[notifyKey];
    };

    this.instances[notifyKey] = Notify.create(extend(this.getDefaults(), options));
  }

  makeNotifyKey(options) {
    return `${options.icon}${options.message}`;
  }
}
