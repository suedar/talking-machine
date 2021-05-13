
首先你要知道两个概念语音识别 🦄 与语音合成 🐲。

> 语音识别: 语音识别（speech recognition）技术，也被称为自动语音识别（英语：Automatic Speech Recognition, ASR）、电脑语音识别（英语：Computer Speech Recognition）或是语音转文本识别（英语：Speech To Text, STT），其目标是以电脑自动将人类的语音内容转换为相应的文字。与说话人识别及说话人确认不同，后者尝试识别或确认发出语音的说话人而非其中所包含的词汇内容。

> 语音合成: 语音合成是将人类语音用人工的方式所产生。若是将电脑系统用在语音合成上，则称为语音合成器，而语音合成器可以用软/硬件所实现。文字转语音（Text-To-Speech，TTS）系统则是将一般语言的文字转换为语音，其他的系统可以描绘语言符号的表示方式，就像音标转换至语音一样。
> 而合成后的语音则是利用在数据库内的许多已录好的语音连接起来。系统则因为储存的语音单元大小不同而有所差异，若是要储存 phone 以及 diphone 的话，系统必须提供大量的储存空间，但是在语意上或许会不清楚。而用在特定的使用领域上，储存整字或整句的方式可以达到高品质的语音输出。另外，包含了声道模型以及其他的人类声音特征参数的合成器则可以创造出完整的合成声音输出。
(以上来自维基百科)

简单来说，就是`语音识别`讲语音转化为文字，而`语音合成`将文字转化为语音，

### 1. 语音识别
语音识别的接口为 [`SpeechRecognition`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)。目前的支持不是很完善，需要加上`webkit`前缀。

目前的支持情况在 [`caniuse`](https://caniuse.com/) 还未更新，可以看看这个 [`issue`](https://github.com/Fyrd/caniuse/issues/4196)。

使用方式为：

``` js
const newRecognition = new window.webkitSpeechRecognition();
newRecognition.continuous = true;
newRecognition.start();
newRecognition.onresult = async function (event) {
  console.log(event.results[0][0].transcript, 'onresult');
};
```

### 2. 语音合成
语音识别的接口为 [`SpeechSynthesisUtterance`](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)。

目前的支持程度如下

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dde8d9e4438e4778a7d0af2b4a1b017e~tplv-k3u1fbpfcp-watermark.image)

需要注意的是，由于该功能被滥用（忽然觉得可以做个鬼屋网站），需要前置的用户行为才能调用该`api`，可以戳[这里](https://www.chromestatus.com/feature/5687444770914304)看看为什么。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/845aa3b076ff4cf191b5cd4b43d444c1~tplv-k3u1fbpfcp-watermark.image)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2af4d31949ca46db99d3f5a91635ba9c~tplv-k3u1fbpfcp-watermark.image)
使用方式为：

``` js
const utterThis = new window.SpeechSynthesisUtterance(‘雷猴啊朋友’);
window.speechSynthesis.speak(utterThis);
```

### 3. 语音助手
以上两个功能结合起来，就可以做一个语音助手啦。


![emvwx-azats.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efd31d67d5e34dc194fd779956e87f7a~tplv-k3u1fbpfcp-watermark.image)


结合[青云客的接口](http://api.qingyunke.com/)做了个线上 `demo` , 请戳👇[这里](https://suedar.github.io/talk/)查看。

`Github` 地址为: https://github.com/suedar/talk

=- The End -=

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1610d6ca163d4000aaec5a5ee4b4400d~tplv-k3u1fbpfcp-watermark.image)



