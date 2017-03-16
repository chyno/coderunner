
export class App {
  configureRouter(config, router) {
    config.title = 'Project Chyno';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
      { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Runner' }
      ]);

    this.router = router;
  }
}
