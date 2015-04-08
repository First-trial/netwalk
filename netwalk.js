(function() {

  /**
   * Represents a game of Netwalk.
   * @constructor
   * @param {object} parent jQuery selector of the element in which the Netwalk
   *                        board will be rendered.
   */
  function Netwalk(parent) {
    this.renderer = new NetwalkRenderer(parent);
  }


  /**
   * Stores the parent element and synchronizes the Netwalk board based on
   * state changes.
   * @constructor
   * @param {object} parent jQuery selector of the element in which the Netwalk
   *                        board will be rendered.
   */
  function NetwalkRenderer(parent) {
    this.parent = parent;
  }


  // Place the Netwalk object in the global scope
  window.Netwalk = Netwalk;

})();
