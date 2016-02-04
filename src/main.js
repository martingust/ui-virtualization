import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
  aurelia.use.plugin('martingust/ui-virtualization');

  aurelia.start().then(a => a.setRoot());
}
