<template>
    <div class="container">
            <div class="mainView">
                <ul class="attrList">
                    <li class="attrLi attr_health">
                        体质:{{ health }}
                    </li>
                    <li class="attrLi">
                        现金:{{ money }}
                    </li>
                    <li class="attrLi">
                        人气:{{ popularity }}
                    </li>
                    <li class="attrLi">
                        知识:{{ knowledge }}
                    </li>
                    <van-button class="musciBtn" @click="playAudio">{{ !audioPlaying ? "开启" : "关闭" }}音乐</van-button>

                </ul>
                <!-- 音乐开启 关闭按钮 -->
                <ul class="typeList"></ul>
                <div class="wordListShell">
                    <ul class="wordList"></ul>
                </div>
            </div>
            <van-button id="restart" @click="restart" >我想再活五百年!</van-button>
            <audio controls ref="audioPlayer" :src="audioSource" hidden></audio>
            <p class="hint">IMNIGHT</p>
        </div>
  </template>
  
  <script>
  import { ref } from 'vue';

  export default {
    setup() {
        const health = ref(0);
        const money = ref(0);
        const popularity = ref(0);
        const knowledge = ref(0);
        const running = ref(false);
        const audioPlayer = ref(null);
        const audioSource = require('@/assets/audio/bgmsc/bg1.mp3');
        const audioPlaying = ref(false);
        
        const playAudio = () => {
            if (audioPlayer.value) {
                if (!audioPlaying.value) {
                    audioPlayer.value.play();
                    audioPlaying.value = true;
                } else {
                    audioPlayer.value.pause();
                    audioPlaying.value = false;
                }
            }
        };

        return {
            health,
            money,
            popularity,
            knowledge,
            running,
            audioPlayer,
            audioSource,
            audioPlaying,
            playAudio,
        };
    },
    name: 'IndexPage',
    props: {
    },
    methods: {
        restart: function(){
            this.health = 100;
            this.money = 100;
            this.popularity = 100;
            this.knowledge = 100;
            this.running = true;
            this.playAudio();
        } 
    },
  }
  </script>
  
  <style scoped>
    *{
        margin: 0;
        padding:0;
    }
    ul,ol{
        list-style: none;
    }
    .hint{
        width:100%;
        margin:0;
        padding:4px 0px;
        background:#f9f9f9;
        text-align: center;
        position:fixed;
        left:0;
        bottom:0;
        font-size:14px;
        color:#ccc;
    }
    .mainView{
        width:400px;
        height:600px;
        background:#fff;
        box-shadow: 0px 0px 8px #ddd;
        margin-bottom:5px;
        border-radius: 8px;
        display:flex;
        overflow: hidden;
        flex-direction: column;
    }
    .wordListShell{
        flex-grow: 1;
        display:flex;
        margin:10px;
        margin-top: 0;
        border-radius: 8px;
        background:#33338533;
        box-shadow: inset 0px 0px 9px #33338533;
        overflow: auto;
        padding-right:4px;
        /* // padding-top:10px; */
        flex-direction: column;
    }
    .wordList{
        border-radius: 8px;
        overflow: auto;
        &::-webkit-scrollbar{
            width:6px;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb{
            background-color:#33338533;
            border-radius: 14px;
            width:6px;
        }    
        &::-webkit-scrollbar-thumb:hover{
            background-color:#33338599;
        }
        .word{
            list-style: none;
            background:#fff;
            border-radius: 4px;
            margin:10px;
            padding:6px;
            margin-right:6px;
            /* &:first-child{
                // margin-top:0px;
            } */
        }
    }
    .typeList{
        display:flex;
        flex-wrap: wrap;
        margin:0px 10px;
        margin-top:-4px;
        li{
            color:#fff;
            list-style: none;
            border-radius: 3px;
            margin-right:6px;
            padding:4px;
            font-size:13px;
            margin-bottom:6px;
            max-width: 80px;
            text-align: center;
            flex-grow: 1;
            &.good{
                background:green;
            }
            &.bad{
                background:red;
            }
            &.neutral{
                background-color: chocolate;
            }
        }
    }
    .attrList{
        display:flex;
        padding:5px;
        .attrLi{
            color:#fff;
            background:#335599;
            border-radius: 4px;
            margin:16px;
            padding:3px 6px;
            font-size: small;
        }

        .musciBtn{
            color:#fff;
            background:#335599;
            border-radius: 6px;
            margin:6px;
            padding:3px 6px;
        }
    }
    .container{
        width:100vw;
        height:100vh;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .choice{
        border-radius: 8px;
        background:#666699;
        /* // border:2px solid #555599; */
        margin:10px;
        padding:10px;
        margin-top:0;
        box-shadow: inset 0px 0px 9px #33338533;
        color:#fff;
        h3,h6{
            text-align: center;
            user-select: none;
        }
        h3{
            color:#fff;
            animation:0.6s breathe infinite alternate;
        }
        h6{
            opacity: 0.15;
            color:#fff;
            margin:6px 0;
            font-weight: none;
        }
        ol{
            
            /* // list-style:lower-alpha; */
            button{
                margin:6px 0px;
                text-decoration:underline;
                cursor: pointer;
                transition: all 0.2s;
                user-select: none;
                display:block;
                background:none;
                border: none;
                outline: none;
                font-size:16px;
                color:#fff;
                &:hover{
                    /* // opacity: 0.5; */
                    color:red;
                    &::after{
                        content: '?';
                    }
                }
            }
        }
    }
    @keyframes breathe {
        0% {
            opacity: 1;
        }
        30%{
            opacity: 0.8;
        }
        100%{
            opacity: 0.5;
        }
    }
    #推进{
        padding:10px 16px; 
    }

  </style>
  