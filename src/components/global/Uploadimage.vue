<template>
  <div v-if="uploadValue.toFixed()>0 && uploadValue.toFixed() < 100 ">
    <p>{{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
  </div>
  <div>
    <label id="uploadLabel">
        <svg viewBox="0 0 24 24" height="20px" width="20px" class="a8c37x1j ms05siws hr662l2t b7h9ocf4 crt8y2ji tftn3vyl"><g fill-rule="evenodd"><polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 "></polygon><path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"></path></g></svg>
      <input type="file" @change="previewImage($event)" accept="image/*" >
    </label>
  </div>
    <button @click="onUpload" id="btnup">Upload</button>

</template>


  <script>
    import  {getDatabase, set ,ref as fireRef,push} from "firebase/database";
    import { ref as stRef, uploadBytesResumable,getStorage} from "firebase/storage";
    import { reactive} from 'vue';
    import store from "../../store";
    const storage = getStorage();
    const db = getDatabase();
    // const auth = getAuth();

    const state = reactive({
      username: store.state.authUser.email,
      messages: []
    });

  export default {
    name:"uploadImage",
    data() {
      return {
         file: '',
         picture:null,
         uploadValue: 0,
         inputUsername :store.state.authUser.email ,
      };

    },
    methods: {
      previewImage($event) {
        this.uploadValue = 0;
        this.picture= null;
        this.file = $event.target.files[0];
      },

      onUpload() {
        this.picture= null;
        const storageRef = stRef(storage , this.file.name);
        const uploadTask = uploadBytesResumable(storageRef, this.file);

        uploadTask.on(`state_changed`, snapshot => {
                  this.uploadValue= (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                }, error => {
                  console.log(error.message)
                },
                // () => {
                //   this.uploadValue= 100;
                //   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //     this.picture = downloadURL;
                //   });
                // }
      );
        var date = new Date();
        var n = date.toDateString();
        var times = date.toLocaleTimeString();
        var messageTime = n + ' ' + times;

        let message = {
          username: state.username,
          time: messageTime,
          imageName: this.file.name,
        }

        set(push(fireRef(db, 'messages')), message); // save message in db


      }
    }

  }
</script>
<style scoped>
 input[type="file"]{
      display: none;
      padding: 10px 15px;
      border-radius: 0px 8px 8px 0px;
      background-color: #ea526f;
      color: #FFF;
      font-size: 18px;
      font-weight: 700;
  }
  #btnup,label{
    padding: 10px 15px;
    background-color: #138298;
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    margin-right: 30px;
     border-radius: 0px 8px 8px 0px;
  }
    #uploadLabel{
        position: absolute;
        right: 200px;
        padding: 12px 20px;
        background-color: transparent;
    }
 #uploadLabel:hover{
     cursor: pointer;
 }

</style>