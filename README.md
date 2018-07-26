# logTool

**Version: 1.0.2**

## 简介

​     这是一个前端日志工具，用于日志输出，筛选，管理。

### 示例

```JavaScript
const log = new Log('Page/test');
log.debug('debug');
log.info('info');
log.warn('warn');
log.error('error');
```

![image_1](https://raw.githubusercontent.com/lalalaleo/logTool/master/_image//image_1.png)

## 开发目的

- 输出格式化：每条日志都携带 日志等级、时间(可选)、模块信息、输出信息。
- 日志输出样式更易读
- 保留所有日志：不需要因为日志过于杂乱经常清理
- 方便管理
- 根据不同情景选择输出不同日志：开发、上线等
- 模块筛选器：屏蔽某些模块的日志输出

## 功能

### 日志等级

等级分为：debug, info, warn, error.(level: 0~3)

在配置文件中，可以设置项目等级，日志等级小于项目等级时不会输出。

比如：当项目level等级为2时，仅输出，level等级大于2的日志，如：warn和error。

#### debug

![image_2](https://raw.githubusercontent.com/lalalaleo/logTool/master/_image//image_2.png)

- level：0，
- 颜色：yellowgreen，
- 方法：log.debug()，

#### info

![image_3](https://raw.githubusercontent.com/lalalaleo/logTool/master/_image//image_3.png)

- level：1，
- 颜色：skyblue，
- 方法：log.info()，

#### warn

![image_4](https://raw.githubusercontent.com/lalalaleo/logTool/master/_image//image_4.png)

- level：2，
- 颜色：gold，
- 方法：log.warn()，

#### error

![image_5](https://raw.githubusercontent.com/lalalaleo/logTool/master/_image//image_5.png)

- level：3，
- 颜色：red，
- 方法：log.error()，

### 输出时间

![image_6](https://raw.githubusercontent.com/lalalaleo/logTool/master/_image//image_6.png)

开启该功能时，会在每条日志输出时自动携带时间，默认关闭，在配置文件中可以选择开启或关闭这一项。

### 输出模块信息

输出日志时，会自动携带日志所在模块的信息，该项默认开启，暂时无法关闭。

### 模块筛选器

除了调整项目等级来选择日志输出，还可以使用filters来屏蔽一些模块的日志。

```javascript
filters: [
    'Page/test',
],
```

写法与模块相同，还可以用通配符来筛选多个模块，如：

```javascript
filters: [
    'Page/*',
],
```

这样就可以屏蔽所有的页面。

## 使用方式

### 下载

```javascript
npm i log-tool
```

### 全局引入

```javascript
import {Log} from 'log-tool'
window.Log = Log;
```

### 配置文件

#### 默认

```javascript
export default {
    level: 0,
    time: false,
    debug:{
        level: 0,
    },
    info:{
        level: 1,
    },
    warn:{
        level: 2,
    },
    error:{
        level: 3,
    },
    filters: [],
}
```

#### 自定义

```javascript
import {setConfig} from 'log-tool'
setConfig({
    level: 1,
    time: true,
    filters: [
        'Page/*'
    ],
});
```

## 使用建议

- 一般开发时，项目等级设为 1或以上（屏蔽debug日志）
- 调试时，将项目等级设为 0
- 上线时，将项目等级设为 2以上，一般设为 3（仅输出error日志）
- 必要的情况下，可以在上线时，将error日志发至后台，用于数据收集及维护 