import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     data: {  //Vueのデータ（状態）を定義
    dogImage: '',   //画像URL
     dogName: '',  //ランダムにつける犬の名前
    newName:'',
    // loading: false,   //trueならボタンにくるくるが出る
    // error: false,   // エラーが起きたかどうか
     names: ['ココ', 'マロン', 'レオ', 'モモ', 'ソラ', 'ハナ', 'リク', 'チョコ', 'ルナ', 'サクラ','マルコ','ムサシ','ハチ','ミカン','アルベルト','アインシュタイン','ジュール','トニー','サシミ','エマ','ココ','サボ','スミレ','ジョー','ハットリ','スズメ','ジョン','ダニー','オズ','ハミルトン','チョコ']
     } 

  },
  getters: {
    Namae(state) {
      return state.data.dogName
    }
      // nameDog(state) { 
      //   return state.data.names[Math.floor(Math.random() * state.data.names.length)];
     // namedog() { this.names[Math.floor(Math.random() * this.names.length)];
          //エラーの場合errorにtrueを代入し、アラートを表示、ローディング中のくるくるを止める
          
  },
  mutations: { //名前追加、削除
      getdog(state,dogImage){
        state.data.dogImage = dogImage
      },
      setdogNamae(state,dogName){
        state.data.dogName = dogName
      },
      addName(state,newName){
        state.data.names.push(newName)
      }
  },
  actions: {
    async addDog({commit}) {
      try{
   const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    commit('getdog',res.data.message);
  }catch(error){
    console.log(error)
    this.error = true;
      } finally {
        this.loading = false;
      }
    },
     nameDog({state,commit}) {
        try {
      const Suuji = Math.floor(Math.random() * state.data.names.length)
      const dogName = state.data.names[Suuji] 
      commit('setdogNamae',dogName);
       }catch(error){
    console.log(error)
    this.error = true;
      } finally {
        this.loading = false;
      }
  },
//   addname() {
//   try {
//     this.names.push(this.text)
//   }catch(error){
//     console.log(error)
//     this.error = true;
//       } finally {
//         this.loading = false;
//       }
// }
}
});


          