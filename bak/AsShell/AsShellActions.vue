<template>
  <div class="actions">
    <div class="group" style="margin-left: 26px">
      <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
        <span class="icon"><i class="glyphicon glyphicon-file grey-300"></i></span>
        <span class="title">New</span>
      </button>
      <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
        <span class="icon"><i class="glyphicon glyphicon-folder-open amber-300"></i></span>
        <span class="title">Open</span>
      </button>
      <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
        <span class="icon"><i class="glyphicon glyphicon-cloud-upload red-300"></i></span>
        <span class="title">Push</span>
      </button>
      <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
        <span class="icon"><i class="glyphicon glyphicon-cloud-download indigo-300"></i></span>
        <span class="title">Pull</span>
      </button>
      <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
        <span class="icon"><i class="glyphicon glyphicon-duplicate yellow-300"></i></span>
        <span class="title">Clone</span>
      </button>
      <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
        <span class="icon"><i class="glyphicon glyphicon-import purple-300"></i></span>
        <span class="title">Import</span>
      </button>
      <div class="pull-right">
        <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
          <span class="icon"><i class="glyphicon glyphicon-share-alt orange-300"></i></span>
          <span class="title">View</span>
        </button>
        <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
          <span class="icon"><i class="glyphicon glyphicon-picture green-300"></i></span>
          <span class="title">Images</span>
        </button>
        <button class="action" @click="$store.commit('designer/panel/toggle', { name: 'bottom', pane: 'console' })">
          <span class="icon"><i class="glyphicon glyphicon-paperclip cyan-300"></i></span>
          <span class="title">Files</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'as-actions'
}
</script>

<style scoped lang="scss">

  @import "~@/styles/partials/all";

  .action {
    background: none;
    border: 1px solid transparent;
    box-sizing: border-box;
    color: $color-primary-8;
    border-radius: 4px;
    margin: 0px 4px 0px 0px;

    &:hover {
      // border: 1px solid $color-primary-1;
      background: $color-primary-4;
      color: #FFFFFF;
    }

    padding: 0px 6px;
    white-space: nowrap;

    .icon {
      display: inline-block;
      padding: 5px 6px;
      text-align: center;
      vertical-align: middle;
      margin: 4px 4px 4px 0px;
      background: $color-primary-0;
      border-radius: 4px;
      line-height: 1;
      .material-icons {
        color: #AA00AA;
        font-size: 18px;
      }
    }

    .title {
      display: inline-block;
      white-space: nowrap;
      line-height: 32px;
      font-size: 12px;
      margin: 0px 2px;
      font-weight: bold;
    }
  }
</style>
