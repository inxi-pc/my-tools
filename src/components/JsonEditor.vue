<template>
    <div id="auto">
        <div id="codeEditor" style="width: 603px;"></div>
        <div id="splitter">
            <div id="buttons">
                <div>
                    <button id="toTree" class="convert" title="Copy code to tree editor (Ctrl + >)" v-on:click="toTree">
                        <div class="convert-right">></div>
                    </button>
                </div>
                <div>
                    <button id="toCode" class="convert" title="Copy tree to code editor (Ctrl + <)" v-on:click="toCode">
                        <div class="convert-left"><</div>
                    </button>
                </div>
            </div>
            <div id="drag" title="Drag left or right to change the width of the panels" style="height: 232px; line-height: 232px;">⋮</div>
        </div>
        <div id="treeEditor" style="width: 603px;"></div>
    </div>
</template>

<script>
import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js'
import $ from 'jquery'

export default {
  name: 'JsonEditor',
  data: function () {
    return {
      codeEditor: 0,
      treeEditor: 0
    }
  },
  mounted: function () {
    var editOptions = {
      modes: ['text', 'code', 'tree', 'form', 'view'],
      mode: 'code',
      ace: ace
    }
    this.codeEditor = new JSONEditor($('#codeEditor').get(0), editOptions)

    var treeOptions = {
      modes: ['text', 'code', 'tree', 'form', 'view'],
      mode: 'tree',
      ace: ace
    }
    this.treeEditor = new JSONEditor($('#treeEditor').get(0), treeOptions)
  },
  methods: {
    toTree: function (event) {
      this.treeEditor.set(this.codeEditor.get())
    },
    toCode: function (event) {
      this.codeEditor.set(this.treeEditor.get())
    }
  }
}
</script>

<style src="jsoneditor/dist/jsoneditor.min.css"></style>
<style>
#auto {
  height: 100%;
  margin: -40px 0 -24px 0;
  padding: 40px 0 24px 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-block;
}
#codeEditor,
#treeEditor {
  height: 100%;
  width: 400px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#splitter {
  text-align: center;
  float: left;
  height: 100%;
  padding: 15px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#splitter #buttons {
  margin: 0 0 15px 0;
}
button.convert {
  cursor: default;
  padding: 2px;
}
#splitter #toTree {
  margin: 40px 0 0 0;
}
#splitter #toCode {
  margin: 20px 0 0 0;
}
#splitter #drag {
  font-size: 32px;
  color: #d3d3d3;
  border-radius: 3px;
  min-width: 24px;
  cursor: col-resize;
}
div.convert-left,
div.convert-right {
  width: 24px;
  height: 24px;
  margin: 0;
}
div.convert-left,
div.convert-right {
  width: 24px;
  height: 24px;
  margin: 0;
}
#codeEditor {
  float: left;
  padding: 15px 0 15px 15px;
}
#treeEditor {
  float: left;
  padding: 15px 15px 15px 0;
}
</style>
