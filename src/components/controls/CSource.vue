<template>
  <div class="root source"></div>
</template>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/fold/xml-fold'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'

export default {
  props: {
    value: String,
    mode: {
      type: String,
      default: 'text/html'
    },
    theme: {
      type: String,
      default: 'material'
    }
  },
  mounted () {

    const editor = this.editor = CodeMirror(this.$el, {
      mode: this.mode,
      theme: this.theme,
      lineNumbers: true,
      // lineWrapping: true,
      scrollbarStyle: 'overlay',
      foldGutter: true,
      autoCloseBrackets: true,
      autoCloseTags: true,
      height: 'auto',
      viewportMargin: Infinity,
      tabMode: 'indent',
      tabSize: 2,
      indentUnit: 2,
      matchBrackets: true,
      autoRefresh: true,
      value: this.value || '',
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
    })

    editor.on('change', () => {
      this.$emit('input', editor.getValue())
    })
  },
  beforeDestroy () {
  }
}
</script>
