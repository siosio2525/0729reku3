<template>
<!--     白いカードボックス、高さを画面いっぱい、縦横中央揃え、背景をURL画像に -->
    <v-container class="fill-height d-flex justify-center align-center" style="background: url('https://cdn.pixabay.com/photo/2015/06/12/13/16/mountain-806915_1280.jpg'); background-size: cover; background-position: center;">
      
<!--カードボックス内側のレイアウト、影、padding24px、左右中央揃え、最大最低幅、角を丸く -->
<!--   幅と高さを規定値の中で自動調整するためmx-autoで余白を制限の中で調整 -->
      <v-card elevation="8" class="pa-6 mx-auto" max-width="1000" min-height="800" rounded shaped>
        
<!--     ifでエラー時のみ表示、警告、コンパクト表示、枠線のみ、下に余白 -->
        <!-- <v-alert v-if="error" type="error" dense outlined class="mb-4">
          犬が来れませんでした。。。
        </v-alert> -->
        
<!-- タイトル、文字サイズ、太字、下に余白、斜体 -->
        <h1 class="text-h2 font-weight-bold mb-4 " style="font-style: italic;">Today inu</h1>
        
<!--画像があり、読み込めているときだけ画像URLを表示、高さ、画像切れないよう表示、下に余白-->
<!-- heightで画像の高さ安定、containで見切れないよう調整 -->
        <v-img
          :src="$store.state.data.dogImage"
          height="300"
          contain
          class="mb-4"
        ></v-img>


<!-- 画像があり、読み込めているときだけ、Vueで定義されたdogBreed、ランダムに名前を表示 -->
<!-- pタグがブロック要素で改行有、strongタグで太字と意味的な強調表現 -->
        <div class="mb-4">
         
          <h2><strong>名前：</strong>{{dogName}}</h2>       
<!-- ボタンの色、テキストカラー、adddogを実行、読み込みスピナー、幅広げる、サイズ大きめ、読み込み中表示切替、 -->
<!-- 『:』はv-bind の省略形 -->
        
        <v-btn
          color="deep-purple accent-2"
          dark
          @click="addDog(); nameDog()"
          block
          large
        >
<!-- loading === trueだと読み込み中... 、loading === falseだともう一匹！！ -->
          {{ 'もう一匹！！もう一匹！！' }}
          </v-btn>
        </div>
      </v-card>
    </v-container>
</template>

<script>
export default {
  // name: 'HelloWorld',
  //   data() {
  //   return{
  //   }
  // },

  computed:{
    dogName(){
    return this.$store.state.data.dogName
    // },
      // nameDog(state) { 
      //   return state.data.names[Math.floor(Math.random() * state.data.names.length)];
     // namedog() { this.names[Math.floor(Math.random() * this.names.length)];
          //エラーの場合errorにtrueを代入し、アラートを表示、ローディング中のくるくるを止める  
  // }

   } },
  

  methods: {
    async addDog(){
    await this.$store.dispatch('addDog') 
    }, 
     async nameDog() {
await this.$store.dispatch('nameDog')
  },
},
//起動時に1匹呼び出す
  async mounted() {
   await this.$store.dispatch('addDog')
   await this.$store.dispatch('nameDog')
  }
}
</script>