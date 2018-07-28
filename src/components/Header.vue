<template lang='pug'>
header
  //header
  v-toolbar.elevation-4.white--text(dense flat fixed dark color="grey darken-3")
    v-menu(attach offset-y close-on-content-click min-width=250 transition="slide-y-transition")
      v-btn(icon slot="activator")
        v-icon menu
      v-list
        v-list-tile(v-for="(item, index) in items" :key="index" :href="item.url")
          v-list-tile-title {{ item.name }}
    v-spacer
    //dialog
    v-dialog(v-model="dialog" width="500px")
      v-btn(dark icon slot="activator")
        v-icon more_vert
      v-card
        v-card-title.headline About Me
        v-avatar
          img(:src="images.avatar")
        v-card-text
          h4.body-2 Trouble_SUM
          p.caption.grey--text Developer / WebDesigner
          p.my-3
            | パソコンやめたい
        v-divider
        v-card-text.grey.darken-1
          v-layout(align-center justify-space-around style="padding: 0 20% 0 20%;")
            v-btn(icon large href="https://twitter.com/sometrouble_")
              img.icons(:src="icons.twitter" width="32" height="32")
            v-btn(icon large href="https://github.com/sometrouble")
              img.icons(:src="icons.github" width="32" height="32")
            v-btn(icon large href="https://soundcloud.com/trouble_sum")
              img.icons(:src="icons.soundcloud" width="32" height="32")
        
</template>

<script lang='coffee'>
export default
  data: () ->
    items: [
      { 
        name: 'Qiita',
        url: 'https://qiita.com/trouble_sum'
      },
      { 
        name: 'least_alone (Hatena Blog)',
        url: 'https://sometrouble.hatenablog.com/'
      }
    ]
    images: {
      avatar: require("../assets/images/profile_facemini.png")
    }
    icons: {
      github: require("../assets/svg/github.svg")
      twitter: require("../assets/svg/twitter.svg")
      soundcloud: require("../assets/svg/soundcloud.svg")
      qiita: require("../assets/svg/qiita.svg")
      hatena: require("../assets/svg/hatena.svg")
    }
    dialog: false
</script>

<style lang='scss' scoped>
.icons {
  fill: white;
}
</style>
