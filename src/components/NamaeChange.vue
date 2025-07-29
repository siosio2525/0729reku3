<template>
<!--     白いカードボックス、高さを画面いっぱい、縦横中央揃え、背景をURL画像に -->
<v-container class="fill-height d-flex justify-center align-center"  style="background: url('https://cdn.pixabay.com/photo/2015/06/12/13/16/mountain-806915_1280.jpg'); background-size: cover; background-position: center;">

<div class="form-name" >
  <p><strong style="background-color:whitesmoke" outline mx-2>犬を増やす</strong></p>
    <input type="text" placeholder="名前をいれてあげよう" outline mx-2 style="background-color:whitesmoke" v-model="text" id="text">
    <v-btn   
        outline mx-2
         color="deep-purple accent-2"
          dark        
          @click="addname">名前を付けよう
          </v-btn> 
        </div>
   </v-container>
</template>

<script>
export default {    //このコンポーネントの中で使うデータを定義
    data() {
        return{
            text:'' //入力欄の名前を保存
        }
    },
    computed:{      //配列が更新されるたびに最新の配列を取得
        names(){
        return this.$store.state.data.names
        }
    },
methods: {
addname() {
this.$store.commit('addName',this.text)    //mutationで定義したaddNameを呼び、names配列にthis.textを追加
this.text = ''
}
    }
}

</script>