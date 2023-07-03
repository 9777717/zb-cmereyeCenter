var CDN_DOMAIN = 'https://e.yiyantong.vip';
export default [ 
  {
    id: "02",
    title: "散光测试",
    questions: [ {
            type: "closeeye",
            remind: "请闭上您的右眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "请问您看到了什么？",
            image: CDN_DOMAIN+"/images/02-1.png"
        }, {
            type: "question",
            question: "请问您看到了什么？",
            options: [ "圆心处的线条更粗", "各方向线条粗细一致" ],
            whicheye: "leftEyeScore",
            score: [ 1, 0 ]
        }, {
            type: "image",
            question: "请问您看到了什么？",
            image: CDN_DOMAIN+"/images/02-2.png"
        }, {
            type: "question",
            question: "请问您看到了什么？",
            options: [ "圆心处的线条更粗", "各方向线条粗细一致" ],
            whicheye: "leftEyeScore",
            score: [ 1, 0 ]
        }, {
            type: "closeeye",
            remind: "请闭上您的左眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "请问您看到了什么？",
            image: CDN_DOMAIN+"/images/02-1.png"
        }, {
            type: "question",
            question: "请问您看到了什么？",
            options: [ "圆心处的线条更粗", "各方向线条粗细一致" ],
            whicheye: "rightEyeScore",
            score: [ 1, 0 ]
        }, {
            type: "image",
            question: "请问您看到了什么？",
            image: CDN_DOMAIN+"/images/02-2.png"
        }, {
            type: "question",
            question: "请问您看到了什么？",
            options: [ "圆心处的线条更粗", "各方向线条粗细一致" ],
            whicheye: "rightEyeScore",
            score: [ 1, 0 ]
    } ]
  }, {
    id: "03",
    title: "近视远视测试",
    questions: [ {
            type: "closeeye",
            remind: "请闭上您的右眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "请观察两侧字符的清晰度",
            image: CDN_DOMAIN+"/images/03-05-1.png"
        }, {
            type: "question",
            question: "请问哪个背景中的字符更清晰明亮？",
            options: [ "红区字符", "绿区字符", "完全一样" ],
            whicheye: "leftEyeScore",
            score: [ 1, 10, 100 ]
        }, {
            type: "image",
            question: "请观察两侧字符的清晰度",
            image: CDN_DOMAIN+"/images/03-05-2.png"
        }, {
            type: "question",
            question: "请问哪个背景中的字符更清晰明亮？",
            options: [ "红区字符", "绿区字符", "完全一样" ],
            whicheye: "leftEyeScore",
            score: [ 1, 10, 100 ]
        }, {
            type: "image",
            question: "请观察两侧字符的清晰度",
            image: CDN_DOMAIN+"/images/03-05-3.png"
        }, {
            type: "question",
            question: "请问哪个背景中的字符更清晰明亮？",
            options: [ "红区字符", "绿区字符", "完全一样" ],
            whicheye: "leftEyeScore",
            score: [ 1, 10, 100 ]
        }, {
            type: "closeeye",
            remind: "请闭上您的左眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "请观察两侧字符的清晰度",
            image: CDN_DOMAIN+"/images/03-05-1.png"
        }, {
            type: "question",
            question: "请问哪个背景中的字符更清晰明亮？",
            options: [ "红区字符", "绿区字符", "完全一样" ],
            whicheye: "rightEyeScore",
            score: [ 1, 10, 100 ]
        }, {
            type: "image",
            question: "请观察两侧字符的清晰度",
            image: CDN_DOMAIN+"/images/03-05-2.png"
        }, {
            type: "question",
            question: "请问哪个背景中的字符更清晰明亮？",
            options: [ "红区字符", "绿区字符", "完全一样" ],
            whicheye: "rightEyeScore",
            score: [ 1, 10, 100 ]
        }, {
            type: "image",
            question: "请观察两侧字符的清晰度",
            image: CDN_DOMAIN+"/images/03-05-3.png"
        }, {
            type: "question",
            question: "请问哪个背景中的字符更清晰明亮？",
            options: [ "红区字符", "绿区字符", "完全一样" ],
            whicheye: "rightEyeScore",
            score: [ 1, 10, 100 ]
        }
    ]
  }, {
    id: "04",
    title: "黄斑病变测试",
    questions: [ {
            type: "closeeye",
            remind: "请闭上您的右眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "图中的线条和方格是什么样的？",
            image: CDN_DOMAIN+"/images/04-1.png"
        }, {
            type: "question",
            question: "图中的线条和方格是什么样的？",
            options: [ "有线条波浪或弯曲", "方格大小不一样", "有线条丢失模糊或变色", "线条笔直且方格整齐" ],
            whicheye: "leftEyeScore",
            score: [ 1, 1, 1, 0]
        }, {
            type: "image",
            question: "图中的线条和方格是什么样的？",
            image:CDN_DOMAIN+"/images/04-2.png"
        }, {
            type: "question",
            question: "图中的线条和方格是什么样的？",
            options: [ "有线条波浪或弯曲", "方格大小不一样", "有线条丢失模糊或变色", "线条笔直且方格整齐" ],
            whicheye: "leftEyeScore",
            score: [ 1, 1, 1, 0]
        }, {
            type: "closeeye",
            remind: "请闭上您的左眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "图中的线条和方格是什么样的？",
            image: CDN_DOMAIN+"/images/04-1.png"
        }, {
            type: "question",
            question: "图中的线条和方格是什么样的？",
            options: [ "有线条波浪或弯曲", "方格大小不一样", "有线条丢失模糊或变色", "线条笔直且方格整齐" ],
            whicheye: "rightEyeScore",
            score: [ 1, 1, 1, 0]
        }, {
            type: "image",
            question: "图中的线条和方格是什么样的？",
            image: CDN_DOMAIN+"/images/04-2.png"
        }, {
            type: "question",
            question: "图中的线条和方格是什么样的？",
            options: [ "有线条波浪或弯曲", "方格大小不一样", "有线条丢失模糊或变色", "线条笔直且方格整齐" ],
            whicheye: "rightEyeScore",
            score: [ 1, 1, 1, 0]
    } ]
  }, {
    id: "09",
    title: "视神经测试",
    questions: [ {
            type: "closeeye",
            remind: "请闭上您的右眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "紧盯圆心，观察红色",
            image: CDN_DOMAIN+"/images/09-1.png"
        }, {
            type: "image",
            question: "紧盯圆心，观察红色",
            image: CDN_DOMAIN+"/images/09-2.png"
        }, {
            type: "question",
            question: "前后两张图中的红色一样吗？",
            options: [ "中央和后方的红色上面有阴影", "后方的红色偏橙色", "后方的红色偏粉色", "中央和后方的红色颜色一致", "都不是" ],
            whicheye: "leftEyeScore",
            score: [ 1, 1, 1, 0, 1 ]
        }, {
            type: "closeeye",
            remind: "请闭上您的左眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "紧盯圆心，观察红色",
            image: CDN_DOMAIN+"/images/09-1.png"
        }, {
            type: "image",
            question: "紧盯圆心，观察红色?",
            image: CDN_DOMAIN+"/images/09-2.png"
        }, {
            type: "question",
            question: "前后两张图中的红色一样吗？",
            options: [ "中央和后方的红色上面有阴影", "后方的红色偏橙色", "后方的红色偏粉色", "中央和后方的红色颜色一致", "都不是" ],
            whicheye: "rightEyeScore",
            score: [ 1, 1, 1, 0, 1 ]
    } ]
  }, {
    id: "10",
    title: "视觉敏感度测试",
    questions: [ {
            type: "closeeye",
            remind: "请闭上您的右眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "请问你看到的是哪一个？",
            image: CDN_DOMAIN+"/images/10-1.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "c"
        }, {
            type: "image",
            question: "",
            image:CDN_DOMAIN+"/images/10-2.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "b"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-3.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "d"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-4.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "c"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-5.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png",CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "a"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-6.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "d"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-7.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png",CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "b"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-8.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png",CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "a"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-9.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png",CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "d"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-10.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "leftEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "c"
        }, {
            type: "closeeye",
            remind: "请闭上您的左眼",
            image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
        }, {
            type: "image",
            question: "请问你看到的是哪一个？",
            image: CDN_DOMAIN+"/images/10-1.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "c"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-2.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "b"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-3.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "d"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-4.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "c"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-5.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images//10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "a"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images//10-6.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png",CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "d"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-7.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "b"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-8.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [CDN_DOMAIN+"/images/10-option1.png", CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "a"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-9.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png", CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "d"
        }, {
            type: "image",
            question: "",
            image: CDN_DOMAIN+"/images/10-10.png"
        }, {
            type: "picQuestion",
            question: "请问你看到的是哪一个？",
            options: [ CDN_DOMAIN+"/images/10-option1.png",CDN_DOMAIN+"/images/10-option2.png",CDN_DOMAIN+"/images/10-option3.png", CDN_DOMAIN+"/images/10-option4.png" ],
            whicheye: "rightEyeScore",
            imageOptions: [ "a", "b", "c", "d" ],
            answer: "c"
    } ]
  }, {
    id: "11",
    title: "对比敏感度测试",
    questions: [ {
        type: "closeeye",
        remind: "请闭上您的右眼",
        image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
    }, {
        type: "image",
        question: "请问你看到的是哪一个？",
        image:'https://static.cmereye.com/imgs/2023/06/38e75fd5925bd3ef.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/bec892f2df744bb8.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "b"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/e88180a62116e77d.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/526fd2c5033ac506.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/56605f8bc327af8d.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "a"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/8bb7506471eb340b.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/80eb46c037ccf4d5.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "b"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/439383c3ea134ef1.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "a"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/ef9e7e6b439676b9.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/859fb5911846e204.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/4d19318710d3cae4.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "b"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/bfed7a7760bfbada.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/b910af0a106ed057.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "leftEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "closeeye",
        remind: "请闭上您的左眼",
        image: 'https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png'
    }, {
        type: "image",
        question: "请问你看到的是哪一个？",
        image:'https://static.cmereye.com/imgs/2023/06/38e75fd5925bd3ef.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/bec892f2df744bb8.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "b"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/e88180a62116e77d.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/526fd2c5033ac506.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/56605f8bc327af8d.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "a"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/8bb7506471eb340b.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/80eb46c037ccf4d5.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "b"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/439383c3ea134ef1.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "a"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/ef9e7e6b439676b9.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/859fb5911846e204.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/4d19318710d3cae4.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "b"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/bfed7a7760bfbada.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "d"
    }, {
        type: "image",
        question: "",
        image:'https://static.cmereye.com/imgs/2023/06/b910af0a106ed057.png'
    }, {
        type: "picQuestion",
        question: "请问你看到的是哪一个？",
        options: [CDN_DOMAIN+"/images/11-option1.png",CDN_DOMAIN+"/images/11-option2.png",CDN_DOMAIN+"/images/11-option3.png",CDN_DOMAIN+"/images/11-option4.png" ],
        whicheye: "rightEyeScore",
        imageOptions: [ "a", "b", "c", "d" ],
        answer: "c"
    } ]
  } 
]