// Minimal server-side shim for the `odometer` library to avoid SSR errors.
// Provides a no-op class so code can instantiate Odometer during server builds
// without touching `document` or performing DOM mutations.

export default class Odometer {
  constructor(options = {}) {
    this.options = options;
  }
  update() {}
  render() {}
}