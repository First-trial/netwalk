(function() {

  "use strict";


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
    this.options = _.assign(this.DEFAULT_OPTIONS, this.options);

    // Initialize the renderer
    this.renderer = new NetwalkRenderer(
      parent,
      this.options.columns,
      this.options.rows
    );
  }

  Netwalk.prototype.DEFAULT_OPTIONS = { columns: 10, rows: 10 };


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

    this.init();
  }

  /**
   * Scaffold the Netwalk grid inside of the renderer's element.
   */
  NetwalkRenderer.prototype.init = function() {
    this.parent.addClass("netwalk");

    var size = this.size; // Needed because `this` goes out of scope

    // Generate table rows
    var rows = _.map(_.range(size.y), function(y) {
      var row = $("<tr>").addClass("row-" + y);

      // Generate the Netwalk node elements (table columns)
      row.append(
        _.map(_.range(size.x), function(x) {
          return $("<td>").addClass("col-" + x).addClass("node");
        })
      );

      return row;
    });

    // Write the grid to a table and attach it to the parent element
    var table = $("<table>").html(rows);
    this.parent.append(table);
  }


  // Place the Netwalk object in the global scope
  window.Netwalk = Netwalk;

})();
