<template>
  <div id="app">
    <div class="container">
      <div id="bar">
        <h1>Vue Email Editor (Demo)</h1>

        <button v-on:click="saveDesign">Save Design</button>
        <button v-on:click="exportHtml">Export HTML</button>
      </div>

      <EmailEditor ref="emailEditor" v-on:load="editorLoaded" />
    </div>
  </div>
</template>

<script>
import { EmailEditor } from "vue-email-editor";

export default {
  name: "app",
  components: {
    EmailEditor,
  },
  methods: {
    editorLoaded() {
      this.$refs.emailEditor.editor.loadDesign({});
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log("saveDesign", design);
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log("exportHtml", data);
      });
    },
  },
};
</script>
