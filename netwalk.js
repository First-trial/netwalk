(function() {

  /**
   * Represents a game of Netwalk.
   * @constructor
   * @param {object} parent - jQuery selector of the element in which the
   *                          Netwalk board will be rendered.
   * @param {object} options - Optional. An object containing key-value pairs
   *                           for additional configuration options.
   */
  function Netwalk(parent, options) {
    this.options = options || {};

    // Configure option defaults
    this.options.columns = this.options.columns || 10;
    this.options.rows = this.options.rows || 10;

    // Initialize the renderer
    this.renderer = new NetwalkRenderer(
      parent,
      this.options.columns,
      this.options.rows
    );
  }


  /**
   * Stores the parent element and synchronizes the Netwalk board based on
   * state changes.
   * @constructor
   * @param {object} parent - jQuery selector of the element in which the
   *                          Netwalk board will be rendered.
   * @param {integer} columns - The number of columns in the Netwalk board.
   * @param {integer} rows - The number of rows in the Netwalk board.
   */
  function NetwalkRenderer(parent, columns, rows) {
    this.parent = parent;
    this.size = { x: columns, y: rows };
  }


  // Place the Netwalk object in the global scope
  window.Netwalk = Netwalk;

})();
